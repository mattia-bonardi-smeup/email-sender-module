import fs from "fs";
import { emailSenderConfiguration } from "../configurations/EmailSenderConfiguration.js";

/**
 * Load template from file system
 * @param templateName
 */
export function loadTemplate(templateName: string): string {
  return fs
    .readFileSync(
      process.cwd() +
        emailSenderConfiguration.getTemplateDir() +
        templateName +
        ".html"
    )
    .toString();
}
