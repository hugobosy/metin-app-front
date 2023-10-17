import { rangeArray } from "@/helpers/rangeArray";
import { faker } from "@faker-js/faker";

const id = [
  "ada4391b-8725-40e7-b133-12d8fcab2824",
  "ada4391b-8725-40e7-b133-12d8fcab2828",
];

const objective = ["Kupić rubin wyborny", "Kupić wężowy łuk"];

export const getObjective = (count: number) =>
  rangeArray(count).map(() => {
    return {
      id: faker.string.uuid(),
      idUser: faker.helpers.arrayElement(id),
      objective: faker.helpers.arrayElement(objective),
      amount: faker.number.int({ min: 20, max: 2500 }),
    };
  });

export const GET_OBJECTIVE = getObjective(
  faker.number.int({ min: 2, max: 10 }),
);
