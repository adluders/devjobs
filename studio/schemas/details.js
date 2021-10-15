export default {
  title: "Details",
  name: "details",
  type: "object",
  fields: [
    {
      title: "Content",
      name: "content",
      type: "text",
    },
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [{ type: "text" }],
    },
  ],
};
