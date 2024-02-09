import { Box, Text } from "@chakra-ui/react"
import { useStore } from "../../hooks/usePetStore"


const SinglePet = () => {

  const pet = useStore((state) => state.pet)
  const isLoadingState = useStore((state) => state.loading)

  return (
    <Box p={10}>

      {
        isLoadingState ? <Text>Loading...</Text> : <Text>{JSON.stringify(pet)}</Text>
      }

    </Box>
  )
}

export default SinglePet