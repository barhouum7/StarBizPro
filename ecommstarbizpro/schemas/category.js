export default {
    name: "category",
    title: "Category",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Category Name",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
        },
        {
            name: "image",
            title: "Category Image",
            type: "array",
            of: [{ type: "image" }],
            options: {
                hotspot: true,
            },
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
        },
        {
            name: "collections",
            title: "Collections",
            type: "array",
            of: [{ type: "reference", to: [{ type: "collection" }] }],
        },
    ],
}