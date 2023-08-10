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
import { Button } from "@/components/signbutton";
import { Link } from "expo-router";


export default function SignIn() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} bg="white">
        <Center>
          <IconSvg />
          <Text fontSize="2xl" fontFamily="bold" mb={5}>
            Bem vindo de volta!
          </Text>
          <Input
            placeholder="E-mail"
            autoCapitalize="none"
            keyboardType="email-address"
            iconName="md-mail-outline"
          />
          <Input placeholder="Senha" secureTextEntry iconName="md-key-outline"/>
          <Text fontSize="sm" fontFamily="semibold" color="red.600" mb={24}>
            Esqueci minha senha
          </Text>
          <Button title="ACESSAR CONTA" mb={5} />
          <Link href={"/"}>
            <Text fontSize="sm" fontFamily="semibold">
              Não tem uma conta? Cadastre-se
            </Text>
          </Link>
        </Center>
      </VStack>
    </ScrollView>
  );
}
