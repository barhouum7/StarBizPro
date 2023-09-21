    // Product Schema
    export default {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Product Name",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
        },
        {
            name: "price",
            title: "Price",
            type: "number",
        },
        {
            name: "material",
            title: "Material",
            type: "string",
        },
        {
            name: "gemstones",
            title: "Gemstones",
            type: "array",
            of: [{ type: "string" }],
        },
        {
            name: "inventoryStatus",
            title: "Inventory Status",
            type: "string",
            options: {
                list: ["In Stock", "Out of Stock"],
            },
        },
        {
            name: "image",
            title: "Product Image",
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
        }
    ],
};