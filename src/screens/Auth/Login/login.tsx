import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { VStack, Center, Text, ScrollView, Toast } from "native-base";
import IconSvg from "@/assets/authicon.svg";
import { Button } from "@/components/signButton";
import { SignInData, signInSchema } from "@screens/Auth/Login/schema";
import { InputForm } from "@/components/inputForm";
import { useNavigation } from "@react-navigation/native";

export function SignIn() {
  const auth = getAuth()
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({ resolver: zodResolver(signInSchema) });

  function handleSignIn({ email, password }: SignInData) {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => console.log(user))
      .catch((error) => {
        const title = error.message;

        Toast.show({
          title,
          placement: "top",
          bgColor: "red.900",
        });
      });
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg="white">
        <Center>
          <IconSvg />
          <Text fontSize="2xl" fontFamily="bold" mb={5}>
            Bem vindo de volta!
          </Text>

          <InputForm
            control={control}
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            name="email"
            iconName="md-mail-outline"
            errorMessage={errors.email?.message}
          />
          
          <InputForm
            control={control}
            placeholder="Senha"
            secureTextEntry
            name="password"
            iconName="md-key-outline"
            errorMessage={errors.password?.message}
          />

          <Text fontSize="sm" fontFamily="semibold" color="red.600" mb={24}>
            Esqueci minha senha
          </Text>
          <Button onPress={handleSubmit(handleSignIn)} title="ACESSAR CONTA" mb={5} textSize="md" />
          <Text onPress={() => navigation.navigate("SignUp")} fontSize="sm" fontFamily="semibold">
            Não tem uma conta? Cadastre-se
          </Text>
        </Center>
      </VStack>
    </ScrollView>
  );
}
