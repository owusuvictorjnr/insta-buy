import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function CategoryLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="slug"
        options={{
          headerShown: false,
          headerLeft: () => {
            return (
              <TouchableOpacity>
                <Ionicons />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Stack>
  );
}
