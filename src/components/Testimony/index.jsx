import { Box, Container, Heading, Text } from "@chakra-ui/react";
import TestimonyBox from "./TestimonyBox";

import testimonyImg from "../../assets/testimonyContent/testimonyImg.png";

const Testimony = () => {
  const testimoniesData = [
    {
      img: testimonyImg,
      name: "Mr Belba Ngoy",
      text: "Always a remarkable experience for my team and myself",
    },
    {
      img: testimonyImg,
      name: "Mr Belba Ngoy",
      text: "Always a remarkable experience for my team and myself",
    },
    {
      img: testimonyImg,
      name: "Mr Belba Ngoy",
      text: "Always a remarkable experience for my team and myself",
    },
    {
      img: testimonyImg,
      name: "Mr Belba Ngoy",
      text: "Always a remarkable experience for my team and myself",
    },
    {
      img: testimonyImg,
      name: "Mr Belba Ngoy",
      text: "Always a remarkable experience for my team and myself",
    },
    {
      img: testimonyImg,
      name: "Mr Belba Ngoy",
      text: "Always a remarkable experience for my team and myself",
    },
  ];
  return (
    <Box className="testimony">
      <Container>
        <Box
          className="testimony-inner"
          py={{ base: "40px", lg: "80px" }}
          display="flex"
          flexDir="column"
          gap="0"
        >
          <Box
            className="testimony-inner-head"
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
              What Do Our Attendees Have To Say?
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
              Well See For Yourself!
            </Text>
          </Box>

          <Box className="testimony-inner-body">
            <TestimonyBox testimonies={testimoniesData} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimony;
