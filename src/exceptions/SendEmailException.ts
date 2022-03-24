import { EmailSenderException } from "./EmailSenderException.js";

export class SendEmailException extends EmailSenderException {
  public error: any;
  constructor(error: any) {
    super(500, "Error while sending the email");
    this.error = error;
  }
}
