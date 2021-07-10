import React from "react";
import { ScrollView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { categories, CategoryTitles } from "./categories";
import Category from "./components/Category";

export interface CategorySelectProps {
  category: CategoryTitles | null;
  setCategory: React.Dispatch<React.SetStateAction<CategoryTitles | null>>;
  showCheckAnimation?: boolean;
}

const CategorySelect: React.FC<CategorySelectProps> = ({
  category,
  setCategory,
  showCheckAnimation = false,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        height: RFValue(190),
      }}
    >
      {categories.map(({ title, svg }) => (
        <Category
          key={title}
          {...{ title, svg, category, setCategory, showCheckAnimation }}
        />
      ))}
    </ScrollView>
  );
};

export default CategorySelect;
