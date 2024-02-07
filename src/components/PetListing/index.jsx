import { Box, Flex } from "@chakra-ui/react"
import PetItem from "../PetItem"
import { pets } from "../../utils/petDataStub"
import { useState } from "react"
import _ from "lodash"
import SearchBar from "../SearchBar"

// update our search bar component by issuing out a prop to it 


const PetListing = () => {
  const [fetchedPets, setFetchedPets] = useState(pets)
  // eslint-disable-next-line no-unused-vars
  const [searchQuery, setSearchQuery] =  useState("")


  const handleSearchChange = (searchTerm) => {
    setSearchQuery(searchTerm)
    if (!searchTerm) {
      setFetchedPets(pets)
    } else {
      const lowerCasedSearchTerm = searchTerm.toLowerCase();
      const filteredPets = pets.filter((pet) => 
        pet.name.toLocaleLowerCase().includes(lowerCasedSearchTerm) || 
        pet.description.toLocaleLowerCase().includes(lowerCasedSearchTerm)
      )

      setFetchedPets(filteredPets)
    }
  }
  
  return (
    <Box paddingX={'10'}>
      <SearchBar onSearchChange={handleSearchChange} />
      
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