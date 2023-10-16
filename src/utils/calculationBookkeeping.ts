import { ExpansesValues } from "@/types/expansesValues";
import { RevenuesValues } from "@/types/revenuesValues";

export const calculationBookkeepingYang = (
  data?: ExpansesValues[] | RevenuesValues[],
) => {
  return data
    ?.map((item) =>
      [item.count, item.priceYang].reduce((prev, curr) => prev * curr, 1),
    )
    .reduce((prev, curr) => prev + curr, 0);
};

export const calculationBookkeepingWon = (
  data?: ExpansesValues[] | RevenuesValues[],
) => {
  return data
    ?.map((item) =>
      [item.count, item.priceWon].reduce((prev, curr) => prev * curr, 1),
    )
    .reduce((prev, curr) => prev + curr, 0);
};
