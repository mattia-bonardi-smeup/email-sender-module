import { emailSenderConfiguration } from "../configurations/EmailSenderConfiguration.js";
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
  transporterId?: string
) {
  let transporter: EmailTransporter;
  if (transporterId) {
    transporter = emailSenderConfiguration.TRANSPORTER_MAP.get(transporterId);
  } else {
    const [firstTraspoter] = emailSenderConfiguration.TRANSPORTER_MAP.values();
    transporter = firstTraspoter;
  }
  const mailOptions = {
    from: transporter.sender,
    to: to,
    subject: subject,
    html: resolveTemplate(templateName, variables),
  };
  transporter.transporter.sendMail(mailOptions);
}
