import { defineTool } from "@lovable.dev/mcp-js";

const projects = [
  { title: "Loslean — Brand Identity", discipline: "Graphic Design", year: 2025 },
  { title: "Editorial Web Platform", discipline: "Front-End Engineering", year: 2025 },
  { title: "Documentary Series", discipline: "Videography", year: 2024 },
  { title: "Growth Analytics Dashboard", discipline: "Data Analytics", year: 2024 },
];

export default defineTool({
  name: "list_projects",
  title: "List featured projects",
  description: "List selected projects and portfolio work by Amasteve.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(projects, null, 2) }],
    structuredContent: { projects },
  }),
});
