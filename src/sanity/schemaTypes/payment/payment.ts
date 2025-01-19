export const payment = {
    name: 'payment',
    type: 'document',
    title: 'Payment',
    fields: [
      {
        name: 'user',
        type: 'reference',
        to: [{ type: 'user' }],
        title: 'User',
      },
      {
        name: 'order',
        type: 'reference',
        to: [{ type: 'order' }],
        title: 'Order',
      },
      {
        name: 'amount',
        type: 'number',
        title: 'Amount',
      },
      {
        name: 'paymentMethod',
        type: 'string',
        title: 'Payment Method',
      },
      {
        name: 'status',
        type: 'string',
        title: 'Payment Status',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Completed', value: 'completed' },
          ],
        },
      },
      {
        name: 'transactionId',
        type: 'string',
        title: 'Transaction ID',
      },
    ],
  };
  