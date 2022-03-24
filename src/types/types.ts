import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

/**
 * Email config
 */
export type EmailConfig = {
  emailTemplatesDirectories: string[];
  sender: string;
  transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo>;
};

/**
 * Template variables
 */
export type TemplateVariables = {
  [key: string]: string;
};
