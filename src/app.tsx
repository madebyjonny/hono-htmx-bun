import { Hono } from "hono";
import { Layout } from "./components/layout/layout.tsx";
import { Heading } from "./components/heading/heading.tsx";
const app = new Hono();

app.get("/", (c) => {
  return c.html(
    <Layout>
      <Heading>hello</Heading>
      <form hx-post="/submit-form" hx-target="#result" hx-swap="outerHTML">
        <label htmlFor="test">Name</label>
        <br />
        <input name="name" id="name" autoComplete="off" />
        <button type="submit">Submit</button>
      </form>
      <div id="result"></div>
    </Layout>
  );
});

app.post("/submit-form", async (c) => {
  const body = await c.req.parseBody();
  return c.html(<div>Hello {body.name}, from the server</div>);
});

Bun.serve({
  port: 3000,
  fetch: app.fetch,
});
