import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormHelperText,
  InputRightElement,
  FormLabel,
  FormControl,
  RadioGroup,
  HStack,
  Radio,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import PhoneInput from "../common/PhoneInput";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginstate, setLoginstate] = useState(true);
  var [userlocation, setUserLocation] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const handleShowClick = () => setShowPassword(!showPassword);
  const handleRegister = () => {
    console.log("Register");
    setLoginstate(false);
  };

  const handleLogin = () => {
    if (userName === "Micheal" && password === "12345678") {
      alert("Welcome !!!");
    } else {
      alert("Invalid Username or password");
    }
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values: any) => {
    debugger;
    console.log("Submitted", values);
  };

  const handleSubmitRegister = () => {
    alert("Your data has been submitted");
  };

  const Location = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      setUserLocation("Geolocation is not supported by this browser.");
    }
  };

  const showPosition = (position: any) => {
    setUserLocation(
      `Latitude: ${position.coords.latitude},
         
        Longitude: ${position.coords.longitude}`
    );
  };
  return (
    <div>
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor=" #234E70"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar bg="#gray" />
          <Heading color="#fff">Welcome</Heading>
          <Box minW={{ base: "90%", md: "468px" }}>
            {loginstate ? (
              <form>
                <Stack
                  spacing={4}
                  p="1rem"
                  backgroundColor="whiteAlpha.900"
                  boxShadow="md"
                >
                  <FormControl>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<CFaUserAlt color="gray.300" />}
                      />
                      <Input
                        type="username"
                        placeholder="UserName"
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        color="gray.300"
                        children={<CFaLock color="gray.300" />}
                      />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                          {showPassword ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <FormHelperText textAlign="right">
                      <Link>forgot password?</Link>
                    </FormHelperText>
                  </FormControl>
                  <Button
                    borderRadius={0}
                    type="submit"
                    variant="solid"
                    colorScheme="teal"
                    width="full"
                    onClick={handleLogin}
                  >
                    Login
                  </Button>
                </Stack>
              </form>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                  <FormLabel htmlFor="name">First name</FormLabel>
                  {/* Name, Email, Mobile number,Location, DOB, Gender */}
                  <Input
                    id="name"
                    placeholder="name"
                    {...register("name", {
                      required: "This is required",
                      minLength: {
                        value: 4,
                        message: "Minimum length should be 4",
                      },
                    })}
                  />
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input id="email" placeholder="ex@email.com" />
                  <FormLabel htmlFor="gender">Gender</FormLabel>
                  <RadioGroup defaultValue="Male">
                    <HStack spacing="24px">
                      <Radio value="Male">Male</Radio>
                      <Radio value="Female">Female</Radio>
                      <Radio value="Others">Others</Radio>
                    </HStack>
                  </RadioGroup>
                  <FormLabel htmlFor="dob">Date of Birth</FormLabel>
                  <div>
                    <DatePicker
                      id="dob"
                      className="border rounded-sm pl-2"
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                    />
                  </div>
                  <FormLabel htmlFor="mobile">Mobile Number</FormLabel>
                  <PhoneInput />
                  <FormLabel htmlFor="Location">Location</FormLabel>
                  <Input
                    id="location"
                    placeholder="Click to Find Location"
                    onClick={Location}
                    value={userlocation}
                  />
                </FormControl>
                <Button
                  mt={4}
                  colorScheme="teal"
                  isLoading={isSubmitting}
                  type="submit"
                  onClick={handleSubmitRegister}
                >
                  Submit
                </Button>
                &nbsp;
                <Button
                  mt={4}
                  colorScheme="teal"
                  isLoading={isSubmitting}
                  onClick={(e) => setLoginstate(true)}
                >
                  Back
                </Button>
              </form>
            )}
          </Box>
        </Stack>
        {loginstate ? (
          <Box>
            <span color="gray.300">New to us? </span>

            <Link color="#fff" href="#" onClick={handleRegister}>
              Click here to Register
            </Link>
          </Box>
        ) : (
          ""
        )}
      </Flex>
    </div>
  );
};

export default Login;
