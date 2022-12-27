export interface CardsResponse {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface CartStore {
  id: number;
  title: string;
  quantity: number;
  isFavourites: boolean;
}
