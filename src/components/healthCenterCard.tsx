import { View, Text, HStack, Center } from "native-base";
import { Button } from "./signButton";

export function HealthCenterCard() {
  return(
    <View w={90} h={48} bg="white" borderRadius={10} borderColor="black.10" borderWidth={2}>
      <Text fontFamily="regular" fontSize="xl" px={4} py={4}>
        Esf Visconde
      </Text>
      <HStack w={56} mb={2}>
        <Text fontFamily="bold" fontSize="md" px={4}>
          Endereço:
        </Text>

        <Text fontFamily="regular" fontSize="md">
          Tv. do Chaco, 1050 - Pedreira, Belém - PA, 66085-080
        </Text>
      </HStack>
      <HStack w={56}>
        <Text fontFamily="bold" fontSize="md" px={4}>
          Horas:
        </Text>
        <Text fontFamily="regular" fontSize="md">
          Fechado. Abre qua às 07:00
        </Text>
      </HStack>
      <Center>
        <Button title="VER MAIS" w={20} h={9} textSize="2xs" mt={1}/>
      </Center>
    </View>
  )
}