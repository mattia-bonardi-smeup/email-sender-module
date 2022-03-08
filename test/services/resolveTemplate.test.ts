import * as loadTemplate from "../../src/services/loadTemplate";
import resolveTemplate from "../../src/services/resolveTemplate";

describe("Resolve template tests", () => {
  it("", () => {
    const template: string = "<h1>test ${var1}</h1><h2>test2 ${var2}</h2>";
    const correctTemplate: string =
      "<h1>test testvar1</h1><h2>test2 testvar2</h2>";
    const spy = jest.spyOn(loadTemplate, "default");
    spy.mockReturnValue(template);

    const variables = new Map();
    variables.set("var1", "testvar1");
    variables.set("var2", "testvar2");
    const resolvedTemplate = resolveTemplate("aaa", variables);
    expect(resolvedTemplate).toBe(correctTemplate);
  });
});
