import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-center gap-4 px-6">
        <Text className="text-4xl font-bold">ngfl</Text>
        <Text className="text-base text-gray-500">edit src/app/index.tsx to get started</Text>
      </View>
    </SafeAreaView>
  );
}
