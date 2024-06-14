import { css } from "@emotion/react";

export const Colors = {
  white: "#FFFFFF",
  dark: "#101118",
  darkLighter: "#20222e",
  background: "#475c6d",
  lightBackground: "#F3F3F3",
};

export const ThemeVar = css`
  :root {
    --primary: ${Colors.white};
    --secondary: ${Colors.background};
    --tertiary: ${Colors.dark};
    --text: ${Colors.white};
    --background: ${Colors.background};
    --lightBackground: ${Colors.lightBackground};
  }
`;

export const Theme = {
  primary: "var(--primary)",
  secondary: "var(--secondary)",
  tertiary: "var(--tertiary)",
  text: "var(--text)",
  background: "var(--background)",
  lightBackground: "var(--lightBackground)",
};
