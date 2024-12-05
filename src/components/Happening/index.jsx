import { Box, Button, Container, Heading, Image, Text } from "@chakra-ui/react";
import line from "../../assets/happensContent/lineTwo.svg";
import sideImg from "../../assets/happensContent/happensImg.png";
import arrowRight from "../../assets/happensContent/arrow-right.svg";

const Happen = () => {
  return (
    <Box className="happen" pos="relative">
      <Container>
        <Box
          pos="absolute"
          zIndex="1"
          top={{ base: "-500px", md: "-550px", lg: "-511px", xl: "-500px" }}
          right="0"
        >
          <Image src={line} h="1432.5px" w="100%" />
        </Box>
        <Box
          className="happen-inner"
          display="flex"
          flexDir={{ base: "column", lg: "row" }}
          justifyContent="space-between"
          gap={{ base: "40px", lg: "0" }}
          py={{ base: "40px", lg: "100px" }}
        >
          <Box
            className="happen-inner-content"
            w={{ base: "100%", lg: "50%" }}
            pos="relative"
            display="flex"
            flexDir="column"
            gap="30px"
            zIndex="2"
          >
            <Box>
              <Heading
                fontSize={{
                  base: "12px",
                  md: "16px",
                  lg: "20px",
                  xl: "25px",
                  "2xl": "30px",
                }}
                fontWeight={{ base: "bold", "2xl": "bold" }}
                fontFamily="Montserrat"
                lineHeight="125%"
                color="#5c00b3"
                mb="10px"
              >
                Founders Friday
              </Heading>
              <Heading
                w={{ base: "100%", lg: "80%" }}
                fontSize={{
                  base: "35px",
                  md: "40px",
                  lg: "45px",
                  xl: "50px",
                  "2xl": "55px",
                }}
                fontWeight={{ base: "bold", "2xl": "bold" }}
                fontFamily="Montserrat"
                lineHeight="125%"
              >
                What Happens At Founders Friday
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
              fontWeight={{ base: "400", "2xl": "400" }}
              fontFamily="Montserrat"
              lineHeight="120%"
              color="#4c4452"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
              dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
              suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
              turpis. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </Text>
            <Button
              p={{ base: "20px", lg: "30px 20px" }}
              bg="#9524ff"
              color="#fff"
              fontSize={{
                base: "15px",
                md: "15px",
                lg: "17px",
                xl: "20px",
                "2xl": "24px",
              }}
              fontWeight={{ base: "500", "2xl": "500" }}
              fontFamily="Montserrat"
              lineHeight="120%"
              w="fit"
              borderRadius="10px"
              cursor="pointer"
            >
              Learn more
              <Image src={arrowRight} />
            </Button>
          </Box>

          <Box
            className="happen-inner-img"
            w={{ base: "100%", lg: "45%", xl: "40%" }}
            pos="relative"
            zIndex="2"
            display="flex"
            justifyContent={{ base: "center", lg: "initial" }}
          >
            <Image src={sideImg} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Happen;
