import { Input, HStack, IconButton } from "native-base";

export function SearchBar() {
  return(
    <HStack mx={4} mt={16} alignItems="center">
      <Input 
      placeholder="Buscar local" 
      w="100%"
      h={14}
      borderRadius="4" 
      py="3" 
      px="4" 
      fontSize="lg"
      fontFamily="bold"
      placeholderTextColor="black.50"
      bgColor="white"
    />
    </HStack>
  )
}