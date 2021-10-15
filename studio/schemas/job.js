export default {
  title: "Job",
  name: "job",
  type: "document",
  fields: [
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
    {
      name: "logoBackground",
      title: "Background",
      type: "string",
    },
    {
      name: "position",
      title: "Position",
      type: "string",
    },
    {
      title: "Posted Date",
      name: "postedDate",
      type: "string",
    },
    {
      name: "contract",
      title: "Contract",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "website",
      title: "Website",
      type: "string",
    },
    {
      name: "apply",
      title: "Apply",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      title: "Requirement",
      name: "requirement",
      type: "details",
    },
    {
      title: "Role",
      name: "role",
      type: "details",
    },
  ],
};
