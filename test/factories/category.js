import { Factory } from 'fishery';
import { random } from 'faker';

const factory = Factory.define(() => ({
  category: random.word(),
}));

export function generateCategory(params) {
  return factory.build(params);
}

export function generateCategoryRandomList(min = 0, max = 10) {
  const length = Math.random() * (max - min) + min;
  return factory.buildList(length).map((f) => f.category);
}
