import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import TodoInput from "../component/TodoInput";
import TodoList from "../component/TodoList";

const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<TodoInput />
			<View>
				<TodoList />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		flex: 1,
	},
});

export { HomeScreen };
