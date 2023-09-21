export default {
    name: "collection",
    title: "Collection",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Collection Name",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
        },
        {
            name: "image",
            title: "Collection Image",
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
            name: "products",
            title: "Products",
            type: "array",
            of: [{ type: "reference", to: [{ type: "product" }] }],
        },
    ],
}