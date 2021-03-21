export interface Country {
  name: string;
  flag: string;
  population: number;
  capital: string;
  timezones: string[];
  currencies: Currency[];
  altSpellings: string[];
  languages: Language[];
}

export interface Currency {
  code: string;
  name: string;
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}
