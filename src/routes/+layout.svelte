<script>
  import { ChakraProvider, ColorModeScript } from "@chakra-ui/svelte";
  import theme from "../../theme/theme";
</script>

<ColorModeScript initialColorMode={theme.config.initialColorMode} />

<ChakraProvider theme={theme}>
  <slot />
</ChakraProvider>