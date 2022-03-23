import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

/**
 * Email transporter
 */
export type EmailTransporter = {
  sender: string;
  transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo>;
};

/**
 * Email services
 */
export enum EmailServices {
  GMAIL = "gmail",
}
