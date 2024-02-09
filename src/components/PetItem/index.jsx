import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../hooks/usePetStore";

const PetItem = ({ pet }) => {
  // give the images a height and width
  const fetchSinglePet = useStore((state) => state.fetchPetData)

  const navigate = useNavigate();

  const redirectToPetInfo = (petDetails) => {
    fetchSinglePet(petDetails)
    navigate(`/pets/${petDetails.name}`)
  }

  return (
    <Card maxW="sm">
      <CardBody cursor={'pointer'} onClick={() => redirectToPetInfo(pet) }>
        <Flex w="100%" h="350px">
          <Image
            objectFit="cover"
            w={"100vw"}
            src={pet.images}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        </Flex>
        <Stack mt="6" spacing="3">
          <Heading size="md">{pet.name}</Heading>
          <Text>{pet.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            ${pet.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default PetItem;

PetItem.propTypes = {
  pet: PropTypes.object,
};
