"use client";

import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleClick = async () => {
    try {
      setLoading(true);
      const res = await axios.post("https://bogward.onrender.com/login", {
        email: email,
        mobile: mobile,
      });

      console.log(res.data);
      toast({
        position: "top",
        title: "Loged in Successfully.",
        description: "You logged in successfully.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setLoading(false);
    } catch (error) {
      toast({
        position: "top",
        title: "Invalid Credentials.",
        description: "Please put correct Credentials.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Mobile</FormLabel>
            <Input
              type="password"
              onChange={(e) => setMobile(e.target.value)}
            />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Text color={"blue.500"}>Forgot password?</Text>
            </Stack>
            <Button
              colorScheme={"blue"}
              variant={"solid"}
              onClick={handleClick}
              isLoading={loading}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}
