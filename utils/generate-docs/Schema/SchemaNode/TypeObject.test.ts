import Schema from "../Schema.js";
import TypeObject, { TypeObjectSchemaNodeJson } from "./TypeObject.js";

const FIXTURE: TypeObjectSchemaNodeJson = {
  $id: "https://raw.githubusercontent.com/TenKeyLabs/Open-Cap-Format-OCF/main/schema/types/TestTypeObject.schema.json",
  title: "Test Title",
  description:
    "This is a test fixture exemplifying an TypeObject schema from OCF",
  type: "object",
  properties: {
    1: { description: "Example description", type: "string" },
    refProperty1: {
      $ref: "https://raw.githubusercontent.com/TenKeyLabs/Open-Cap-Format-OCF/main/schema/types/TestTypeObject.schema.json",
    },
  },
  required: ["1"],
};

describe("TypeObject", () => {
  describe("#markdownOutput", () => {
    it("returns a string representing the node as Markdown", () => {
      const schema = new Schema([FIXTURE]);
      const actual = new TypeObject(schema, FIXTURE).markdownOutput();
      let copyright_year = new Date().getFullYear();

      expect(actual).toEqual(`:house: [Documentation Home](../../../README.md)

---

### Test Title

\`https://raw.githubusercontent.com/TenKeyLabs/Open-Cap-Format-OCF/main/schema/types/TestTypeObject.schema.json\`

_This is a test fixture exemplifying an TypeObject schema from OCF_

**Data Type:** \`OCF TYPE\`

**Properties:**

| Property     | Type                                               | Description                                                       | Required   |
| ------------ | -------------------------------------------------- | ----------------------------------------------------------------- | ---------- |
| 1            | \`STRING\`                                           | Example description                                               | \`REQUIRED\` |
| refProperty1 | [schema/types/TestTypeObject](./TestTypeObject.md) | This is a test fixture exemplifying an TypeObject schema from OCF | -          |

**Source Code:** [schema/types/TestTypeObject](../../../../schema/types/TestTypeObject.schema.json)

Copyright © ${copyright_year} Open Cap Table Coalition.
`);
    });
  });
});
