import { Box, Container, Heading } from "@chakra-ui/react";
import FaqAccordion from "./FaqAccordion";

const FAQ = () => {
  const faqOne = [
    {
      value: "1",
      heading: "Lorem ipsum dolor sit amet, consectetur adi elit.",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo rem similique accusantium culpa quam modi, architecto iste dolore facilis veritatis.",
    },
    {
      value: "2",
      heading: "Lorem ipsum dolor sit amet, consectetur adi elit.",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo rem similique accusantium culpa quam modi, architecto iste dolore facilis veritatis.",
    },
    {
      value: "3",
      heading: "Lorem ipsum dolor sit amet, consectetur adi elit.",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo rem similique accusantium culpa quam modi, architecto iste dolore facilis veritatis.",
    },
  ];

  const faqTwo = [
    {
      value: "1",
      heading: "Lorem ipsum dolor sit amet, consectetur adi elit.",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo rem similique accusantium culpa quam modi, architecto iste dolore facilis veritatis.",
    },
    {
      value: "2",
      heading: "Lorem ipsum dolor sit amet, consectetur adi elit.",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo rem similique accusantium culpa quam modi, architecto iste dolore facilis veritatis.",
    },
    {
      value: "3",
      heading: "Lorem ipsum dolor sit amet, consectetur adi elit.",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo rem similique accusantium culpa quam modi, architecto iste dolore facilis veritatis.",
    },
  ];
  return (
    <Box className="faq">
      <Container>
        <Box
          className="faq-inner"
          display="flex"
          flexDir="column"
          gap="20px"
          py={{ base: "40px", lg: "80px" }}
        >
          <Box className="faq-inner-head">
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
            >
              FAQs
            </Heading>
          </Box>
          <Box className="faq-inner-body">
            <FaqAccordion dataOne={faqOne} dataTwo={faqTwo} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;
