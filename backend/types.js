const z = require("zod");
const CreateTodoSchema = z.object({
  title: z.string(),
  description: z.string(),
  completed: z.boolean(),
});
const UpdateTodoSchema = z.object({
  id: z.string(),
});

module.exports = {
  CreateTodoSchema: CreateTodoSchema,
  UpdateTodoSchema: UpdateTodoSchema,
};
