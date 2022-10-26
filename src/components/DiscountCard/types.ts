export interface DiscountCardProps {
  item: IDiscount;
  cardStyle?: any;
  onPress: () => void;
}

export interface IDiscount {
  id: number;
  title?: string;
  discount?: number;
  source: string
}

