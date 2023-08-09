import { Input as NativeBaseInput, IInputProps } from "native-base";

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      h={14}
      w={80}
      px={4}
      mb={5}
      borderColor="blue.70"
      borderRadius={8}
      borderWidth={2}
      fontSize="lg"
      fontFamily="regular"
      color="black"
      placeholderTextColor="black.50"
      {...rest}
    />
  );
}
