import { EmailServices, EmailTransporter } from "../types/types.js";
import nodemailer from "nodemailer";
import { emailSenderConfiguration } from "./EmailSenderConfiguration.js";

/**
 * Create email transporter
 * @param sender
 * @param password
 * @param service
 * @returns
 */
export function createEmailTransporter(
  sender: string,
  password: string,
  service: EmailServices
): EmailTransporter {
  return {
    sender: sender,
    transporter: nodemailer.createTransport({
      service: service,
      auth: {
        user: sender,
        pass: password,
      },
    }),
  };
}

export function configureEmailSenderModule(
  emailTemplate: string,
  emailTransporters: EmailTransporter[]
) {
  emailSenderConfiguration.HTML_TEMPLATE_DIR = emailTemplate;
  emailSenderConfiguration.TRANSPORTERS = emailTransporters;
}
