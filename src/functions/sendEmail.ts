import { emailSenderConfiguration } from "../configurations/EmailSenderConfiguration.js";
import { resolveTemplate } from "../services/resolveTemplate.js";

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
  variables: Map<string, string>
) {
  const mailOptions = {
    from: emailSenderConfiguration.getSender(),
    to: to,
    subject: subject,
    html: resolveTemplate(templateName, variables),
  };
  emailSenderConfiguration.getTransporter().sendMail(mailOptions);
}
