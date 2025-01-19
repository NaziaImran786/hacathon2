export const order = {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      {
        name: 'user',
        type: 'reference',
        to: [{ type: 'user' }],
        title: 'User',
      },
      {
        name: 'products',
        type: 'array',
        title: 'Products',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'product', type: 'reference', to: [{ type: 'product' }], title: 'Product' },
              { name: 'quantity', type: 'number', title: 'Quantity' },
            ],
          },
        ],
      },
      {
        name: 'totalAmount',
        type: 'number',
        title: 'Total Amount',
      },
      {
        name: 'status',
        type: 'string',
        title: 'Order Status',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Shipped', value: 'shipped' },
            { title: 'Delivered', value: 'delivered' },
          ],
        },
      },
      {
        name: 'paymentMethod',
        type: 'string',
        title: 'Payment Method',
      },
      {
        name: 'createdAt',
        type: 'datetime',
        title: 'Order Date',
      },
    ],
  };
  