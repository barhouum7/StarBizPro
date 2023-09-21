export default {
    name: "order",
    title: "Order",
    type: "document",
    fields: [
        {
        name: "orderNumber",
        title: "Order Number",
        type: "string",
        },
        {
        name: "customerName",
        title: "Customer Name",
        type: "string",
        },
        {
        name: "items",
        title: "Order Items",
        type: "array",
        of: [{ type: "reference", to: [{ type: "product" }] }],
        },
        {
        name: "orderDate",
        title: "Order Date",
        type: "datetime",
        },
        {
        name: "totalAmount",
        title: "Total Amount",
        type: "number",
        },
        {
        name: "status",
        title: "Order Status",
        type: "string",
        options: {
            list: [
            { title: "Shipped", value: "shipped" },
            { title: "Delivered", value: "delivered" },
            { title: "Return Not Received", value: "return_not_received" },
            { title: "Cancelled", value: "cancelled" },
            { title: "Return Received", value: "return_received" },
            { title: "Paid", value: "paid" },
            ],
        },
        },
    ],
};