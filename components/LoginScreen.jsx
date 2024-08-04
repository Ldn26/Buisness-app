import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
 import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
WebBrowser.maybeCompleteAuthSession();
export default function () {  
    useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow(
          // { redirectUrl: Linking.createURL("/dashboard", { scheme: "myapp" })}
        );

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View>
      <View style={{ display: "flex ", alignItems: "center", marginTop: 130 }}>
        <Image
          source={require("../assets/images/login.png")}
          style={{
            width: 220,
            height: 450,
            borderRadius: 20,
            borderWidth: 4,
            borderColor: "#000",
          }}
        />
      </View>
      <View
        style={{
          marginTop: -40,
          borderBottomWidth: 1,
          backgroundColor: "white",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            marginVertical: 20,
            fontFamily: "outfit_medium",
          }}
        >
          You Ultimate{" "}
          <Text style={{ color: Colors.primeryColor }}>Community Buisness</Text>{" "}
          Directory App
        </Text>
      </View>
      <Text
        style={{
          color: Colors.grayColor,
          fontSize: 14,
          textAlign: "center",
          padding: 5,
          fontFamily: "outfit_regulare",
        }}
      >
        Find your favorite Business near your and post your own business to your
        commuinty{" "}
      </Text>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
        onPress={onPress}
          style={{
            backgroundColor: Colors.primeryColor,
            marginTop: 20,
            width: 350,
            padding: 8,
            borderRadius: 99,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            Get Started{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
