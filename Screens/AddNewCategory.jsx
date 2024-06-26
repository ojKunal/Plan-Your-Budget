// components/AddCategoryForm.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default function AddNewCategory({ onSubmit, onCancel }) {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = () => {
    onSubmit(categoryName);
    setCategoryName("");
  };

  return (
    // <View style={styles.form}>
    //   <Text style={styles.label}>Category Name</Text>
    //   <TextInput
    //     style={styles.input}
    //     value={categoryName}
    //     onChangeText={setCategoryName}
    //     placeholder="Enter category name"
    //   />
    //   <Button title="Submit" onPress={handleSubmit} />
    //   <Button title="Cancel" onPress={onCancel} color="red" />
    // </View>
    <SafeAreaView>
      <View className="bg-red-400">
        <Text>hiii</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});
