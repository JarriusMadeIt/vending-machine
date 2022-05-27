import { Flex, Text } from "@chakra-ui/react";
import { Snack } from "../utils/types";

const Slot = ({ snack }: { snack: Snack }) => {
  return (
    <Flex
      key={snack.id}
      alignItems="center"
      justifyContent={"center"}
      p={5}
      backgroundColor="white"
      height={"70px"}
      borderRadius={10}
      position="relative"
      flexDir={"column"}
    >
      {snack.count === 0 ? (
        <>
          <Text>{`Sold`}</Text>
          <Text>{`Out`}</Text>
        </>
      ) : (
        <>
          <Text fontSize={"2xl"}>{snack.type}</Text>
          <Text>{snack.id + 1}</Text>
        </>
      )}
    </Flex>
  );
};

export default Slot;
