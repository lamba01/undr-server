import { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
  slug: 'shop-orders',
  admin: {
    useAsTitle: 'reference',
    defaultColumns: ['reference', 'customerName', 'total', 'status', 'createdAt'],
    group: 'Shop',
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'reference',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'confirmed',
      admin: {
        position: 'sidebar',
      },
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Confirmed', value: 'confirmed' },
        { label: 'Processing', value: 'processing' },
        { label: 'Shipped', value: 'shipped' },
        { label: 'Delivered', value: 'delivered' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
    },
    {
      name: 'customer',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'firstName', type: 'text', required: true },
            { name: 'lastName', type: 'text', required: true },
          ],
        },
        {
          type: 'row',
          fields: [
            { name: 'email', type: 'email', required: true },
            { name: 'phone', type: 'text', required: true },
          ],
        },
      ],
    },
    {
      name: 'delivery',
      type: 'group',
      fields: [
        {
          name: 'type',
          type: 'select',
          options: [
            { label: 'Home Delivery', value: 'delivery' },
            { label: 'Store Pickup', value: 'pickup' },
          ],
        },
        { name: 'address', type: 'text' },
        { name: 'city', type: 'text' },
        { name: 'state', type: 'text' },
      ],
    },
    {
      name: 'items',
      type: 'array',
      fields: [
        { name: 'productId', type: 'number' },
        { name: 'title', type: 'text' },
        { name: 'variant', type: 'text' },
        { name: 'quantity', type: 'number' },
        { name: 'price', type: 'number' },
        { name: 'subtotal', type: 'number' },
      ],
    },
    {
      name: 'subtotal',
      type: 'number',
      admin: { position: 'sidebar' },
    },
    {
      name: 'deliveryFee',
      type: 'number',
      admin: { position: 'sidebar' },
    },
    {
      name: 'total',
      type: 'number',
      admin: { position: 'sidebar' },
    },
  ],
}
