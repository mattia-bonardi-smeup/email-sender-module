import { EmailConfig } from "../types/types.js";
import nodemailer from "nodemailer";

/**
 * Create email transporter
 * @param emailTemplatesDirectories
 * @param sender
 * @param password
 * @param service
 * @returns
 */
export function createEmailConfig(
  emailTemplatesDirectories: string[],
  sender: string,
  password: string,
  service: string
): EmailConfig {
  return {
    emailTemplatesDirectories: emailTemplatesDirectories,
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
