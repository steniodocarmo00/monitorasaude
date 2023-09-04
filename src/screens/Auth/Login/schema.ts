import { z, ZodType } from "zod";

export type SignInData = {
  email: string;
  password: string;
};

export const signInSchema: ZodType<SignInData> = z.object({
  email: z.string({ required_error: "Digite o email" }).email("Email inválido"),
  password: z
    .string({ required_error: "Digite a senha" })
    .min(6, "A senha precisa de no mínimo 6 caracteres"),
});