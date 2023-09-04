import { z, ZodType } from "zod";

export type SignUpData = {
  name: string;
  email: string;
  password: string;
};

export const signUpSchema: ZodType<SignUpData> = z.object({
  name: z.string({ required_error: "Digite seu nome" }),
  email: z.string({ required_error: "Digite o email" }).email("Email inválido"),
  password: z
    .string({ required_error: "Digite a senha" })
    .min(6, "A senha precisa de no mínimo 6 caracteres"),
  })
