export interface CategoryCardProps {
  item: Category;
  activeItem: Category;
  onPress: () => void;
}

export interface Category {
  id: number;
  title: string;
  category?: string;
}