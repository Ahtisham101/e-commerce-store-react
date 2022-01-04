export interface Item {
  id: number;
  name: string;
  price: string;
  inCart: boolean;
  image: Image[];
}

export interface Image {
  id: number;
  url: string;
}
