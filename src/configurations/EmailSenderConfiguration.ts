import { EmailServices, EmailTransporter } from "../types/types.js";
import nodemailer from "nodemailer";

/**
 * Email sender configuration
 */
class EmailSenderConfiguration {
  /**
   * Html mail template directory
   * default: email_templates
   */
  HTML_TEMPLATE_DIR: "email_templates";
  /**
   * Trasporter maps
   */
  TRANSPORTER_MAP: Map<string, EmailTransporter> = new Map<
    string,
    EmailTransporter
  >();

  /**
   * Set tranporter
   */
  setTransporter(
    transporterId: string,
    service: EmailServices,
    sender: string,
    password: string
  ) {
    this.TRANSPORTER_MAP.set(transporterId, {
      sender: sender,
      transporter: nodemailer.createTransport({
        service: service,
        auth: {
          user: sender,
          pass: password,
        },
      }),
    });
  }
}

export const emailSenderConfiguration = new EmailSenderConfiguration();
