import { Input as NativeBaseInput, IInputProps, Icon } from "native-base";
import { Ionicons } from '@expo/vector-icons';

type InputProps = IInputProps & {
  iconName: string
}

export function Input({ iconName, ...rest }: InputProps) {
  return (
    <NativeBaseInput
      h={14}
      w={80}
      mb={5}
      borderColor="blue.70"
      borderRadius={8}
      borderWidth={2}
      fontSize="lg"
      fontFamily="regular"
      color="black"
      placeholderTextColor="black.50"
      _focus={{
        bg: "transparent",
        borderColor: "black.100"
      }}
      InputLeftElement={<Icon as={Ionicons} name={iconName} size={5} color="black.50" ml={3}/>}
      {...rest}
    />
  );
}
