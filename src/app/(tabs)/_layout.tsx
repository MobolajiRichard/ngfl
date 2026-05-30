import { Feather, Ionicons, Octicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Text } from "react-native";
import { twMerge } from "tailwind-merge";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          // tabBarLabelStyle:{()
          //   fontFamily: "Roboto-Regular",
          //   color:'red'
          // },
          tabBarLabel: ({ focused }) => (
            <Text
              style={{ fontFamily: "Roboto-Regular" }}
              className={twMerge(
                " font-sans-medium text-[12px]",
                focused ? "text-[#006B2D]" : "text-[#9CA3AF]",
              )}
            >
              Home
            </Text>
          ),
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Octicons
                name="home-fill"
                size={24}
                color={focused ? "#006B2D" : ""}
              />
            ) : (
              <Octicons name="home" size={24} color="#9CA3AF" />
            ),
        }}
      />
      <Tabs.Screen
        name="my-team"
        options={{
          title: "Home",
          // tabBarLabelStyle:{()
          //   fontFamily: "Roboto-Regular",
          //   color:'red'
          // },
          tabBarLabel: ({ focused }) => (
            <Text
              style={{ fontFamily: "Roboto-Regular" }}
              className={twMerge(
                " font-sans-medium text-[12px]",
                focused ? "text-[#006B2D]" : "text-[#9CA3AF]",
              )}
            >
              My Team
            </Text>
          ),
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons name="shirt" size={24} color="#006B2D" />
            ) : (
              <Ionicons name="shirt-outline" size={24} color="#9CA3AF" />
            ),
        }}
      />
      <Tabs.Screen
        name="leagues"
        options={{
          title: "",
          // tabBarLabelStyle:{()
          //   fontFamily: "Roboto-Regular",
          //   color:'red'
          // },
          tabBarLabel: ({ focused }) => (
            <Text
              style={{ fontFamily: "Roboto-Regular" }}
              className={twMerge(
                " font-sans-medium text-[12px]",
                focused ? "text-[#006B2D]" : "text-[#9CA3AF]",
              )}
            >
              Leagues
            </Text>
          ),
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons name="trophy" size={24} color="#006B2D" />
            ) : (
              <Ionicons name="trophy-outline" size={24} color="#9CA3AF" />
            ),
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: "Home",
          // tabBarLabelStyle:{()
          //   fontFamily: "Roboto-Regular",
          //   color:'red'
          // },
          tabBarLabel: ({ focused }) => (
            <Text
              style={{ fontFamily: "Roboto-Regular" }}
              className={twMerge(
                " font-sans-medium text-[12px]",
                focused ? "text-[#006B2D]" : "text-[#9CA3AF]",
              )}
            >
           Stats
            </Text>
          ),
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons name="stats-chart" size={24} color="#006B2D" />
            ) : (
              <Ionicons name="stats-chart-outline" size={24} color="#9CA3AF" />
            ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "Home",
          // tabBarLabelStyle:{()
          //   fontFamily: "Roboto-Regular",
          //   color:'red'
          // },
          tabBarLabel: ({ focused }) => (
            <Text
              style={{ fontFamily: "Roboto-Regular" }}
              className={twMerge(
                " font-sans-medium text-[12px]",
                focused ? "text-[#006B2D]" : "text-[#9CA3AF]",
              )}
            >
              More
            </Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            <Feather
              name="more-horizontal"
              size={24}
              color={focused ? "#006B2D" : "#9CA3AF"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
