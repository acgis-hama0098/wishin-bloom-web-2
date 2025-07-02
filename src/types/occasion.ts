export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  title: string;
  description: string;
}

export interface DetailItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export interface OccasionData {
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  galleryItems: GalleryItem[];
  detailItems: DetailItem[];
  serviceItems: ServiceItem[];
  whyChooseTitle: string;
  servicesTitle: string;
}