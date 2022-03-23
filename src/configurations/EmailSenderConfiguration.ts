import { EmailTransporter } from "../types/types.js";

/**
 * Email sender configuration
 */
class EmailSenderConfiguration {
  /**
   * Html mail template directory
   * default: email_templates
   */
  HTML_TEMPLATE_DIR: string = "email_templates";
  /**
   * Trasporters
   */
  TRANSPORTERS: EmailTransporter[] = [];
}

export const emailSenderConfiguration = new EmailSenderConfiguration();
