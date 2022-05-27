import {
  ChakraProvider,
  Container,
  Flex,
  Heading,
  Text,
  theme,
} from "@chakra-ui/react";
import { Provider } from "react-redux";
import Navigation from "./components/Navigation";
import VendingMachine from "./components/VendingMachine";
import store from "./utils/store";

export const App = () => (
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <Container maxW={"container.lg"} py={5}>
        <Heading>Snack Vending Machine</Heading>
        <Text color={"grey"}>By Jeries Nasrawi</Text>
        <Navigation />
        <Flex
          alignItems={"center"}
          justifyContent="center"
          py={5}
          flexDir="column"
        >
          <VendingMachine />
        </Flex>
      </Container>
    </ChakraProvider>
  </Provider>
);
