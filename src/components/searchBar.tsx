import { Input, HStack, IconButton } from "native-base";
import { Feather } from '@expo/vector-icons'; 

export function SearchBar({...rest}) {
  return(
    <HStack mx={4} mt={8} alignItems="center">
      <Input 
      placeholder="Buscar local" 
      w={72}
      h={14}
      borderRadius="4" 
      py="3" 
      px="4" 
      fontSize="lg"
      fontFamily="bold"
      placeholderTextColor="black.50"
      bgColor="white"
    />
    <IconButton 
          size={14}
          _icon={{
            as: Feather,
            name: "log-out",
            size: 7,
            color: "white"
          }}
          bgColor="green.100"
          borderRadius="100"
          borderWidth="1"
          borderColor="blue.100"
          mx={6}
          {...rest}
        />
    </HStack>
  )
}