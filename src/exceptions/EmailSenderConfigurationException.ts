export class EmailSenderConfigurationException extends Error {
  public statusCode: number;
  public statusMessage: string;
  constructor(message: string) {
    super(message);
    this.statusCode = 500;
    this.statusMessage = message;
  }
}
