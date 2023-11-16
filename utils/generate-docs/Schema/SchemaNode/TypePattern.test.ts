import Schema from "../Schema.js";
import TypePattern, { TypePatternSchemaNodeJson } from "./TypePattern.js";

const FIXTURE: TypePatternSchemaNodeJson = {
  $id: "https://raw.githubusercontent.com/TenKeyLabs/Open-Cap-Format-OCF/main/schema/types/TestTypePattern.schema.json",
  title: "Test Title",
  description:
    "This is a test fixture exemplifying an TypePattern schema from OCF",
  type: "string",
  pattern: "^[a-fA-F0-9]{32}$",
};

describe("TypePattern", () => {
  describe("#markdownOutput", () => {
    it("returns a string representing the node as Markdown", () => {
      const schema = new Schema([FIXTURE]);
      const actual = new TypePattern(schema, FIXTURE).markdownOutput();
      let copyright_year = new Date().getFullYear();

      expect(actual).toEqual(`:house: [Documentation Home](../../../README.md)

---

### Test Title

\`https://raw.githubusercontent.com/TenKeyLabs/Open-Cap-Format-OCF/main/schema/types/TestTypePattern.schema.json\`

**Description:** _This is a test fixture exemplifying an TypePattern schema from OCF_

**Data Type:** \`Primitive\`

**Value:** \`STRING\` - _Must Match Regex Pattern: \`^[a-fA-F0-9]{32}$\`_

**Source Code:** [schema/types/TestTypePattern](../../../../schema/types/TestTypePattern.schema.json)

Copyright © ${copyright_year} Open Cap Table Coalition.
`);
    });
  });
});
