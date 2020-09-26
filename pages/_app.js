import { ChakraProvider } from "@chakra-ui/core"
import customTheme from "../styles/theme"

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
