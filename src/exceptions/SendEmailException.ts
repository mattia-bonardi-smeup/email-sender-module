export class SendEmailException extends Error {
  public statusCode: number;
  public statusMessage: string;
  constructor(error: any) {
    super(error);
    this.statusCode = 500;
    this.statusMessage = "Email sender exception";
  }
}
