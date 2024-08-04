
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import LoginScreen from "../components/LoginScreen"
import * as SecureStore from "expo-secure-store";
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;



// if (!publishableKey) {
//   throw new Error(
//     "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
//   );
// }
console.log("key")
console.log(publishableKey)

const tokenCache = {
  async getToken(key) {
    try {
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used 🔐 \n`);
      } else {
        console.log("No values stored under key: " + key);
      }
      return item;
    } catch (error) {
      console.error("SecureStore get item error: ", error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  async saveToken(key,value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};


export default function RootLayout() {

useFonts({
  outfit_regulare: require("../assets/fonts/Outfit-Regular.ttf"),
  outfit_bold: require("../assets/fonts/Outfit-Bold.ttf"),
  outfit_medium: require("../assets/fonts/Outfit-Medium.ttf"),
});
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
        <SignedIn>
      <Stack screenOptions={{headerShown :false}}>
          <Stack.Screen name="(tabs)"  />
      </Stack>
        </SignedIn>
        <SignedOut>
          <LoginScreen/>
        </SignedOut>
    </ClerkProvider>
  );
}
