import { Box, Button, Container, Heading, Image, Text } from "@chakra-ui/react";

import bg from "../../assets/ctaContent/ctaImg.png";
import ctaSideImg from "../../assets/ctaContent/logoLarge.png";
import arrowRight from "../../assets/ctaContent/arrowRight.svg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";

import "./style.css";

const CTA = () => {
  const head = [
    {
      text: "Abuja",
    },
    {
      text: "Kaduna",
    },
    {
      text: "Kano",
    },
  ];
  return (
    <Box
      className="cta"
      bg={`url(${bg})`}
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
      py={{ base: "40px", lg: "80px" }}
    >
      <Container>
        <Box
          className="cta-inner"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            className="cta-inner-content"
            w={{ base: "100%", lg: "60%" }}
            display="flex"
            flexDir="column"
            gap="10px"
          >
            <Heading
              fontSize={{
                base: "20px",
                md: "20px",
                lg: "30px",
                xl: "40px",
                "2xl": "50px",
              }}
              fontWeight={{ base: "bold", "2xl": "bold" }}
              fontFamily="Montserrat"
              lineHeight="125%"
              color="#ebe9ed"
            >
              Founders Friday is coming to
            </Heading>
            <Box>
              <Swiper
                direction={"vertical"}
                modules={[Autoplay]}
                loop
                autoplay={{ delay: 300, disableOnInteraction: false }}
                className="mySwiper"
              >
                {head.map((head, index) => {
                  return (
                    <SwiperSlide className="swiper-slide" key={index}>
                      <Box h={{ base: "", xl: "100px", "2xl": "122px" }}>
                        <Heading
                          color="var(--border-color)"
                          fontSize={{
                            base: "54px",
                            md: "66px",
                            lg: "88px",
                            xl: "100px",
                            "2xl": "128px",
                          }}
                          fontWeight={{ base: "bold", "2xl": "bold" }}
                          fontFamily="Montserrat"
                          lineHeight="125%"
                        >
                          {head.text}
                        </Heading>
                      </Box>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
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
              my={{ base: "0", lg: "20px", xl: "20px" }}
              color="#ebe9ed"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
              dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
              suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
              turpis. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. 
            </Text>

            <Button
              p={{ base: "20px 30px", lg: "30px 50px" }}
              bg="transparent"
              border={"2px solid #a649ff"}
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
              Register
              <Image src={arrowRight} />
            </Button>
          </Box>
          <Box className="cta-inner-img" w="30%" hideBelow="lg">
            <Image src={ctaSideImg} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CTA;
