export type PetsValues = {
  id: string;
  petId: string;
  name: string;
  level: number;
  type: number;
  hp: number;
  def: number;
  he: number;
  pets: {
    name:
      | "Monkey"
      | "Spider"
      | "Razador"
      | "Nemere"
      | "Dragon"
      | "Meley"
      | "Baashidos"
      | "Kat"
      | "Nessie"
      | "Azrael"
      | "Exedyar"
      | "Alastor"
      | "MiniBoss";
  };
};

export interface PetsName {
  id: string;
  name:
    | "Monkey"
    | "Spider"
    | "Razador"
    | "Nemere"
    | "Dragon"
    | "Meley"
    | "Baashidos"
    | "Kat"
    | "Nessie"
    | "Azrael"
    | "Exedyar"
    | "Alastor"
    | "MiniBoss";
}
