import {
  VStack,
  HStack,
  Center,
  Text,
  Checkbox,
  ScrollView,
} from "native-base";
import { Input } from "@/components/input";
import IconSvg from "@/assets/authicon.svg";
import {} from "@expo/vector-icons";
import { useState } from "react";
import { Button } from "@/components/signbutton";


export default function SignUp() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} bg="white">
        <Center>
          <IconSvg />
          <Text fontSize="2xl" fontFamily="bold" mb={5}>
            Faça seu cadastro
          </Text>
          <Input placeholder="Nome" iconName="md-person-outline"/>
          <Input
            placeholder="E-mail"
            autoCapitalize="none"
            keyboardType="email-address"
            iconName="md-mail-outline"
          />
          <Input placeholder="Senha" secureTextEntry iconName="md-key-outline"/>
          <HStack space={2} alignItems="center" mr={1} mb={5}>
            <Checkbox
              value="test"
              borderColor="green.100"
              colorScheme="green"
              accessibilityLabel="Concordar com os Termos de Uso"
            />
            <Text fontSize="md" fontFamily="regular">
              Eu concordo com os Termos de Uso
            </Text>
          </HStack>
          <Button title="Cadastrar" mb={5} />
          <Text fontSize="sm" fontFamily="semibold">
            Já tem uma conta? Faça login
          </Text>
        </Center>
      </VStack>
    </ScrollView>
  );
}
