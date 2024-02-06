import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";

const AppLayout = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Flex
        minWidth="max-content"
        w={"100vw"}
        justifyContent="flex-end"
        alignItems="center"
        gap="2"
        paddingX={'10'}
      > 
        <Text fontSize={'2xl'} fontWeight={'black'}>Pet-Me</Text>

        <Spacer />
        <ButtonGroup gap="2" p="4">
          <Button colorScheme={'green'}>My Cart</Button>
          <Button>Login</Button>
          <Button>Sign Up</Button>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </ButtonGroup>
      </Flex>

      <Box>{children}</Box>
    </div>
  );
};

export default AppLayout;

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
