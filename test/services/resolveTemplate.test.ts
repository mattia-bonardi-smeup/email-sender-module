import { resolveTemplate, TemplateVariables } from "../../src";

describe("Resolve template", () => {
  it("Basic template loading", () => {
    const content = "<h1>ciao ${test1} e ${test2}</h1>";
    const variables: TemplateVariables = {
      test1: "pippo",
      test2: "pluto",
    };
    expect("<h1>ciao pippo e pluto</h1>").toBe(
      resolveTemplate(content, variables)
    );
  });
});
