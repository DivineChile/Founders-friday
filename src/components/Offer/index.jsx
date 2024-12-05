import { Box, Container, Heading } from "@chakra-ui/react";
import OfferBox from "./OfferBox";
import plusIcon from "../../assets/offerContent/plusIcon.svg";

const Offer = () => {
  const offers = [
    {
      heading: "Monthly Meetups",
      text: "Our cornerstone event, held on the last Friday of every month, featuring keynote speakers, panel discussions, and ample networking opportunities.",
      icon: plusIcon,
    },
    {
      heading: "Diverse Network",
      text: "Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts.",
      icon: plusIcon,
    },
    {
      heading: "Knowledge Sharing",
      text: "Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts.",
      icon: plusIcon,
    },
    {
      heading: "Collaboration   Opportunities",
      text: "Find potential co-founders, mentors, or partners for your next big venture.",
      icon: plusIcon,
    },
    {
      heading: "Community Support",
      text: "Be part of a supportive ecosystem that celebrates successes and provides guidance through challenges.",
      icon: plusIcon,
    },
  ];

  return (
    <Box className="offer">
      <Container>
        <Box className="offer-inner" display="flex" flexDir="column" gap="20px">
          <Box className="offer-inner-head" textAlign="center">
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
              What we Offer
            </Heading>
          </Box>

          <Box className="offer-inner-body" pos="relative" zIndex="2">
            <OfferBox offers={offers} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Offer;
