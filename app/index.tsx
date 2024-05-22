import CustomButton from "@/components/CustomButton";
import { images } from "@/constants";
import { Link, Redirect, router } from "expo-router";
import React from "react";
import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="mt-5 max-w-[375px] h-[289px] w-full"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-white text-3xl font-bold text-center ">
              Discover endless possiblities with {""}
              <Text className="left-2 text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular  text-white text-center mt-7 w-full">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <View className="mt-7 w-full">
            <CustomButton
              title="Continue with email"
              handlePress={() => {router.push('/sign-in')}}
              textStyles=""
              containerStyles=""
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" barStyle="light-content" />
    </SafeAreaView>
  );
};

export default Home;
