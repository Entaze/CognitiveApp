//MSW intercepts network request and returns data that is specified in the handlers

import { rest } from 'msw'

export const handlers = [
  rest.post('/api/login', (req, res, ctx) => {
    console.log('jcjgvvyk')

    const { username } = req.body

    return res(
      ctx.delay(1500),
      ctx.status(202, "Mocked status"),
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: 'John',
        lastName: 'Maverick',
      })
    )
  }),
]

// import { setupWorker, rest } from "msw";

// // Define request handlers and response resolvers.
// const worker = setupWorker(
//   rest.get("/api/v1", (req, res, ctx) => {
//     return res(
//       ctx.delay(1500),
//       ctx.status(202, "Mocked status"),
//       ctx.json({
//         message: "Mocked response JSON body",
//       })
//     );
//   })
// );

// worker.start({
//   serviceWorker: {
//     options: {
//       scope: "/api",
//     },
//   },
// });