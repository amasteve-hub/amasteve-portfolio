import { defineTool } from "@lovable.dev/mcp-js";

const contact = {
  email: "hello@amasteve.com",
  socials: {
    facebook: "https://facebook.com/amasteve",
    linkedin: "https://linkedin.com/in/amasteve",
    youtube: "https://youtube.com/@amasteve",
    instagram: "https://instagram.com/amasteve",
    x: "https://x.com/amasteve",
  },
  availability: "Select projects worldwide, based in Ghana.",
};

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description: "Return Amasteve's email, social profiles, and current availability.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
    structuredContent: contact,
  }),
});
