import { Flex, HStack, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../utils/reducers";
import AddFundsModal from "./AddFundsModal";

const Navigation = () => {
  //global state
  const { value, currency } = useSelector((state: RootState) => state.balance);

  return (
    <Flex alignItems={"flex-end"} justifyContent="end">
      <HStack spacing={5}>
        <Flex>
          <Text>Your balance is:</Text>
          <Flex mx={1}>
            <Text>{currency.symbol}</Text>
            <Text fontWeight={"bold"}>{value}</Text>
          </Flex>
          <Text>{currency.cc}</Text>
        </Flex>
        <AddFundsModal />
      </HStack>
    </Flex>
  );
};

export default Navigation;
