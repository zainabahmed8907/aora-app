import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";

const SignUp = () => {
  return (
    <SafeAreaView className="px-6 bg-primary h-full ">
      <Image
        source={images.logo}
        className="w-[100px] h-[40px] mt-20"
        resizeMode="contain"
      />
      <Text className="text-white font-pregular font-bold text-2xl mt-10">Sign Up</Text>
    </SafeAreaView>
  );
};

export default SignUp;
