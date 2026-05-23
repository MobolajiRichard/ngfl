import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-center gap-3 px-6">
        <Text className="text-3xl font-bold">Home</Text>
        <Text className="text-base text-gray-500 text-center">
          Your gameweek overview, latest news, and quick stats.
        </Text>
      </View>
    </SafeAreaView>
  );
}
