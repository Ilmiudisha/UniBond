import { Redirect, Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import the Ionicons icon library

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#2C3036", // Active icon color
        tabBarInactiveTintColor: "#8E8E93", // Inactive icon color
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"} // Filled for active, outline for inactive
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Jobs"
        options={{
          title: "Jobs",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "briefcase" : "briefcase-outline"} // Filled for active, outline for inactive
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                bottom: 20,
                width: 60,
                height: 60,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#2C3036",
                borderRadius: 30,
              }}
            >
              <Ionicons
                name={focused ? "search" : "search-outline"} // Filled for active, outline for inactive
                size={24}
                color={"#fff"} // White icon when active
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Addpost"
        options={{
          title: "Add",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "add-circle" : "add-circle-outline"} // Filled for active, outline for inactive
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Projects"
        options={{
          title: "Projects",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "folder" : "folder-outline"} // Filled for active, outline for inactive
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
