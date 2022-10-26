import { RefObject } from "react";
import { FlatList } from "react-native";
import { Category } from "../CategoryCard/types";

export interface NavigationProps {
  data: Category[];
  scrollRef: RefObject<FlatList>;
  activeItem: number;
  onPress: (item: Category, index: number, navigate?: boolean) => void;
}

