import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MyTeamScreen() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-center gap-3 px-6">
        <Text className="text-3xl font-bold">My Team</Text>
        <Text className="text-base text-gray-500 text-center">
          Pick and manage your 15-player squad, set your captain, and make transfers.
        </Text>
      </View>
    </SafeAreaView>
  );
}
