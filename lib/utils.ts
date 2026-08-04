/**
 * Conditionally joins class names together into a single string.
 * Zero external dependencies.
 *
 * @param classes Array of class names or conditional class mappings
 * @returns Clean space-separated class string
 */
export function cn(...classes: (string | boolean | undefined | null | { [key: string]: boolean | undefined | null })[]): string {
  const result: string[] = [];

  for (const item of classes) {
    if (!item) continue;
    if (typeof item === "string") {
      result.push(item);
    } else if (typeof item === "object") {
      for (const [key, value] of Object.entries(item)) {
        if (value) {
          result.push(key);
        }
      }
    }
  }

  return result.join(" ");
}
