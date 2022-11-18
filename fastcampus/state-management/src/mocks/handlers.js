import { rest } from "msw";

export const handlers = [
  rest.put("http://localhost:3000/counter/increment", async (req, res, ctx) => {
    const { value } = await req.json(); // req.body is deprecated
    return res(
      ctx.json({
        value: value + 2,
      })
    );
  }),
  rest.get("/login", async (req, res, ctx) => {
    return res(
      ctx.json({
        id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
        firstName: "John",
        lastName: "Maverick",
      })
    );
  }),
  rest.get(
    "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json",
    async (req, res, ctx) => {
      return res(
        ctx.json({
          data: {
            people: [
              {
                name: "choi",
                age: 135,
              },
              {
                name: "timmy",
                age: 13,
              },
              {
                name: "cindy",
                age: 15,
              },
              {
                name: "judy",
                age: 25,
              },
              {
                name: "marry",
                age: 64,
              },
              {
                name: "tommy",
                age: 109,
              },
            ],
          },
        })
      );
    }
  ),
];
