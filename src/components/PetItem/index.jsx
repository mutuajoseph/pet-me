import {
  Box,
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

const PetItem = ({ pet }) => {
  // give the images a height and width

  const navigate = useNavigate()


  return (
    <Box onClick={() => navigate(`/pet/${pet.name}`)}>
      <Card maxW="sm">
        <CardBody>
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
    </Box>
  );
};

export default PetItem;

PetItem.propTypes = {
  pet: PropTypes.object,
};
