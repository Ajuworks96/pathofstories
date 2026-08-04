# Headless WordPress Integration Architecture

This document specifies the target headless architecture connecting the **Velvetbyte Next.js Frontend** to a remote **WordPress CMS**. It focuses on API choices, content models, caching pipelines, and SEO synchronization.

---

## 🏗️ 1. Headless Architecture Schema

Velvetbyte decouples visual representation from content management. WordPress serves strictly as a structured database API; Next.js functions as a high-performance static rendering engine:

```
[ WordPress CMS ] ──( GraphQL / REST )──▶ [ Next.js Frontend (Server) ]
  ├── ACF Content Models                     ├── GraphQL Client (lib/wordpress)
  └── Webhook Trigger (Save Page) ──( POST )──▶ └── Revalidation API (app/api/revalidate)
```

---

## 📡 2. API Selection & Fetch Clients

We recommend **WPGraphQL** (WordPress plugin providing GraphQL endpoints) over standard REST APIs due to schema self-documentation, nested relationships parsing, and optimized request sizes (no over-fetching):

### GraphQL Client Wrapper (`lib/wordpress/client.ts`)
```typescript
interface FetchParams {
  query: string;
  variables?: Record<string, unknown>;
  tags?: string[]; // Cache validation tags
}

export async function fetchWordPress<T>({ query, variables, tags = [] }: FetchParams): Promise<T> {
  const endpoint = process.env.WORDPRESS_API_URL;
  if (!endpoint) throw new Error("WORDPRESS_API_URL is missing in environment config.");

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: { tags }, // Next.js fetch cache tag registration
  });

  const json = await res.json();
  if (json.errors) {
    console.error("[WORDPRESS_API_ERRORS]", json.errors);
    throw new Error("Failed to fetch data from WordPress GraphQL API.");
  }

  return json.data as T;
}
```

---

## 🧩 3. Advanced Custom Fields (ACF) Block Renderer

WordPress pages are structured using **Advanced Custom Fields (ACF) Flexible Content Layouts**. Next.js maps layout sections dynamically based on content schemas returned by GraphQL:

```typescript
// app/[slug]/page.tsx
import { fetchPageData } from "@/lib/wordpress/queries";
import { Section } from "@/components/layout/Section";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";

export default async function CMSPage({ params }: { params: { slug: string } }) {
  const page = await fetchPageData(params.slug);

  return (
    <main>
      {page.layouts.map((layout, index) => {
        switch (layout.__typename) {
          case "Page_Layouts_Hero":
            return <Hero key={index} {...layout} />;
          case "Page_Layouts_About":
            return <About key={index} {...layout} />;
          default:
            return null;
        }
      })}
    </main>
  );
}
```

---

## ⚡ 4. On-Demand Cache Revalidation

To maintain absolute static page load speeds without showing stale content, Velvetbyte uses Next.js **On-Demand Cache Revalidation**:

1.  **WordPress Webhook**: A plugin (e.g. *WP Jam* or custom hook) fires a webhook POST request to the Next.js API endpoint `app/api/revalidate/route.ts` whenever a page is edited/saved:
    ```typescript
    // app/api/revalidate/route.ts
    import { NextRequest, NextResponse } from "next/server";
    import { revalidateTag } from "next/cache";

    export async function POST(req: NextRequest) {
      const secret = req.nextUrl.searchParams.get("secret");
      if (secret !== process.env.REVALIDATION_TOKEN) {
        return NextResponse.json({ message: "Invalid secret token" }, { status: 401 });
      }

      const body = await req.json();
      const tagToInvalidate = body.page_slug; // e.g. "homepage" or dynamic tags
      
      if (tagToInvalidate) {
        revalidateTag(tagToInvalidate);
        return NextResponse.json({ revalidated: true, now: Date.now() });
      }

      return NextResponse.json({ message: "Missing page slug tag" }, { status: 400 });
    }
    ```

---

## 🔍 5. SEO Schema Synchronization

To preserve client rankings and SEO rules, Velvetbyte syncs headers and tags from SEO plugins (e.g., Yoast SEO, RankMath) directly into Next.js metadata structures:

*   Configure WPGraphQL to expose Yoast SEO/RankMath GraphQL schemas.
*   Query SEO schemas (title tags, canonical links, description strings, Open Graph schemas) during server-side renders.
*   Pass metadata directly to Next.js `generateMetadata` exports:
    ```typescript
    export async function generateMetadata({ params }): Promise<Metadata> {
      const seoData = await fetchPageSEO(params.slug);
      return {
        title: seoData.title,
        description: seoData.metaDesc,
        openGraph: {
          title: seoData.opengraphTitle,
          description: seoData.opengraphDescription,
        },
      };
    }
    ```
