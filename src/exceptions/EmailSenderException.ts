export class EmailSenderException extends Error {
  public statusCode: number;
  public statusMessage: string;
  constructor(statusCode: number, statusMessage: string) {
    super();
    this.statusCode = statusCode;
    this.statusMessage = statusMessage;
  }
}
