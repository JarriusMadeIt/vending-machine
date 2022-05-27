import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSnacks } from "../utils/actions/snackActions";
import { snackTypes } from "../utils/constants";
import { RootState } from "../utils/reducers";
import { Snack } from "../utils/types";
import Keypad from "./Keypad";
import Slot from "./Slot";

const VendingMachine = () => {
  //hooks
  const dispatch = useDispatch();

  //global state
  const { snacks } = useSelector((state: RootState) => state.snacks);

  //generate slots
  const generateSlots = () => {
    dispatch(
      setSnacks(
        snackTypes.map((snack, index) => ({
          id: index,
          type: snack,
          count: 2,
          price: {
            value: 24.99,
            currency: { cc: "USD", symbol: "$", name: "United States dollar" },
          },
        }))
      )
    );
  };

  useEffect(() => {
    generateSlots();
    return () => {};
  }, []);

  return (
    <>
      <Box backgroundColor={"black"} p={2} borderRadius={"2xl"} boxShadow="2xl">
        <Flex
          backgroundColor={"gray.200"}
          wrap={"wrap"}
          p={3}
          borderRadius={"xl"}
        >
          <SimpleGrid columns={5} spacing={2}>
            {snacks.map((snack: Snack) => (
              <Slot key={snack.id} snack={snack} />
            ))}
          </SimpleGrid>
        </Flex>
        <Keypad />
      </Box>
    </>
  );
};

export default VendingMachine;
