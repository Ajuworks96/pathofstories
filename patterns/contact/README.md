# Contact Section Patterns (v1, v2, v3)

The Contact section maps communication channels, physical office locations, and form inputs for prospect inquiry.

---

## 1. Versions Scope

*   **v1 (Split Column Form/Details)**: Left column contains text, phone numbers, email addresses, and social links. Right column contains a clean, minimal text input form (outline inputs, no glowing fields). Used for consulting practices.
*   **v2 (Multi-Office Grid)**: A 3-column office grid displaying contact details for multiple locations (e.g. New York, Berlin, Tokyo). Each card includes a street address, phone, business hours, and link to Google Maps.
*   **v3 (Minimal Hero CTA)**: Clean, large typography section. A H2 heading asking a question (e.g. "Have a project in mind?"), followed directly by a large email link (`text-h2` font style) and physical office address notes.

---

## 2. Structural Specifications

### Purpose
Expose office locations and handle customer inquiries.

### Content Hierarchy
1.  **Section Title**: H2 heading.
2.  **Contact Info Columns**: Phone, email, address, and hours info.
3.  **Inquiry Form**: Structured text inputs and submit button.

### Layout Philosophy
*   Input fields must use clean outline borders (`border border-border`) with subtle focus rings.
*   Keep compositions flat. Avoid mapping full-width interactive map blocks unless requested.

### Responsive Behavior
*   Input fields stack vertically on mobile screens.
*   Labels must remain positioned directly above inputs for clear reading order on mobile.

### Accessibility Considerations
*   Every input field must be paired with an explicit semantic `<label>` tag or appropriate `aria-label`.
*   Form submission buttons must announce error states dynamically to screen readers.
*   Ensure clear focus states on all interactive inputs.

### SEO Considerations
*   Incorporate local business structured data schema matches (NAP: Name, Address, Phone).
*   Add localized keywords inside contact details (e.g., "Chicago Architecture Office").
