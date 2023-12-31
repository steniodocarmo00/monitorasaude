import { IconButton, IIconButtonProps } from "native-base";
import { Feather } from "@expo/vector-icons"

export function RegisterButton({ ...rest }: IIconButtonProps) {
  return(
    <IconButton 
          size={15}
          _icon={{
            as: Feather,
            name: "plus",
            size: 6,
            color: "white"
          }}
          bgColor="green.100"
          borderRadius="100"
          borderWidth="1" 
          borderColor="blue.100"
          left={40}
          mt={24}
          marginRight={12}
          {...rest}
        />
  )
}