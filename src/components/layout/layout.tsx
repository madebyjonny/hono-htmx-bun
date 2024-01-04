import type { FC } from "hono/jsx";

export const Layout: FC = (props) => {
  const { children } = props;
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hono, HTMX & Bun demo</title>
        <script src="https://unpkg.com/htmx.org@1.7.0/dist/htmx.js"></script>
      </head>
      <body>{children}</body>
    </html>
  );
};
