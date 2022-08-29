// 确保 jsx被正确渲染
/** @jsx h */
import { h } from "preact";
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  // async GET(req, ctx) {
  //   const resp = await ctx.render(req);
  //   resp.headers.set("X-Custom-Header", "Hello");
  //   return resp;
  // },
  GET(req, ctx) {
    const uuid = crypto.randomUUID();
    return new Response(`${JSON.stringify(uuid)} ${ctx.state.data}`, {
      headers: { "Content-Type": "application/json" },
    });
  },
};

export default function AboutPage() {
  return (
    <main>
      <h1>About</h1>
      <p>This is the about page.</p>
    </main>
  );
}
