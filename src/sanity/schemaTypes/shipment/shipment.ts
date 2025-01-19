export const shipment = {
    name: 'shipment',
    type: 'document',
    title: 'Shipment',
    fields: [
      {
        name: 'order',
        type: 'reference',
        to: [{ type: 'order' }],
        title: 'Order',
      },
      {
        name: 'trackingNumber',
        type: 'string',
        title: 'Tracking Number',
      },
      {
        name: 'status',
        type: 'string',
        title: 'Shipment Status',
        options: {
          list: [
            { title: 'Preparing', value: 'preparing' },
            { title: 'Shipped', value: 'shipped' },
            { title: 'Delivered', value: 'delivered' },
          ],
        },
      },
      {
        name: 'deliveryDate',
        type: 'datetime',
        title: 'Estimated Delivery Date',
      },
    ],
  };
  