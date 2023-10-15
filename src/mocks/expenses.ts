import { rangeArray } from "@/helpers/rangeArray";
import { faker } from "@faker-js/faker";
import { getBindingIdentifiers } from "@babel/types";
import keys = getBindingIdentifiers.keys;

const id = [
  "ada4391b-8725-40e7-b133-12d8fcab2824",
  "ada4391b-8725-40e7-b133-12d8fcab2828",
];

const item = ["zatruty +9", "smoczy płomień", "kamień duchowy", "aura miecza"];

export const getExpenses = (count: number) =>
  rangeArray(count).map(() => {
    return {
      id: faker.string.uuid(),
      idUser: faker.helpers.arrayElement(id),
      item: faker.helpers.arrayElement(item),
      count: faker.number.int({ min: 1, max: 20 }),
      price: faker.number.int({ min: 2000, max: 20000 }),
    };
  });

export const GET_EXPENSES = getExpenses(faker.number.int({ min: 2, max: 10 }));
