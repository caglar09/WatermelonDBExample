// model/Post.js
import { Model } from "@nozbe/watermelondb";
import {
	children,
	field,
	text,
	date,
	writer,
	action,
} from "@nozbe/watermelondb/decorators";

export default class Todo extends Model {
	static table = "todos";

	@text("text") text;
	@field("status") status;
	@date("created_at") createdAt;
	@date("completed_at") completedAt;

	@writer async addTodo(text, status) {
		const newComment = await this.collection.create.create((todo) => {
			todo.text = text;
			todo.status = status;
			todo.created_at = new Date.now().getTime();
			todo.completedAt = null;
		});
		return newComment;
	}

	@writer async removeTodo() {
		await this.markAsDeleted();
		// (await this.collections.get("todos").find(this.id)).markAsDeleted();
	}
}
