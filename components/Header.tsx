import {
  Avatar,
  AvatarBadge,
  Box,
  Container,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { RiShoppingBagFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { userSuccess } from "redux/slices/userSlice";

const Header: React.FC = () => {
  const { data: session } = useSession();
  const userData = useSelector((state: any) => state.userData.user);
  console.log("user=>", userData);
  // const { user } = session;

  const dispatch = useDispatch();

  useEffect(() => {
    if (session) {
      // dispatch(userSuccess(session.user));
      console.log("session data =>", session.user);
    }
  }, [session]);

  return (
    <Box boxShadow="md" bg="white">
      <Container>
        <Flex alignItems="center">
          <Box
            display="flex"
            alignItems="center"
            flexGrow="1"
            padding="15px"
            height="80px"
          >
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="16pt"
              fontWeight="extrabold"
            >
              Snapify
            </Text>
          </Box>
          <Box flexGrow="3">
            <InputGroup variant="filled">
              <InputLeftElement
                pointerEvents="none"
                children={<FiSearch color="red.300" />}
              />
              <Input type="tel" placeholder="Search here..." />
            </InputGroup>
          </Box>
          <Flex
            justifyContent="flex-end"
            gap="15px"
            flexGrow="2"
            alignItems="center"
          >
            <Box position="relative">
              <IconButton
                aria-label="Cart"
                rounded="full"
                icon={<RiShoppingBagFill />}
              />
              <Box
                position="absolute"
                as="span"
                rounded="full"
                borderRadius="100px"
                bg="tomato"
                color="white"
                fontSize="8pt"
                height="20px"
                minW="20px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                top="-7px"
                right="-7px"
                p="5px"
              >
                19
              </Box>
            </Box>
            <Box
              display="flex"
              gap="15px"
              alignItems="center"
              padding="5px 10px"
              _hover={{ bg: "gray.100" }}
              borderRadius="md"
            >
              <Box>
                <Avatar
                  name={userData?.name || "John smith"}
                  src={userData?.image || "https://bit.ly/dan-abramov"}
                >
                  <AvatarBadge boxSize="0.85em" bg="green.500" />
                </Avatar>
              </Box>
              <Box>
                <Box fontWeight="600" color="gray.500" fontSize="12pt">
                  {userData?.name || "John smith"}
                </Box>
                <Box color="gray.300" fontWeight="500" fontSize="10pt">
                  Active
                </Box>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
export default Header;

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async () => {
//     const response = await fetch(
//       `https://reqres.in/api/users/${Math.floor(Math.random() * 10 + 1)}`
//     );
//     const { data } = await response.json();
//     store.dispatch(addUser(`${data.first_name} ${data.last_name}`));
//     store.dispatch(increment());
//   }
// );
