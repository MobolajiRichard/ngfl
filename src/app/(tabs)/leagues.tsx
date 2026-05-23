import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LeaguesScreen() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-center gap-3 px-6">
        <Text className="text-3xl font-bold">Leagues</Text>
        <Text className="text-base text-gray-500 text-center">
          View your mini-leagues and the global NPFL standings.
        </Text>
      </View>
    </SafeAreaView>
  );
}
