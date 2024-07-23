interface AttributesBase {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Years extends AttributesBase {
  year: number;
  description: string;
}
