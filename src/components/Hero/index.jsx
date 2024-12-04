import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  Link,
  For,
} from "@chakra-ui/react";

import chevronRight from "../../assets/heroContent/chevronRight.svg";
import heroLine from "../../assets/heroContent/heroLine.svg";
import heroImg from "../../assets/heroContent/heroSideImg.png";
import boxUpImg from "../../assets/heroContent/BoxArrowUpRight.svg";

import heroOneImg from "../../assets/heroContent/heroOneImg.png";
import heroTwoImg from "../../assets/heroContent/heroTwoImg.png";
import heroThreeImg from "../../assets/heroContent/heroThreeImg.png";
import heroFourImg from "../../assets/heroContent/heroFourImg.png";
import heroFiveImg from "../../assets/heroContent/heroFiveImg.png";

const Hero = () => {
  return (
    <Box
      className="hero"
      pos="relative"
      h={{
        base: "initial",
        lg: "calc(120vh - 115px)",
        "2xl": "calc(120vh - 125px)",
      }}
    >
      <Container h="100%" display="flex" alignItems="center">
        {/* Line */}
        <Box
          pos="absolute"
          zIndex="1"
          top={{ base: "100px", md: "150px", lg: "-50px" }}
          right="0"
        >
          <Image src={heroLine} h="1125.5px" w="997px" />
        </Box>
        <Box
          className="hero-inner"
          display="flex"
          justifyContent={{ base: "center", lg: "space-between" }}
          flexDir={{ base: "column", lg: "row" }}
          my={{ base: "40px", lg: "0" }}
          gap={{ base: "40px", lg: "0" }}
        >
          <Box
            className="hero-inner-content"
            display="flex"
            flexDir="column"
            gap="15px"
            w={{ base: "100%", lg: "55%" }}
            pos="relative"
            zIndex="2"
          >
            <Box display="flex" flexDirection="column">
              <Text
                fontSize={{
                  base: "12px",
                  md: "13px",
                  lg: "14px",
                  xl: "16px",
                  "2xl": "16px",
                }}
                fontWeight="500"
                lineHeight="120%"
              >
                Join our premier monthly meetup for startup founders and tech
                visionaries
              </Text>
              <Heading
                color="#5c00b3"
                fontSize={{
                  base: "30px",
                  sm: "35px",
                  md: "35px",
                  lg: "40px",
                  xl: "45px",
                  "2xl": "42px",
                  "4xl": "45px",
                }}
                fontWeight={{ base: "bold", "2xl": "bold" }}
                fontFamily="Montserrat"
                lineHeight="125%"
              >
                Connect, Collaborate, Innovate!
              </Heading>
            </Box>

            <Text
              fontSize={{
                base: "15px",
                md: "15px",
                lg: "17px",
                xl: "20px",
                "2xl": "24px",
              }}
              fontWeight={{ base: "bold", "2xl": "400" }}
              fontFamily="Montserrat"
              lineHeight="150%"
              my={{ base: "0", lg: "20px" }}
            >
              Every last Friday of the month, we bring together the brightest
              minds in our local tech ecosystem. Whether you're a seasoned
              entrepreneur or just starting your journey, Founder's Friday is
              your launchpad for new ideas, valuable connections, and
              game-changing opportunities.
            </Text>

            <Box display="flex" flexDir="column" gap="10px">
              <Button
                py={{ base: "30px", lg: "35px" }}
                px={{ base: "20px", lg: "20px" }}
                w="fit-content"
                borderRadius="40px"
                border="2px solid var(--border-color)"
                bg="none"
                color="var(--border-color)"
                fontSize={{
                  base: "15px",
                  md: "15px",
                  lg: "20px",
                  xl: "24px",
                  "2xl": "28px",
                }}
                fontWeight={{ base: "400", "2xl": "400" }}
                fontFamily="Montserrat"
                lineHeight="120%"
              >
                Register For Our Next Event
                <Image src={chevronRight} />
              </Button>
              <Text
                as="span"
                color="#6750a4"
                fontSize={{
                  base: "10.5px",
                  md: "12px",
                  lg: "12px",
                  xl: "14px",
                  "2xl": "16px",
                }}
                fontWeight={{ base: "400", "2xl": "500" }}
                fontFamily="Montserrat"
                lineHeight="120%"
              >
                Join Us for our next meetup on the 26th of July 2024
              </Text>
            </Box>

            <VStack
              alignItems="start"
              mt={{ base: "20px", lg: "40px" }}
              gap={{ base: "20px", lg: "30px" }}
            >
              <Flex gap={{ base: "20px", lg: "30px" }}>
                <For
                  each={[
                    {
                      src: heroOneImg,
                      alt: "Collaborator One",
                    },
                    {
                      src: heroTwoImg,
                      alt: "Collaborator Two",
                    },
                    {
                      src: heroThreeImg,
                      alt: "Collaborator Three",
                    },
                    {
                      src: heroFourImg,
                      alt: "Collaborator Four",
                    },
                    {
                      src: heroFiveImg,
                      alt: "Collaborator Five",
                    },
                  ]}
                >
                  {(sponsor, i) => {
                    return (
                      <Box
                        h={{
                          base: "50px",
                          md: "55px",
                          xl: "70px",
                          "2xl": "80px",
                        }}
                        w={{
                          base: "50px",
                          md: "55px",
                          xl: "70px",
                          "2xl": "80px",
                        }}
                        cursor="pointer"
                        key={i}
                      >
                        <Image
                          src={sponsor.src}
                          alt={sponsor.alt}
                          h="100%"
                          w="100%"
                        />
                      </Box>
                    );
                  }}
                </For>
              </Flex>
              <Link
                display="flex"
                alignItems="center"
                _hover={{ textDecor: "none" }}
                gap="15px"
                fontSize={{
                  base: "10px",
                  md: "10px",
                  lg: "10px",
                  xl: "12px",
                  "2xl": "14px",
                }}
                fontWeight={{ base: "bold", "2xl": "bold" }}
                fontFamily="Montserrat"
                lineHeight="120%"
              >
                Become a collaborator today
                <Image src={boxUpImg} />
              </Link>
            </VStack>
          </Box>

          <Box
            className="hero-side"
            pos="relative"
            zIndex="1"
            w={{ base: "100%", lg: "50%" }}
          >
            <Image src={heroImg} alt="Hero Image" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
