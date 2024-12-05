import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemIndicator,
  AccordionItemTrigger,
  AccordionRoot,
  Box,
  Grid,
  Image,
} from "@chakra-ui/react";

import accordionIcon from "../../../assets/faqContent/accordionIcon.svg";
const FaqAccordion = ({ dataOne, dataTwo }) => {
  return (
    <Grid
      templateColumns={{ base: "100%", lg: "repeat(2, 1fr)" }}
      gap={{ base: "20px", lg: "50px", xl: "80px" }}
      w={{ base: "100%", lg: "90%", xl: "80%" }}
      m="0 auto"
    >
      <Box>
        <AccordionRoot
          collapsible
          display="flex"
          flexDir="column"
          gap="30px"
          defaultValue={["1"]}
        >
          {dataOne.map((item, i) => {
            return (
              <AccordionItem border="none" key={i}>
                <AccordionItemTrigger
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  textAlign="start"
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
                  color="#340066"
                  cursor="pointer"
                >
                  {item.heading}
                  <AccordionItemIndicator as={Image} src={accordionIcon} />
                </AccordionItemTrigger>
                <AccordionItemContent
                  fontSize={{
                    base: "14px",
                    md: "14px",
                    lg: "16px",
                    xl: "18px",
                    "2xl": "20px",
                  }}
                  fontWeight={{ base: "400", "2xl": "400" }}
                  fontFamily="Montserrat"
                  lineHeight="120%"
                  color="#340066"
                  w="100%"
                >
                  {item.desc}
                </AccordionItemContent>
              </AccordionItem>
            );
          })}
        </AccordionRoot>
      </Box>

      {/* Second Accordion */}
      <Box>
        <AccordionRoot
          collapsible
          display="flex"
          flexDir="column"
          gap="30px"
          defaultValue={["1"]}
        >
          {dataTwo.map((item, i) => {
            return (
              <AccordionItem border="none" key={i}>
                <AccordionItemTrigger
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  textAlign="start"
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
                  color="#340066"
                  cursor="pointer"
                >
                  {item.heading}
                  <AccordionItemIndicator as={Image} src={accordionIcon} />
                </AccordionItemTrigger>
                <AccordionItemContent
                  fontSize={{
                    base: "14px",
                    md: "14px",
                    lg: "16px",
                    xl: "18px",
                    "2xl": "20px",
                  }}
                  fontWeight={{ base: "400", "2xl": "400" }}
                  fontFamily="Montserrat"
                  lineHeight="120%"
                  color="#340066"
                  w="100%"
                >
                  {item.desc}
                </AccordionItemContent>
              </AccordionItem>
            );
          })}
        </AccordionRoot>
      </Box>
    </Grid>
  );
};

export default FaqAccordion;
