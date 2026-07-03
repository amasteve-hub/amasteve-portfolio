import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_bio",
  title: "Get bio",
  description: "Return Stephen Egar Ayim (Amasteve)'s professional biography and roles.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const bio = {
      name: "Stephen Egar Ayim",
      alias: "Amasteve",
      title: "Founder & CEO, Amasteve Integrated Services",
      publicRole: "Ward Rural Development Officer",
      location: "Ghana",
      summary:
        "Multidisciplinary digital professional working across digital marketing, front-end engineering, graphic design, videography, data analytics, blogging, social media management, and community development.",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(bio, null, 2) }],
      structuredContent: bio,
    };
  },
});
