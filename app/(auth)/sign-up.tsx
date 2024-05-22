import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
  };
  return (
    <SafeAreaView className="px-4 bg-primary h-full ">
      <ScrollView>
        <View className="w-full justify-center min-h-[80vh] px-4 my-6">
          <Image
            source={images.logo}
            className="w-[100px] h-[40px] mt-20"
            resizeMode="contain"
          />
          <Text className="text-white font-pregular font-bold text-2xl mt-10">
            Sign up
          </Text>

          <FormField
            title="Username"
            value={form.username}
            onChangeText={(e: any) => setForm({ ...form, username: e })}
            otherStyles="mt-7"
            placeholder="Enter unique username"
          />

          <FormField
            title="Email"
            value={form.email}
            onChangeText={(e: any) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
            placeholder="Enter a valid email addresss"
          />
          <FormField
            title="Password"
            value={form.password}
            onChangeText={(e: any) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign up"
            handlePress={handleSubmit}
            containerStyles="mt-4"
            isLoading={loading}
          />
             <CustomButton
            title="Sign up"
            handlePress={handleSubmit}
            containerStyles="mt-4"
            isLoading={loading}
          />


          <View className="pt-5 flex-row justify-center w-full gap-2 items-center">
            <Text className="text-base font-pregular text-white">
              Already have an account?
            </Text>
            <Link
              href="/sign-in"
              className="text-base  text-secondary font-psemibold"
            >
              Sign in
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
