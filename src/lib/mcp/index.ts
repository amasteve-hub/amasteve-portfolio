import { defineMcp } from "@lovable.dev/mcp-js";
import getBio from "./tools/get-bio";
import listServices from "./tools/list-services";
import listProjects from "./tools/list-projects";
import getContactInfo from "./tools/get-contact-info";
import listCommunityImpact from "./tools/list-community-impact";

export default defineMcp({
  name: "amasteve-portfolio-mcp",
  title: "Amasteve Portfolio MCP",
  version: "0.1.0",
  instructions:
    "Tools for querying Stephen Egar Ayim (Amasteve)'s portfolio: bio, services, featured projects, community impact, and contact info.",
  tools: [getBio, listServices, listProjects, getContactInfo, listCommunityImpact],
});
