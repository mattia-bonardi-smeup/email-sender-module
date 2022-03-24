export class TemplateNotFoundException extends Error {
  public statusCode: number;
  public statusMessage: string;
  constructor(templateName: string) {
    super();
    this.statusCode = 500;
    this.statusMessage = `Template ${templateName} not found exception`;
  }
}
