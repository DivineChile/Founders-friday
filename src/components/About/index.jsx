import {
  Box,
  Button,
  Container,
  Flex,
  For,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import aboutImg from "../../assets/aboutContent/aboutImg.png";
import aboutLine from "../../assets/aboutContent/aboutLine.svg";
import arrowRightIcon from "../../assets/aboutContent/ArrowRight.svg";
import moneyIcon from "../../assets/aboutContent/moneyIcon.svg";

const About = () => {
  return (
    <Box id="about" className="about">
      <Container>
        <Box
          className="about-inner"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          pos="relative"
          zIndex="2"
          py={{ base: "40px", lg: "80px", xl: "120px" }}
          flexDir={{ base: "column", lg: "row" }}
          gap={{ base: "40px", lg: "0" }}
        >
          <Box
            className="about-inner-img"
            w={{ base: "100%", md: "70%", lg: "48%" }}
          >
            <Image src={aboutImg} h="100%" w="100%" />
          </Box>

          <Box
            className="about-inner-content"
            w={{ base: "100%", lg: "50%" }}
            display="flex"
          >
            <Box hideBelow="lg">
              <Image src={aboutLine} h="100%" w="130px" />
            </Box>
            <Box pos="relative">
              <Heading
                fontSize={{
                  base: "30px",
                  md: "35px",
                  lg: "35px",
                  xl: "40px",
                  "2xl": "45px",
                }}
                fontWeight={{ base: "bold", "2xl": "bold" }}
                fontFamily="Montserrat"
                lineHeight="125%"
                color="#000"
              >
                Who Are We?
              </Heading>
              <VStack
                gap="30px"
                my={{ base: "20px", lg: "30px", xl: "50px" }}
                alignItems="start"
              >
                <Text
                  fontSize={{
                    base: "15px",
                    md: "15px",
                    lg: "17px",
                    xl: "20px",
                    "2xl": "24px",
                  }}
                  fontWeight={{ base: "400", "2xl": "400" }}
                  fontFamily="Montserrat"
                  lineHeight="120%"
                  my={{ base: "0", lg: "0px", xl: "20px" }}
                  color="gray"
                >
                  Born from the vibrant startup ecosystem of Abuja, we
                  recognized the need for a consistent, high-quality networking
                  platform where founders, innovators, and tech enthusiasts
                  could connect, share ideas, and foster collaboration.
                </Text>

                <Flex
                  justifyContent="flex-start"
                  flexDir="row"
                  gap={{ base: "10px", lg: "30px", xl: "40px" }}
                >
                  <For
                    each={[
                      {
                        text: "Register",
                        icon: arrowRightIcon,
                      },
                      {
                        text: "Donate",
                        icon: moneyIcon,
                      },
                    ]}
                  >
                    {(btn, index) => {
                      return (
                        <Button
                          p={{ base: "20px 30px", lg: "30px 50px" }}
                          bg={index == 0 ? "#a649ff" : "#fff"}
                          border={index == 0 ? "none" : "2px solid #a649ff"}
                          color={index == 0 ? "#fff" : "#a649ff"}
                          borderRadius="40px"
                          fontSize={{
                            base: "15px",
                            md: "15px",
                            lg: "17px",
                            xl: "20px",
                            "2xl": "24px",
                          }}
                          fontWeight={{ base: "400", "2xl": "400" }}
                          fontFamily="Montserrat"
                          lineHeight="120%"
                          key={index}
                        >
                          {btn.text}
                          <Image src={btn.icon} />
                        </Button>
                      );
                    }}
                  </For>
                </Flex>
              </VStack>

              <Text
                pos={{ base: "initial", lg: "absolute" }}
                bottom={{ lg: "0", xl: "-20px" }}
                fontSize={{
                  base: "15px",
                  md: "13px",
                  lg: "13px",
                  xl: "15px",
                  "2xl": "20px",
                }}
                fontWeight={{ base: "bold", "2xl": "bold" }}
                fontFamily="Montserrat"
                lineHeight="120%"
              >
                Founder's Friday is more than just a meetup — it's a movement.
              </Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
