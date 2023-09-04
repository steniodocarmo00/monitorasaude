import { Center, Modal, Text, VStack } from "native-base";
import { HealthCenterCard } from "./healthCenterCard";

export function ModalList () {

  return (
    <Modal.Content h="750px" w="100%" maxHeight="750px" borderRadius={20} bg="white">
      <VStack mt={16}>
        <Center>
          <Text fontFamily="bold" fontSize="2xl" w={64} textAlign="center">
            Posto de saúde mais próximos
          </Text>
          <HealthCenterCard />
        </Center>
      </VStack>
    </Modal.Content>
  );
}
