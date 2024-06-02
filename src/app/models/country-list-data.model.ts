export class Country {
  id?: string;
  name?: string;
  native?: string;
  phone?: number[] = [];
  continent?: string;
  capital?: string;
  currency?: string[] = [];
  languages?: string[] = [];
  languagesWithNames?: string[] = [];
  averageRating: number = 0;
  reviewCount: number = 0;
}

export class ReviewResponse {
  ratings?: {[key: string]: number};
  ratingsPercentages?: {[key: string]: number};
  reviews?: Review[] = [];
}

export class Review {
  id?: number;
  countryId?: string;
  timestamp?: string;
  rating?: number;
  username?: string;
  avatarColor?: string;
  comment?: string;
}
