import { Box, Flex, Spinner, Text } from "@chakra-ui/react"
import PetItem from "../PetItem"
import { useEffect, useMemo, useState } from "react"
// import _ from "lodash"
import SearchBar from "../SearchBar"
import { useStore } from "../../hooks/usePetStore"


const PetListing = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const fetchPetsData = useStore((state) => state.fetchPetsData)
  const statePets = useStore((state) => state.pets)
  const stateLoading = useStore((state) => state.loading)

  const handleSearchChange = (searchTerm) => {
    setSearchQuery(searchTerm)
  }

  useEffect(() => {
    fetchPetsData()
  }, [fetchPetsData])

  const filteredPets = useMemo(() => {
    if (!searchQuery) return statePets;

    const lowerCasedSearchTerm = searchQuery.toLowerCase();

    return statePets.filter((pet) =>
      pet.name.toLocaleLowerCase().includes(lowerCasedSearchTerm) ||
      pet.description.toLocaleLowerCase().includes(lowerCasedSearchTerm)
    )
  }, [searchQuery, statePets])

  
  const redirectToPetInfo = (petDetails) => {
    console.log(petDetails)
    // console.log(pet)
    // navigate(`/pet/${petDetails.name}`)
    // fetchSinglePet(petDetails)
  }


  return (
    <Box paddingX={'10'}>
      <SearchBar onSearchChange={handleSearchChange} />

      {stateLoading ? <Flex direction={'column'} justifyContent={'center'} alignItems={'center'} gap={'2'} h={'80vh'}>
        <Spinner size="lg" />
        <Text textAlign={'center'} fontWeight={'bold'}>Please wait as we fetch pets</Text>
      </Flex> : <Box>
        {filteredPets.length === 0 ? <Box> No pets to showcase</Box> : <Flex wrap='wrap' gap="6">
          {filteredPets.map((pet, index) => (
              <PetItem pet={pet} key={index}  />
          ))}
        </Flex>}
      </Box>}
    </Box>
  )
}

export default PetListing