import { Box, Flex, Text } from "@chakra-ui/react"
import PetItem from "../PetItem"
import { pets } from "../../utils/petDataStub"
import { useState } from "react"
import _ from "lodash"

const PetListing = () => {
  const [fetchedPets, setFetchedPets] = useState(pets)

  return (
    <Box paddingX={'10'}>
      <Text fontSize={'xl'} fontWeight="extralight">place search bar here</Text>
      
      <Box>
        {_.isEmpty(fetchedPets) ? <Box> No pets to showcase</Box> : <Flex wrap='wrap' gap="6">
          {fetchedPets.map((pet, index) => (
            <PetItem pet={pet} key={index}/>
          ))}
        </Flex>}
      </Box>
    </Box>
  )
}

export default PetListing