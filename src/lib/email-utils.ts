import * as fs from 'fs/promises';
import * as path from 'path';

// Define the base directory for email templates
const templatesDir = path.join(process.cwd(), 'src', 'lib', 'email-templates');

/**
 * Reads an HTML email template and replaces placeholders with provided data.
 * @param templateName The name of the template file (e.g., 'user-confirmation.html').
 * @param data An object containing key-value pairs for replacement (e.g., { fullName: 'John Doe' }).
 * @returns The templated HTML string.
 */
export async function getTemplatedEmail(templateName: string, data: Record<string, string>): Promise<string> {
  const filePath = path.join(templatesDir, templateName);
  let html = await fs.readFile(filePath, 'utf-8');

  // Replace placeholders in the HTML content
  for (const [key, value] of Object.entries(data)) {
    const regex = new RegExp(`{{${key}}}`, 'g');
    html = html.replace(regex, value);
  }

  // Replace current year placeholder
  html = html.replace(/{{currentYear}}/g, new Date().getFullYear().toString());

  return html;
}
