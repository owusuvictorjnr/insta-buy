import { StyleSheet, View, Text, FlatList } from "react-native";
import { PRODUCTS } from "@/assets/products";
import tw from "twrnc";
import { ProductListItems } from "@/components/product-list-item";
import { ListHeader } from "@/components/list-header";

export default function HomeScreen() {
  return (
    <View>
      <FlatList
        data={PRODUCTS}
        renderItem={({ item }) => <ProductListItems product={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.flatListColumn}
        style={tw`p-5`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: 10,
  },

  flatListColumn: {
    justifyContent: "space-between",
  },
});
