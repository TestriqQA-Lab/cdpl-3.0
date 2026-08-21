import * as fs from 'fs/promises';
import * as path from 'path';

// Define the base directory for email templates
const templatesDir = path.join(process.cwd(), 'src', 'lib', 'email-templates');

/**
 * `{{#if key}} … {{/if}}` — an optional block, kept only when `key` has a
 * value. `admin-notification-event-contact.html` wraps its Message section in
 * one. No template nests them, so a non-greedy body is enough.
 */
const CONDITIONAL_BLOCK =
  /\{\{#if\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\}\}([\s\S]*?)\{\{\/if\s*\}\}/g;

/** `{{key}}` — a value placeholder. */
const PLACEHOLDER = /\{\{\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\}\}/g;

/**
 * Reads an HTML email template and replaces placeholders with provided data.
 *
 * Every `{{token}}` in the template is resolved, including ones the caller did
 * not supply — those become an empty string. The substitution used to loop
 * over the *data* keys instead, so a placeholder with no matching key was
 * simply never visited and survived into the sent mail as literal
 * `{{interest}}` text. Two callers hit that in practice: the contact form
 * (`src/app/api/contact/route.ts`) omits `interest` when the visitor leaves
 * the "Area of Interest" select untouched, and the brochure route
 * (`src/app/api/download-brochure/route.ts`) never passes `year` at all.
 *
 * @param templateName The name of the template file (e.g., 'user-confirmation.html').
 * @param data An object containing key-value pairs for replacement (e.g., { fullName: 'John Doe' }).
 * @returns The templated HTML string.
 */
export async function getTemplatedEmail(templateName: string, data: Record<string, string>): Promise<string> {
  const filePath = path.join(templatesDir, templateName);
  const html = await fs.readFile(filePath, 'utf-8');

  const currentYear = new Date().getFullYear().toString();

  const hasValue = (key: string) => {
    const value = data[key];
    return value !== undefined && value !== null && String(value).trim() !== '';
  };

  // Resolve optional blocks first, so placeholders inside a dropped block are
  // never considered.
  const withBlocks = html.replace(CONDITIONAL_BLOCK, (_match, key: string, body: string) =>
    hasValue(key) ? body : '',
  );

  // Substitute what remains in a single pass. The replacement is a function
  // rather than a string so that `$&`/`$'` sequences inside a submitted value
  // (a name, a message) are inserted literally instead of being read as
  // replacement patterns — and so a substituted value is never itself
  // rescanned for placeholders.
  return withBlocks.replace(PLACEHOLDER, (_match, key: string) => {
    if (hasValue(key)) return String(data[key]);
    // Both tokens mean "now" in every template that uses them; no caller
    // passes anything else.
    if (key === 'year' || key === 'currentYear') return currentYear;
    return '';
  });
}
