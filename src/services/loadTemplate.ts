import { existsSync, readFileSync } from "fs";
import { TemplateNotFoundException } from "../exceptions/TemplateNotFoundException.js";
import { join } from "path";

/**
 * Load template from file system
 * @param templateName
 */
export function loadTemplate(
  templateName: string,
  emailTemplatesDirectories: string[]
): string {
  let content: string = undefined;
  emailTemplatesDirectories.forEach((dir: string) => {
    const templatePath = join(dir, `${templateName}.html`);
    if (existsSync(templatePath)) {
      // read file content
      content = readFileSync(templatePath, {
        encoding: "utf8",
      }).toString();
    }
  });
  if (content) {
    return content;
  } else {
    throw new TemplateNotFoundException(templateName);
  }
}
