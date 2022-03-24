import { EmailSenderException } from "./EmailSenderException.js";

export class TemplateNotFoundException extends EmailSenderException {
  constructor(templateName: string) {
    super(500, `Template ${templateName} not found exception`);
  }
}
