import { type SchemaTypeDefinition } from 'sanity';
import ProductSchema from './product';
import { card } from './card';
import { cart } from './cartSchema/cart';
import { shipment } from './shipment/shipment';
import { user } from './user/user';
import { comment } from './comments/comment';
import { payment } from './payment/payment';
import { order } from './order/order';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    ProductSchema,
    card,
    cart,
    order,
    payment,
    shipment,
    user,
    comment,

  ],
};