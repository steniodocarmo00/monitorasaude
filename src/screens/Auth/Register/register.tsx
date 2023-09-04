import { zodResolver } from "@hookform/resolvers/zod";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { VStack, HStack, Center, Text, ScrollView, Toast } from "native-base";
import { SignUpData, signUpSchema } from "@screens/Auth/Register/schema";
import { InputForm } from "@/components/inputForm";
import IconSvg from "@/assets/authicon.svg";
import { Button } from "@/components/signButton";
import { useNavigation } from "@react-navigation/native";
import { db } from "@/services/firebase.config";
import { collection, setDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { RegisterCheckbox } from "@/components/checkbox";

export function SignUp() {
  const navigation = useNavigation();
  const auth = getAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({ resolver: zodResolver(signUpSchema) });

  async function handleSignUp({ email, password, name }: SignUpData) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const user: any = auth.currentUser;
      const uid = user.uid;

      const users = collection(db, "users");

      await setDoc(doc(users, user.email), {
        owner_uid: uid,
        username: name,
        email: email,
      });

      const successTitle = "Cadastro com sucesso!";
      Toast.show({
        title: successTitle,
        placement: "top",
        bgColor: "green.100",
      });
    } catch (error: any) {
      const errorTitle = error.message;
      Toast.show({
        title: errorTitle,
        placement: "top",
        bgColor: "red.900",
      });
    }
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
            Faça seu cadastro
          </Text>

          <InputForm
            control={control}
            placeholder="Nome"
            name="name"
            iconName="md-person-outline"
            errorMessage={errors.name?.message}
          />

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

          <Button
            onPress={handleSubmit(handleSignUp)}
            title="CADASTRAR"
            mb={5}
            textSize="md"
          />
          <Text
            onPress={() => navigation.goBack()}
            fontSize="sm"
            fontFamily="semibold"
          >
            Já tem uma conta? Faça login
          </Text>
        </Center>
      </VStack>
    </ScrollView>
  );
}
