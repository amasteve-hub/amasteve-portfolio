import { defineTool } from "@lovable.dev/mcp-js";

const stories = [
  {
    title: "Youth Digital Skills Initiative",
    description:
      "Introduced foundational design and marketing training to young people in the ward, opening pathways to online income.",
  },
  {
    title: "Community Mobilisation",
    description:
      "Coordinated grassroots forums that surfaced local priorities and connected residents with district-level programs.",
  },
  {
    title: "Storytelling for Development",
    description:
      "Documented rural voices through photo, video and long-form writing to attract advocacy and investment.",
  },
];

export default defineTool({
  name: "list_community_impact",
  title: "List community impact stories",
  description:
    "List community development stories from Amasteve's work as a Ward Rural Development Officer.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(stories, null, 2) }],
    structuredContent: { stories },
  }),
});
