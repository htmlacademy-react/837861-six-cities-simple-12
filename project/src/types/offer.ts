export type OfferType = {
  city: City;
  previewImage: string;
  images: string[];
  title: string;
  isPremium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: Host;
  description: string;
  location: Location;
  id: number;
};

export type City = {
  name: string;
  location: Location;
};

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}
export type Host = {
  id: number;
  name: string;
  isPro: true;
  avatarUrl: string;
};

export type Point = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
}

export type Points = Point[];

export type Offers = OfferType[];
