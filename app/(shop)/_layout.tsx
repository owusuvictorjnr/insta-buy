import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { useColorScheme } from "@/hooks/useColorScheme";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome {...props} size={18} style={{ color: "#1bc464" }} />;
}
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView edges={["top"]} style={tw` flex-1`}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#1bc464",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: "absolute",
            },
            default: {
              // borderTopLeftRadius: 20,
              // borderTopRightRadius: 20,
              padding: 10,
            },
          }),
          // headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "shop",

            tabBarIcon(props) {
              return <TabBarIcon {...props} name="shopping-cart" />;
            },
          }}
        />
        <Tabs.Screen
          name="orders"
          options={{
            title: "order",

            tabBarIcon(props) {
              return <TabBarIcon {...props} name="book" />;
            },
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
