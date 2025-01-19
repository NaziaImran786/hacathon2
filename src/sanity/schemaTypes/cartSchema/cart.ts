export const cart = {
    name: 'cart',
    type: 'document',
    title: 'Cart',
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
    ],
  };
  
  
  