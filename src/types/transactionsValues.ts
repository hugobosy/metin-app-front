export type TransactionsValues = {
  count: number;
  createdAt: Date;
  id: string;
  idUser: string;
  item: string;
  priceWon: number;
  priceYang: number;
  type: "revenues" | "expenses";
};
