import { rest } from "msw";

const todos = [
  {
    id: 1,
    title: `Nor-1`,
  },
  {
    id: 2,
    title: `Nor-2`,
  },
  {
    id: 3,
    title: `Nor-3`,
  },
  {
    id: 4,
    title: `Nor-4`,
  },
  {
    id: 5,
    title: `Nor-5`,
  },
];

export const handlers = [
  rest.get("http://localhost:3000/api/todos", async (req, res, ctx) => {
    return res(ctx.json(todos));
  }),
  rest.post("http://localhost:3000/api/todo", async (req, res, ctx) => {
    const { todo } = await req.json(); // req.body is deprecated
    console.log(JSON.stringify(todo));
    todos.push(todo);
    return res(ctx.json(true));
  }),
  rest.get("http://localhost:3000/api/user/:userId", async (req, res, ctx) => {
    const { userId } = req.params;

    return res(
      ctx.json({
        title: `Nor (${userId})`,
      })
    );

    // return res(ctx.status(404));
  }),
];
