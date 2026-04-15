export interface Product {
  _id: string;
  title: string;
  category: string;
  price: string | number;
  previous_price: string;
  regular_price: string;
  discount: string;
  save_amount: string;
  status: string;
  brand: string;
  key_features: string[];
  image: string;
}