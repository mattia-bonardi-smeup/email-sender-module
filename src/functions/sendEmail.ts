import emailSenderConfiguration from "../configurations/EmailSenderConfiguration";
import resolveTemplate from "../services/resolveTemplate";

/**
 * Send Html email
 * @param to
 * @param subject
 * @param templateName
 * @param variables
 */
export default async function sendEmail(
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
