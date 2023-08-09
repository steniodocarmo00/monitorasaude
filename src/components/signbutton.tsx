import { IButtonProps, Button as NativeBaseButton, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
};

export function Button({title, ...rest}: Props) {
  return(
    <NativeBaseButton 
      h={14}
      w={80}
      bg="green.100"
      borderRadius={8}
      _pressed={{
        bg: "green.70"
      }}
      {...rest}
    >
      <Text color="white" fontFamily="bold" fontSize="md">
        {title}
      </Text>
    </NativeBaseButton>


  )
}