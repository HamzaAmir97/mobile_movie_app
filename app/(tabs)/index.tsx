import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
     className="flex-1 items-center justify-center"
    >
      <Text className="text-4xl font-bold
      text-accent
      ">welcome</Text>
   <Link href="movie/avengers">avenger movie</Link>
    </View>
  );
}
