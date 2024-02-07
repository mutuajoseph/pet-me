import {SearchIcon } from "@chakra-ui/icons"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import PropType from 'prop-types'

const SearchBar = ({onSearchChange}) => {

  return (
    <InputGroup marginY={'10'}>
    <InputLeftElement pointerEvents='none' marginRight={'4'}>
      <SearchIcon color='gray.300' fontSize={'1.5rem'}/>
    </InputLeftElement>
    <Input onChange={(e) => onSearchChange(e.target.value)} variant='flushed' type='text' placeholder='Type to search for a pet' fontSize={'2rem'} />
  </InputGroup>
  )
}

export default SearchBar

SearchBar.propTypes = {
  onSearchChange: PropType.func
}