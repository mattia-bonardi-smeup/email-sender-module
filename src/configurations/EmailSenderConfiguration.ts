import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

/**
 * Email sender configuration
 */
class EmailSenderConfiguration {
  // Email credential configuration
  private SENDER: string;
  private TRASPORTER: nodemailer.Transporter<SMTPTransport.SentMessageInfo>;
  // Email content configuration
  private TEMPLATE_DIR: string = "email_templates";

  public getSender() {
    return this.SENDER;
  }

  public getTransporter() {
    return this.TRASPORTER;
  }

  public getTemplateDir() {
    return this.TEMPLATE_DIR;
  }

  public configureEmailSender(
    service: string,
    sender: string,
    password: string
  ) {
    this.SENDER = sender;
    this.TRASPORTER = nodemailer.createTransport({
      service: service,
      auth: {
        user: sender,
        pass: password,
      },
    });
  }

  public setTemplateDir(templateDir: string) {
    this.TEMPLATE_DIR = templateDir;
  }
}

export const emailSenderConfiguration = new EmailSenderConfiguration();
