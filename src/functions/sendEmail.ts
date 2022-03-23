import { emailSenderConfiguration } from "../configurations/EmailSenderConfiguration.js";
import { EmailSenderConfigurationException } from "../exceptions/EmailSenderConfigurationException.js";
import { SendEmailException } from "../exceptions/SendEmailException.js";
import { resolveTemplate } from "../services/resolveTemplate.js";
import { EmailTransporter } from "../types/types.js";

/**
 * Send Html email
 * @param to
 * @param subject
 * @param templateName
 * @param variables
 */
export async function sendEmail(
  to: string,
  subject: string,
  templateName: string,
  variables: Map<string, string>,
  sender?: string
) {
  let emailTransporter: EmailTransporter;
  if (sender) {
    emailTransporter = emailSenderConfiguration.TRANSPORTERS.find(
      (x) => x.sender === sender
    );
    if (!emailTransporter) {
      throw new EmailSenderConfigurationException(
        `Sender ${sender} not found in configuration`
      );
    }
  } else {
    emailTransporter = emailSenderConfiguration.TRANSPORTERS[0];
    if (!emailTransporter) {
      throw new EmailSenderConfigurationException(
        "Tranporters configuration is empty"
      );
    }
  }
  const mailOptions = {
    from: sender,
    to: to,
    subject: subject,
    html: resolveTemplate(templateName, variables),
  };
  try {
    emailTransporter.transporter.sendMail(mailOptions);
  } catch (error) {
    throw new SendEmailException(error);
  }
}
