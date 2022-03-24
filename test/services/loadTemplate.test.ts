import { loadTemplate } from "../../src";
import { join } from "path";
import { TemplateNotFoundException } from "../../src/exceptions/TemplateNotFoundException";

describe("Load template", () => {
  it("Basic template loading", () => {
    const directories = [join(process.cwd(), "test", "assets")];
    expect("<h1>ciao</h1>").toBe(
      loadTemplate("basic_template", directories).trim()
    );
  });

  it("Template not found", () => {
    const directories = [join(process.cwd(), "test", "assets")];
    const t = () => {
      loadTemplate("not_exist_template", directories);
    };
    expect(t).toThrow(TemplateNotFoundException);
  });

  it("Ascent folders loading", () => {
    const directories = [
      join(process.cwd(), "test", "assets", "templateDir", "dir1"),
      join(process.cwd(), "test", "assets", "templateDir", "dir2"),
    ];
    expect("<h1>TEMPLATE2</h1>").toBe(
      loadTemplate("template2", directories).trim()
    );
  });
});
