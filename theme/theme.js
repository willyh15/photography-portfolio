import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Open Sans', sans-serif",
  },
  colors: {
    brand: {
      50: "#edf2f7",
      100: "#cbd5e0",
      500: "#2D3748",
      900: "#1a202c"
    }
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "gray.100",
        lineHeight: "base"
      }
    }
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "md",
        fontWeight: "medium"
      },
      variants: {
        solid: {
          bg: "brand.500",
          color: "white",
          _hover: { bg: "brand.900" }
        },
        outline: {
          borderColor: "gray.400",
          color: "gray.100",
          _hover: { bg: "gray.700" }
        }
      }
    }
  }
});

export default theme;