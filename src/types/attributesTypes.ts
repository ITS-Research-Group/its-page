import { DataItem } from './responseTypes';

interface AttributesBase {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Person extends AttributesBase {
  name: string;
  description: string;
  image: { data: DataItem<ImageAttributes> } | { data: null };
}

export interface Years extends AttributesBase {
  year: number;
  description: string;
}

export interface TeamMember {
  id: number;
  person: { data: DataItem<Person> };
}

export interface Year {
  id: number;
  year: DataItem<Years>;
}

interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

interface ImageFormats {
  thumbnail: ImageFormat;
  small: ImageFormat;
}

interface ImageAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
}

export interface Project extends AttributesBase {
  status: string;
  name: string;
  publishingInformation: string;
  description: string;
  team: TeamMember[];
  year: Year;
  cover: { data: DataItem<ImageAttributes> } | { data: null };
  pictures: { data: DataItem<ImageAttributes>[] } | { data: null };
}
