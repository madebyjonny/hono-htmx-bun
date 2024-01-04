import type { FC } from "hono/jsx";

export const Heading: FC = (props) => {
  const { children } = props;
  return <h1>{children}</h1>;
};
