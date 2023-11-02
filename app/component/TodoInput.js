import {
	View,
	Text,
	TextInput,
	StyleSheet,
	Button,
	TouchableOpacity,
} from "react-native";
import React, { useCallback, useState } from "react";

import { database } from "../model/index";

const todoService = database.collections.get("todos");

const TodoInput = () => {
	const [todo, setTodo] = useState("");

	const handleSaveTodo = useCallback(async () => {
		database.write(async () => {
			const result = await todoService.create((item) => {
				item.text = todo;
				item.status = 1;
				item.createdAt = Date.now();
				item.completedAt = null;
			});
			setTodo("");
			return result;
		});
	}, [todo]);

	return (
		<View style={styles.container}>
			<TextInput
				value={todo}
				onChangeText={(text) => setTodo(text)}
				style={styles.input}
				placeholder="Add Todo"
			/>

			<TouchableOpacity
				disabled={todo.length === 0}
				style={[styles.button, todo.length === 0 && styles.disabled]}
				onPress={handleSaveTodo}
			>
				<Text style={styles.text}>+ Add</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 0,
		flexDirection: "row",
		justifyContent: "space-between",
		columnGap: 10,
		marginBottom: 10,
	},
	input: {
		flex: 1,

		backgroundColor: "#f5f5f5",
		paddingVertical: 16,
		paddingHorizontal: 12,
		borderRadius: 8,
	},
	button: {
		backgroundColor: "#4353ff",
		padding: 12,
		fontSize: 18,
		borderRadius: 8,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: "#fff",
	},
	disabled: {
		opacity: 0.7,
	},
});

export default TodoInput;
