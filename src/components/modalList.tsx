import { Center, Modal, Text, VStack } from "native-base";
import { useState } from "react";
import { Button } from "@/components/signButton"
import { HealthCenterCard } from "./healthCenterCard";

export function ModalList   () {
  const [service, setService] = useState("");

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
