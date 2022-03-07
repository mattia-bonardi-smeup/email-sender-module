import * as fs from "fs";
import emailSenderConfiguration from "../configurations/EmailSenderConfiguration";

/**
 * Load template from file system
 * @param templateName
 */
export default function loadTemplate(templateName: string): string {
  return fs
    .readFileSync(
      process.cwd() +
        emailSenderConfiguration.getTemplateDir() +
        templateName +
        ".html"
    )
    .toString();
}
