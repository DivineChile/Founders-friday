import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import plusIcon from "../../../assets/offerContent/plusIcon.svg";
const OfferBox = ({ offers }) => {
  return (
    <Box
      className="offer-box"
      display="flex"
      flexDir="column"
      gap={{ base: "20px", lg: "25px", xl: "30px", "2xl": "35px" }}
    >
      {offers.map((offer, i) => {
        return (
          <Flex
            justifyContent="space-between"
            alignItems={{ base: "start", lg: "center" }}
            borderBottom="1px solid #3c3641"
            flexDir={{ base: "column", lg: "row" }}
            py={{ base: "20px", xl: "25px", "2xl": "30px" }}
            key={i}
          >
            <Box
              display="flex"
              gap={{ base: "20px", xl: "30px", "2xl": "50px" }}
              alignItems="center"
            >
              <Box
                h={{ base: "15px", lg: "20px", "2xl": "24.8px" }}
                w={{ base: "15px", lg: "20px", "2xl": "24.8px" }}
                bg="#8300ff"
                borderRadius="100%"
              ></Box>

              <Heading
                fontSize={{
                  base: "20px",
                  md: "25px",
                  lg: "30px",
                  xl: "35px",
                  "2xl": "40px",
                }}
                w={{ base: "100%", md: "90%", lg: "80%", xl: "90%" }}
                fontWeight={{ base: "600", "2xl": "600" }}
                fontFamily="Montserrat"
                lineHeight="125%"
              >
                {offer.heading}
              </Heading>
            </Box>

            <Text
              fontSize={{
                base: "10px",
                md: "10px",
                lg: "12px",
                xl: "14px",
                "2xl": "16px",
              }}
              fontWeight={{ base: "600", "2xl": "600" }}
              fontFamily="Montserrat"
              lineHeight={{ base: "140%", lg: "150%", "2xl": "160%" }}
              color="#75687e"
              w={{ base: "100%", lg: "50%" }}
            >
              {offer.text}
            </Text>

            <Box
              h={{ base: "20px", lg: "25px", "2xl": "40px" }}
              w={{ base: "100%", lg: "25px", "2xl": "40px" }}
              display="flex"
              justifyContent={{ base: "end", lg: "initial" }}
            >
              <Image
                src={offer.icon}
                h="100%"
                w={{ base: "20px", lg: "100%" }}
              />
            </Box>
          </Flex>
        );
      })}
    </Box>
  );
};

export default OfferBox;
