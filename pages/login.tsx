import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { userRequest } from "redux/slices/userSlice";

interface MyFormValues {
  name: String | null;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const handleFacebookSubmit = () => {
    const user = process.env.GOOGLE_CLIENT_ID;
    console.log(process.env.GOOGLE_CLIENT_ID);
    dispatch(userRequest());
  };
  return (
    <Flex>
      <Box
        height="100vh"
        width="50%"
        bgGradient="linear(to-b, #7928CA, #FF0080)"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box color="whiteAlpha.900" fontWeight="700" fontSize="5xl">
          <Text
            bgClip="text"
            bgGradient={[
              "linear(to-tr, teal.300, yellow.400)",
              "linear(to-t, blue.200, teal.500)",
              "linear(to-b, orange.100, purple.300)",
            ]}
          >
            Sweet Memories
          </Text>
        </Box>
      </Box>
      <Box height="100vh" width="50%" overflowY="auto">
        <Box margin="15px" bg="white" padding="15px">
          <Box
            fontSize="24px"
            fontWeight="600"
            color="gray.300"
            mt="3"
            mb="20px"
            borderColor="gray.400"
            borderBottom="1px solid"
            textAlign="center"
            p="15px"
          >
            Login Form
          </Box>
          <Wrap>
            <WrapItem flexGrow="1" flexDirection="column">
              <FormLabel>First name</FormLabel>
              <FormControl
                variant="filled"
                id="first-name"
                isRequired
                isInvalid
                mb="15px"
              >
                <Input placeholder=" " />
                {/* <FormHelperText>Keep it very short and sweet!</FormHelperText> */}
                <FormErrorMessage>Your First name is invalid</FormErrorMessage>
              </FormControl>
            </WrapItem>
            <WrapItem flexGrow="1" flexDirection="column">
              <FormLabel>Last name</FormLabel>

              <FormControl
                mb="15px"
                variant="filled"
                id="last-name"
                isRequired
                isInvalid
              >
                <Input placeholder=" " />
                {/* <FormHelperText>Keep it very short and sweet!</FormHelperText> */}
                <FormErrorMessage>Your Last name is invalid</FormErrorMessage>
              </FormControl>
            </WrapItem>
          </Wrap>
          <Box>
            <FormLabel>Email</FormLabel>
            <FormControl
              variant="floating"
              id="last-name"
              isRequired
              isInvalid
              flexDirection="column"
              mb="15px"
            >
              <InputGroup gap="15px">
                <InputLeftElement
                  pointerEvents="none"
                  children={<AiOutlineMail color="gray.300" />}
                />
                <Input placeholder="contact@gmail.com" />
                <Button>Send Otp</Button>
              </InputGroup>
              {/* <FormHelperText>Keep it very short and sweet!</FormHelperText> */}
              <FormErrorMessage>Your Email is invalid</FormErrorMessage>
            </FormControl>
          </Box>
          <Box>
            <FormLabel>Mobile No</FormLabel>
            <FormControl
              variant="floating"
              id="last-name"
              isRequired
              isInvalid
              flexDirection="column"
              mb="15px"
            >
              <InputGroup gap="15px">
                <InputLeftElement
                  pointerEvents="none"
                  children={<FaPhoneAlt color="gray.300" />}
                />
                <Input placeholder="contact@gmail.com" />
                <Button>Send Otp</Button>
              </InputGroup>
              {/* <FormHelperText>Keep it very short and sweet!</FormHelperText> */}
              <FormErrorMessage>Your Email is invalid</FormErrorMessage>
            </FormControl>
          </Box>
          <Box>
            <FormLabel>Address</FormLabel>
            <FormControl
              variant="floating"
              id="last-name"
              isRequired
              isInvalid
              flexDirection="column"
              mb="15px"
            >
              <Textarea bg="white.200" placeholder="contact@gmail.com" />
              {/* <FormHelperText>Keep it very short and sweet!</FormHelperText> */}
              <FormErrorMessage>Your Email is invalid</FormErrorMessage>
            </FormControl>
          </Box>
          <Flex gap="15px" justify="space-evenly">
            <Button
              bg="white"
              boxShadow="md"
              color="black"
              leftIcon={<FcGoogle />}
              variant="solid"
              _hover={{
                bg: "white",
              }}
              onClick={() => signIn("google", { redirect: false })}
            >
              Sign in with Google
            </Button>
            <Button
              boxShadow="md"
              colorScheme="facebook"
              leftIcon={<BsFacebook />}
              variant="solid"
              onClick={handleFacebookSubmit}
            >
              Sign in with Facebook
            </Button>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
