import withObservables from "@nozbe/with-observables";
import React from "react";
import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { database } from "../model";

const todos = database.collections.get("todos");

export const observeTodos = () => todos.query().observe();
const TodoList = ({ todos }) => {
	return (
		<View>
			<Text style={styles.header}>Todos - {todos.length}</Text>
			<ScrollView>
				{todos.map((todo) => (
					<View style={styles.itemContainer}>
						<Text key={todo.id} style={styles.item}>
							{todo.text}
						</Text>
						<TouchableOpacity onPress={() => todo.removeTodo()}>
							<Text style={styles.deleteText}>Sil</Text>
						</TouchableOpacity>
					</View>
				))}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		fontSize: 16,
		marginBottom: 12,
	},
	itemContainer: {
		flexDirection: "row",
		flex: 1,
	},
	item: {
		marginBottom: 12,
		flex: 1,
	},
	deleteText: {
		color: "red",
	},
});

const enhance = withObservables([], () => ({
	todos: observeTodos(),
}));

export default enhance(TodoList);
