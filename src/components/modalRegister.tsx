import { Center, Modal, Select, Text, VStack } from "native-base";
import { useState } from "react";
import { Button } from "@/components/signButton";
import { Timestamp, addDoc, collection, doc } from "firebase/firestore";
import { db } from "@/services/firebase.config";
import { getAuth } from "firebase/auth";

export function ModalRegister({ ...rest }) {
  const [quantity, setQuantity] = useState("");
  const [howLong, setHowLong] = useState("");
  const [confirm, setConfirm] = useState("");
  const auth = getAuth()

  const handleButtonPress = async () => {
    if (quantity === "três ou mais vezes" && (howLong === "1-5 dias" || "6-13 dias")) {        
      const user: any = auth.currentUser;

      const users = collection(db, "users")

      const docUsers = doc(users, user.email)
      const post = collection(docUsers, "posts")

      const timestamp = Timestamp.now()

      await addDoc(post, {
        quantity: quantity,
        diseaseDuration: howLong,
        isBleeding: confirm,
        timestamp: timestamp
      });
    }
  };

  return (
    <Modal.Content w="95%" h="70%" borderRadius={20} bg="white">
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
          <Text fontFamily="regular" fontSize="xl" textAlign="center" mt={4}>
            Quantas vezes você tem ido ao banheiro evacuar nas ultimas 24 horas?
          </Text>

          <Select
            mt={4}
            selectedValue={quantity}
            minWidth={80}
            minHeight={14}
            placeholder="2 vezes..."
            fontSize="lg"
            fontFamily="regular"
            onValueChange={(itemValue) => setQuantity(itemValue)}
            borderWidth="1"
            bg="white"
            borderColor="green.100"
          >
            <Select.Item label="uma vez" value="uma vez" />
            <Select.Item label="duas vezes" value="duas vezes" />
            <Select.Item label="três ou mais vezes" value="três ou mais vezes" />
          </Select>

          <Text fontFamily="regular" fontSize="xl" mt={4}>
            A quanto tempo você está assim?
          </Text>

          <Select
            mt={4}
            selectedValue={howLong}
            minWidth={80}
            minHeight={14}
            placeholder="3 dias..."
            fontSize="lg"
            fontFamily="regular"
            onValueChange={(itemValue) => setHowLong(itemValue)}
            borderWidth="1"
            bg="white"
            borderColor="green.100"
          >
            <Select.Item label="1-5 dias" value="1-5 dias" />
            <Select.Item label="6-13 dias" value="6-13 dias" />
            <Select.Item label="14 dias ou mais" value="14 dias ou mais" />
          </Select>

          <Text fontFamily="regular" fontSize="xl" mt={4}>
            Tem saído sangue junto com as fezes?
          </Text>

          <Select
            mt={4}
            selectedValue={confirm}
            minWidth={80}
            minHeight={14}
            placeholder="Sim..."
            fontSize="lg"
            fontFamily="regular"
            onValueChange={(itemValue) => setConfirm(itemValue)}
            borderWidth="1"
            bg="white"
            borderColor="green.100"
          >
            <Select.Item label="Sim" value="sim" />
            <Select.Item label="Não" value="não" />
          </Select>

          <Button
            title="ENVIAR"
            onPress={handleButtonPress}
            w={42}
            mt={4}
            textSize="md"
            {...rest}
          />
        </Center>
      </VStack>
    </Modal.Content>
  );
}
