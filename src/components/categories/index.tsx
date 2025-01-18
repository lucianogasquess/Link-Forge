import { categories } from "@/utils/categories";
import { FlatList } from "react-native";
import { Category } from "@/components/category";
import { styles } from "./styles";

type Props = {
  Selected: string;
  onChange: (categoryId: string) => void;
}

export function Categories({ Selected, onChange }: Props) {
  return (
    <FlatList 
      data={categories}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Category 
          name={item.name}
          icon={item.icon}
          isSelected={item.name === Selected}
          onPress={() => onChange(item.name)}
        />
      )}
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
    />
  )
}