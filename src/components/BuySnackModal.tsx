import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFunds } from "../utils/actions/balanceActions";
import { buySnack } from "../utils/actions/snackActions";
import { calculateChange } from "../utils/helpers/balanceHelpers";
import { RootState } from "../utils/reducers";

const BuySnackModal = ({
  snackNumber,
  setSnackNumber,
}: {
  snackNumber: any;
  setSnackNumber: any;
}) => {
  //hooks
  const toast = useToast();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  //global state
  const { snacks } = useSelector((state: RootState) => state.snacks);
  const [selectedSnack, setSelectedSnack]: any = useState(null);
  const { value: balanceValue } = useSelector(
    (state: RootState) => state.balance
  );

  const onKeypadEnterHandler = () => {
    //get actual index of item
    const actualIndex = Number(snackNumber) - 1;

    //index is out of range
    if (actualIndex < 0 || actualIndex > 24) {
      toast({
        title: "Snack not found",
        description: "You have entered an out of range number",
        status: "error",

        isClosable: true,
      });
      setSnackNumber("");
      return;
    }

    //item no longer available
    const foundSnack = snacks[actualIndex];

    //snack sold out
    if (foundSnack.count === 0) {
      toast({
        title: "Snack sold out",
        description: "😢 Snack has been sold out",
        status: "error",

        isClosable: true,
      });
      setSnackNumber("");
      return;
    }

    //insufficent funds
    if (foundSnack.price.value > Number(balanceValue)) {
      toast({
        title: "Insufficent funds",
        description: `Item costs ${foundSnack.price.currency.symbol}${foundSnack.price.value} ${foundSnack.price.currency.cc}`,
        status: "error",

        isClosable: true,
      });
      setSnackNumber("");
      return;
    }

    //show buy item modal
    setSelectedSnack(foundSnack);
    onOpen();
  };

  //buy item handler
  const onBuySnackHandler = () => {
    //get change
    const change = calculateChange(
      Number(balanceValue),
      Number(selectedSnack.price.value)
    );

    //update states
    dispatch(buySnack(selectedSnack.id));
    dispatch(resetFunds());
    setSnackNumber("");

    //show toast
    toast({
      title: `${selectedSnack.type} Purchase Successful`,
      description: `Change: ${change}`,
      status: "success",
      isClosable: true,
    });

    //close modal
    onClose();
  };

  return (
    <>
      <Button
        width={"full"}
        borderRadius={10}
        bg="white"
        disabled={!snackNumber}
        onClick={onKeypadEnterHandler}
      >
        Enter
      </Button>
      <Modal isOpen={isOpen && selectedSnack} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <Text>Are you sure you want to buy this snack?</Text>
              <Text fontSize={"9xl"}>{selectedSnack?.type}</Text>
              <Text
                fontWeight={"black"}
                fontSize="4xl"
              >{`${selectedSnack?.price.currency.symbol}${selectedSnack?.price.value} ${selectedSnack?.price.currency.cc}`}</Text>
              <Text fontSize={"xl"} color="grey">{`Change: ${
                selectedSnack?.price.currency.symbol
              }${calculateChange(
                Number(balanceValue),
                Number(selectedSnack?.price.value)
              )} ${selectedSnack?.price.currency.cc}`}</Text>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button backgroundColor={"transparent"} mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={onBuySnackHandler}>Buy Snack</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BuySnackModal;
