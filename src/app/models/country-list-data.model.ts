export class Country {
  id?: string;
  name?: string;
  native?: string;
  phone?: number[];
  continent?: string;
  capital?: string;
  currency?: string[];
  languages?: string[];
  languagesWithNames?: string[];
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
