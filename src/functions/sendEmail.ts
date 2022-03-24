import { SendEmailException } from "../exceptions/SendEmailException.js";
import { loadTemplate } from "../services/loadTemplate.js";
import { resolveTemplate } from "../services/resolveTemplate.js";
import { EmailConfig, TemplateVariables } from "../types/types.js";

/**
 * Send Html email
 * @param to
 * @param subject
 * @param templateName
 * @param variables
 */
export async function sendEmail(
  config: EmailConfig,
  to: string,
  subject: string,
  templateName: string,
  variables: TemplateVariables
) {
  try {
    const templateContent: string = loadTemplate(
      templateName,
      config.emailTemplatesDirectories
    );
    const resolvedTemplateContent: string = resolveTemplate(
      templateContent,
      variables
    );
    const mailOptions = {
      from: config.sender,
      to: to,
      subject: subject,
      html: resolvedTemplateContent,
    };
    try {
      config.transporter.sendMail(mailOptions);
    } catch (error) {
      throw new SendEmailException(error);
    }
  } catch (error) {
    throw error;
  }
}
