import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";
import React,{useState} from "react";

const Login = () => {
  const [show, setShow] = useState(false)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    
    const handleClick=()=>setShow(!show)

    const submitHandler=()=>{}


  return (
    <VStack spacing="5px">
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setEmail(e.target.value)}
          isRequired
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Confirm password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        color="white"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        SignUp
      </Button>
      <Button
      variant="solid"
        colorScheme="red"
        width="100%"
        // style={{ marginTop: 15 }}
        onClick={()=>{
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Get Guest Uset Credentials
      </Button>
    </VStack>
  );
};

export default Login;