interface Product {
  id: number;
  name: string;
  rating: number;
  image: string;
  description: string[];
  favourite: boolean;
  wishlist: boolean;
  cart: boolean;
  price: number;
  highlights: string[];
  reviews: { title: string, description: string, images: string[], username: string, location: string, date: string, rating: number}[];
  deliveryCharges: number | string;
  delivery?: {day: number, days: string};
}
