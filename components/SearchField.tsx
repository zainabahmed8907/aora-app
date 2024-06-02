import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";

const SearchField = ({ onChangeText, keyboardType, value, placeholder }) => {
  const [showPassword, setshowPassword] = useState(false);
  return (
    <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary flex-row items-center">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular "
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        placeholderTextColor="#7B7B8B"
      />
      <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchField;
