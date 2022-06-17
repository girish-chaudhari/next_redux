import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";
import { Container } from "./Container";
import { Form } from "./form";
import { Input } from "./input";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#FF3C00",
    },
  },
  fonts: {
    body: "Open Sans, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        bg: "gray.200",
      },
    }),
  },
  components: {
    Button,
    Container,
    Input, // not working for some reason - come back to this
    Form,
  },
});