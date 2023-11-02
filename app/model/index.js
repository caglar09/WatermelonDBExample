// index.js
import { Database } from "@nozbe/watermelondb";

// import Post from "./Post";
// import Comment from "./Comment";
import DbAdapter from "./adapter";
import Todo from "./Todo";

export const database = new Database({
	adapter: DbAdapter,
	modelClasses: [Todo],
	actionsEnabled: true,
});
