import loadTemplate from "./loadTemplate";

/**
 * Resolve template with variables
 * @param templateName
 * @param variables
 * @returns
 */
export default function resolveTemplate(
  templateName: string,
  variables: Map<string, string>
) {
  // getting template as string
  let content: string = loadTemplate(templateName);
  if (content) {
    // getting all variables from template
    const regex = /\$\{([A-z])\w+\}/g;
    let m;
    while ((m = regex.exec(content)) !== null) {
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }
      // Evaluate variables
      if (m && m.length > 0) {
        const variableName = m[0].slice(2, -1);
        const variableValue = variables.get(variableName);
        if (variableValue) {
          content = content.replace(m[0], variableValue);
        }
      }
    }
  }
  return content;
}
