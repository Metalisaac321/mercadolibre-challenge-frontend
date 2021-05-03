import { Factory } from 'fishery';
import { lorem, finance, datatype, image, random } from 'faker';

const factory = Factory.define(({ sequence }) => ({
  id: sequence,
  title: lorem.sentence(),
  price: {
    currency: finance.currencyCode(),
    amount: finance.amount(),
    decimals: datatype.number(10),
  },
  picture: image.avatar(),
  condition: random.arrayElements(['new', 'used']),
  free_shipping: datatype.boolean(),
  sold_quantity: datatype.number(),
  description: lorem.paragraph(),
  state: random.word(),
}));

export function generateItem(params) {
  return factory.build(params);
}

export function generateItemRandomList(min = 0, max = 10) {
  const length = Math.random() * (max - min) + min;
  return factory.buildList(length);
}

export function generateItemList(length) {
  return factory.buildList(length);
}
