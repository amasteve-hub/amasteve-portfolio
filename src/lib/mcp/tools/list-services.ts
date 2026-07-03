import { defineTool } from "@lovable.dev/mcp-js";

const services = [
  { name: "Digital Marketing", description: "SEO, paid, and organic growth strategies." },
  { name: "Front-End Engineering", description: "Fast, accessible React & TypeScript interfaces." },
  { name: "Graphic Design", description: "Brand identity, editorial, and print systems." },
  { name: "Videography", description: "Cinematic direction, shooting, and post-production." },
  { name: "Data Analytics", description: "Insights that turn numbers into direction." },
  { name: "Blogging", description: "Long-form writing that earns attention and trust." },
  { name: "Social Media Management", description: "Strategy and management across platforms." },
  { name: "Community Development", description: "Rural mobilisation, programs, and civic impact." },
];

export default defineTool({
  name: "list_services",
  title: "List services",
  description: "List the professional services offered by Amasteve Integrated Services.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
    structuredContent: { services },
  }),
});
