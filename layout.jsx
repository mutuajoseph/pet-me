import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Spinner,
  Stack,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";
import { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const loginInitialValues = {
  email: "",
  password: "",
};

const registerInitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
}

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address") // Validates the email format
    .required("Email is required"), // Marks the field as required
  password: Yup.string()
    .min(8, "Password must be at least 8 characters") // Minimum length
    .required("Password is required"),
});

const registerValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address") // Validates the email format
    .required("Email is required"), // Marks the field as required
  password: Yup.string()
    .min(8, "Password must be at least 8 characters") // Minimum length
    .required("Password is required"),
})

const AppLayout = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isActive, setIsActive] = useState("");
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleAuthModalClick = (authMode) => {
    setIsActive(authMode);
    onOpen();
  };

  const handleSubmitLogin = (loginDetails) => {
    setLoading(true)
    console.log(loginDetails)
    setLoading(false)
  }
  const handleSubmitRegister = (registerDetails) => {
    setLoading(true)
    console.log(registerDetails)
    setLoading(false)
  }

  return (
    <div>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex
              direction={"row"}
              justifyContent={"center"}
              gap={"4"}
              alignItems={"center"}
            >
              {isActive === "login" ? <Text>LOGIN</Text> : <Text>SIGN UP</Text>}
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={ isActive === "login" ? loginInitialValues : registerInitialValues}
              validationSchema={ isActive === "login" ? loginValidationSchema : registerValidationSchema}
              onSubmit={isActive === "login" ? handleSubmitLogin : handleSubmitRegister}
            >
              {
                isActive === "login" ? <Form>
                <Stack direction="column" spacing={8}>
                  <Field name="email">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <FormLabel>Email address</FormLabel>
                        <Input {...field} type="email" id="email" />
                        <FormErrorMessage>
                          {form.errors.email &&
                            form.touched.email &&
                            form.errors.email}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="password">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.password && form.touched.password
                        }
                      >
                        <FormLabel>Password</FormLabel>
                        <Input {...field} type="password" id="password" />
                        <FormErrorMessage>
                          {form.errors.password &&
                            form.touched.password &&
                            form.errors.password}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Stack direction="row" spacing={4}>
                    <Button width="70%" colorScheme="teal" variant="outline">
                      Forgot Password
                    </Button>
                    <Button
                      width="30%"
                      colorScheme="teal"
                      variant="solid"
                      type="submit"
                    >
                      {loading ? <Spinner size="md" /> : <Text>Login</Text>}
                    </Button>
                  </Stack>
                </Stack>
              </Form> : 
              <Form>
              <Stack direction="column" spacing={8}>
              <Field name="firstName">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.firstName && form.touched.firstName}
                    >
                      <FormLabel>First Name</FormLabel>
                      <Input {...field} type="text" id="firstName" />
                      <FormErrorMessage>
                        {form.errors.firstName &&
                          form.touched.firstName &&
                          form.errors.firstName}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="lastName">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.lastName && form.touched.lastName}
                    >
                      <FormLabel>Last Name</FormLabel>
                      <Input {...field} type="text" id="lastName" />
                      <FormErrorMessage>
                        {form.errors.lastName &&
                          form.touched.lastName &&
                          form.errors.lastName}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="email">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <FormLabel>Email address</FormLabel>
                      <Input {...field} type="email" id="email" />
                      <FormErrorMessage>
                        {form.errors.email &&
                          form.touched.email &&
                          form.errors.email}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="password">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={
                        form.errors.password && form.touched.password
                      }
                    >
                      <FormLabel>Password</FormLabel>
                      <Input {...field} type="password" id="password" />
                      <FormErrorMessage>
                        {form.errors.password &&
                          form.touched.password &&
                          form.errors.password}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Stack direction="row" spacing={4}>

                  {isActive === "login" ?  <Button width="70%" colorScheme="teal" variant="outline">
                    Forgot Password
                  </Button>: <></>}
                 
                  <Button
                    width={isActive === "login" ? "30%" : "100%" }
                    colorScheme="teal"
                    variant="solid"
                    type="submit"
                  >
                    {loading ? <Spinner size="md" /> : <Text>Login</Text>}
                  </Button>
                </Stack>
              </Stack>
            </Form>
              }
            </Formik>
          </ModalBody>
          <ModalFooter>
          
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Flex
        minWidth="max-content"
        w={"100vw"}
        justifyContent="flex-end"
        alignItems="center"
        gap="2"
        paddingX={"10"}
      >
        <Text fontSize={"2xl"} fontWeight={"black"}>
          Pet-Me
        </Text>

        <Spacer />
        <ButtonGroup gap="2" p="4">
          <Button colorScheme={"green"} onClick={() => navigate('/cart')}>My Cart</Button>
          <Button onClick={() => handleAuthModalClick("login")}>Login</Button>
          <Button onClick={() => handleAuthModalClick("sign-up")}>
            Sign Up
          </Button>
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
