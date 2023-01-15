export interface ImName {
  label: string;
}

export interface Attributes {
  height: string;
}

export interface ImImage {
  label: string;
  attributes: Attributes;
}

export interface Summary {
  label: string;
}

export interface Attributes2 {
  amount: string;
  currency: string;
}

export interface ImPrice {
  label: string;
  attributes: Attributes2;
}

export interface Attributes3 {
  term: string;
  label: string;
}

export interface ImContentType {
  attributes: Attributes3;
}

export interface Rights {
  label: string;
}

export interface Title {
  label: string;
}

export interface Attributes4 {
  rel: string;
  type: string;
  href: string;
  title: string;
  "im:assetType": string;
}

export interface ImDuration {
  label: string;
}

export interface Link {
  attributes: Attributes4;
  "im:duration": ImDuration;
}

export interface Attributes5 {
  "im:id": string;
  "im:bundleId": string;
}

export interface Id {
  label: string;
  attributes: Attributes5;
}

export interface Attributes6 {
  href: string;
}

export interface ImArtist {
  label: string;
  attributes: Attributes6;
}

export interface Attributes7 {
  "im:id": string;
  term: string;
  scheme: string;
  label: string;
}

export interface Category {
  attributes: Attributes7;
}

export interface Attributes8 {
  label: string;
}

export interface ImReleaseDate {
  label: Date;
  attributes: Attributes8;
}

export interface IListing {
  "im:name": ImName;
  "im:image": ImImage[];
  summary: Summary;
  "im:price": ImPrice;
  "im:contentType": ImContentType;
  rights: Rights;
  title: Title;
  link: Link[];
  id: Id;
  "im:artist": ImArtist;
  category: Category;
  "im:releaseDate": ImReleaseDate;
}
