import { IButtonProps, Button as NativeBaseButton, Text, ITextProps } from "native-base";

type Props = IButtonProps & {
  title: string;
  textSize?: string;
};

export function Button({title, textSize, ...rest}: Props) {
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
      <Text color="white" fontFamily="bold" {...{fontSize: textSize}}>
        {title}
      </Text>
    </NativeBaseButton>


  )
}