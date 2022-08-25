import { rest } from "msw";


import { readFakeData } from "@/__tests__/__mocks__/fakeData";

export const handlers = [rest.get("http://localhost:3000/shows/:showId", (req, res, ctx) => {
const { fakeShows } = await readFakeData()  

res(ctx.json({show: fakeShows[0]}))
})];
