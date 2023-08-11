import { Center, Input, Modal, Select, Text, VStack } from "native-base";
import { useState } from "react";
import { Button } from "@/components/signButton"

export function ModalRegister({...rest}) {
  const [service, setService] = useState("");

  return (
    <Modal.Content w="95%" h="53%" borderRadius={20} bg="white">
      <Modal.CloseButton
        size={8}
        _icon={{ size: 6 }}
        alignItems="center"
        justifyContent="center"
        mr={2}
        mt={2}
      />
      <VStack mt={16}>
        <Center>
          <Text fontFamily="bold" fontSize="2xl">
            Registrar caso de doença
          </Text>
          <Text fontFamily="regular" fontSize="xl" mt={4}>
            Quais são os sintomas apresentados?
          </Text>

          <Select
            mt={4}
            selectedValue={service}
            minWidth={80}
            minHeight={14}
            placeholder="Febre alta, dor no corpo..."
            fontSize="lg"
            fontFamily="regular"
            onValueChange={(itemValue) => setService(itemValue)}
            borderWidth="1"
            bg="white"
            borderColor="green.100"
          >
            <Select.Item label="Teste" value="teste" />
          </Select>

          <Text fontFamily="regular" fontSize="xl" mt={4}>
            Quanto tempo começou?
          </Text>

          <Input placeholder="2 dias..." fontFamily="regular" fontSize="lg" minWidth={80} minHeight={14} mt={4}/>

          <Button title="ENVIAR" w={42} mt={4} textSize="md" {...rest}/>
        
        </Center>
      </VStack>
    </Modal.Content>
  );
}
