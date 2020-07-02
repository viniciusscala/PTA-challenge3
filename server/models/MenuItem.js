const keystone = require('keystone');

const { Types } = keystone.Field;

const MenuItem = new keystone.List('MenuItens');

MenuItem.add({
  name: { type: Types.Text, required: true, initial: true, index: true },
  image: { type: Types.CloudinaryImages, required: true, initial: true, },
  description: { type: Types.Text, required: true, initial: true},
  price: { type: Types.Text , required: true, initial: true}
});

MenuItem.register();