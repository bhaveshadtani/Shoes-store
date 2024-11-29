export interface ProductType {
  id: string;
  image: string;
  imageAlt: string;
  name: string;
  description: string;
  brand_name: string;
  category_name: string;
  gender: string;
  unit_price: string;
  discount: string;
  color: string;
  average_rating: any;
  is_featured?: boolean;
}

export interface ProductNavigationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPrev: () => void;
  onNext: () => void;
}

export interface ProductSectionProps {
  title: string;
  products: ProductType[];
  currentPage: number;
  productsPerPage: number;
  onPrevPage: () => void;
  onNextPage: () => void;
}