import Schema from "./Schema.js";
import { FileSchemaNodeJson } from "./SchemaNode/File.js";

const FILE_SCHEMA_JSON_FIXTURE: FileSchemaNodeJson = {
  $id: "https://raw.githubusercontent.com/TenKeyLabs/Open-Cap-Format-OCF/main/schema/files/test_file",
  title: "Test Title",
  description: "This is a test fixture exemplifying a File schema from OCF",
  type: "object",
  allOf: [{ $ref: "foo" }],
  properties: {
    items: {
      $ref: "https://raw.githubusercontent.com/TenKeyLabs/Open-Cap-Format-OCF/main/schema/files/test_file",
    },
    file_type: { const: "OCF_TEST_FILE" },
  },
  required: ["foo"],
};

describe("Schema", () => {
  describe("#findSchemaNodeById", () => {
    it("return the SchemaNode matching the given `id`", () => {
      const schema = new Schema([FILE_SCHEMA_JSON_FIXTURE]);

      const actual = schema.findSchemaNodeById(
        "https://raw.githubusercontent.com/TenKeyLabs/Open-Cap-Format-OCF/main/schema/files/test_file"
      );

      expect(actual?.id()).toEqual(
        "https://raw.githubusercontent.com/TenKeyLabs/Open-Cap-Format-OCF/main/schema/files/test_file"
      );
    });
  });

  describe("#findSchemaNodeBySchemaRelativeId", () => {
    it("return the SchemaNode matching the given `partial id`", () => {
      const schema = new Schema([FILE_SCHEMA_JSON_FIXTURE]);

      const actual = schema.findSchemaNodeBySchemaRelativeId("files/test_file");

      expect(actual?.id()).toEqual(
        "https://raw.githubusercontent.com/TenKeyLabs/Open-Cap-Format-OCF/main/schema/files/test_file"
      );
    });
  });

  describe("#filterSchemaNodesByParentType", () => {
    it("return the SchemaNode matching the given `id`", () => {
      const schema = new Schema([FILE_SCHEMA_JSON_FIXTURE]);

      const actual = schema.filterSchemaNodesByParentType("files");

      expect(actual).toHaveLength(1);
    });
  });
});
