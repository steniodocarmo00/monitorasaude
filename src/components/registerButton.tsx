import { IconButton } from "native-base";
import { Feather } from "@expo/vector-icons"

export function RegisterButton() {
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
          top={96}
          marginY={56}
          marginRight={5}
        />
  )
}