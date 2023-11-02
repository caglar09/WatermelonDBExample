import { appSchema, tableSchema } from "@nozbe/watermelondb";

export const todoTableScheme = tableSchema({
	name: "todos",
	columns: [
		{ name: "text", type: "string", isIndexed: true, isOptional: false },
		{ name: "status", type: "number", isIndexed: false, isOptional: true },
		{ name: "created_at", type: "number" },
		{ name: "completed_at", type: "number", isOptional: true },
	],
});

export const mySchema = appSchema({
	version: 1,
	tables: [todoTableScheme],
});
mySchema.tables?.forEach?.((element) => {
	console.log(element.name);
});
