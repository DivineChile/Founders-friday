import { Box, Container, Heading, Image, Text, Button } from "@chakra-ui/react";
import arrowRight from "../../assets/communityContent/arrowRight.svg";
import arrowRightTwo from "../../assets/communityContent/arrowRightTwo.svg";
import communityImg from "../../assets/communityContent/communityImg.png";
import lineThree from "../../assets/communityContent/lineThree.svg";
import sideImg from "../../assets/communityContent/sideImg.png";
import playIcon from "../../assets/communityContent/playIcon.svg";

const Community = () => {
  return (
    <Box className="community" pos="relative">
      <Container>
        <Box
          className="community-inner"
          display="flex"
          flexDir="column"
          gap="70px"
        >
          <Box
            className="community-inner-top"
            py={{ base: "40px", lg: "80px" }}
            display="flex"
            flexDir="column"
            gap="30px"
          >
            <Box
              className="community-inner-head"
              display="flex"
              flexDir="column"
              justifyContent="center"
              w={{ base: "100%", lg: "80%", xl: "70%" }}
              m="0 auto"
              gap="10px"
            >
              <Heading
                fontSize={{
                  base: "25px",
                  md: "30px",
                  lg: "35px",
                  xl: "40px",
                  "2xl": "45px",
                }}
                fontWeight={{ base: "bold", "2xl": "bold" }}
                fontFamily="Montserrat"
                lineHeight="125%"
                textAlign="center"
              >
                Register And Be Part of Our Community
              </Heading>
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
                color="gray"
                textAlign="center"
              >
                Join our community of over 1000+ founders, developers, and tech
                junkies in general.Be inspired by people who live to inspire!
              </Text>
            </Box>

            <Box
              className="community-inner-body"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDir="column"
              gap="20px"
            >
              <Box>
                <Box
                  pos="absolute"
                  zIndex="1"
                  top={{ base: "210px", sm: "180px", md: "180px", lg: "250px" }}
                  // top="0"
                  left="0"
                >
                  <Image src={lineThree} w="100%" />
                </Box>
                <Image src={communityImg} pos="relative" zIndex="2" />
              </Box>

              <Button
                p={{ base: "20px 30px", lg: "30px 50px" }}
                bg="transparent"
                border={"3px solid #a649ff"}
                color={"#a649ff"}
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
                w="fit"
              >
                Register Now
                <Image src={arrowRightTwo} />
              </Button>
            </Box>
          </Box>

          <Box
            className="community-inner-bottom"
            display="flex"
            justifyContent="space-between"
            flexDir={{ base: "column", lg: "row" }}
            alignItems="center"
            py={{ base: "40px", lg: "80px" }}
            gap={{ base: "20px", lg: "0" }}
          >
            <Box w={{ base: "100%", md: "70%", lg: "48%" }} pos="relative">
              <Image src={sideImg} h="100%" w="100%" />
              <Box
                pos="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                h={{ base: "30px", lg: "40px", xl: "60px", "2xl": "70px" }}
                w={{ base: "30px", lg: "40px", xl: "60px", "2xl": "70px" }}
                bg="#d9d9d9"
                borderRadius="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
              >
                <Image src={playIcon} />
              </Box>
            </Box>
            <Box
              className="content"
              w={{ base: "100%", lg: "48%" }}
              display="flex"
              flexDir="column"
              gap="20px"
            >
              <Heading
                fontSize={{
                  base: "15px",
                  md: "15px",
                  lg: "17px",
                  xl: "20px",
                  "2xl": "24px",
                }}
                fontWeight={{ base: "600", "2xl": "600" }}
                fontFamily="Montserrat"
                lineHeight="120%"
                w={{ base: "100%", lg: "90%", xl: "85%" }}
              >
                At Founder’s Friday, Every Friday Is a Learning Experience!
              </Heading>
              <Text
                fontSize={{
                  base: "12px",
                  md: "12px",
                  lg: "14px",
                  xl: "16px",
                  "2xl": "18px",
                }}
                fontWeight={{ base: "600", "2xl": "600" }}
                fontFamily="Montserrat"
                lineHeight="120%"
              >
                Join us in our mission to transform ideas into impact and shape
                the future of Nigeria’s startup landscape.
              </Text>

              <Button
                p={{ base: "20px 30px", lg: "30px 50px" }}
                bg="#a649ff"
                border="none"
                color="#fff"
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
                w="fit"
              >
                Register
                <Image src={arrowRight} />
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Community;
