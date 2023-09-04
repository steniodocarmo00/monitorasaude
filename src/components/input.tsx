import {
  Input as NativeBaseInput,
  IInputProps,
  Icon,
  FormControl,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

export type InputProps = IInputProps & {
  iconName: string;
  errorMessage?: string;
};

export function Input({
  errorMessage,
  isInvalid,
  iconName,
  ...rest
}: InputProps) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl alignItems="center" isInvalid={!!errorMessage} mb={4}>
      <NativeBaseInput
        h={14}
        w={80}
        borderColor="blue.70"
        borderRadius={8}
        borderWidth={2}
        fontSize="lg"
        fontFamily="regular"
        color="black"
        placeholderTextColor="black.50"
        isInvalid={invalid}
        _focus={{
          bg: "transparent",
          borderColor: "black.100",
        }}
        InputLeftElement={
          <Icon
            as={Ionicons}
            name={iconName}
            size={5}
            color="black.50"
            ml={3}
          />
        }
        {...rest}
      />
      {errorMessage && (
        <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
      )}
    </FormControl>
  );
}
