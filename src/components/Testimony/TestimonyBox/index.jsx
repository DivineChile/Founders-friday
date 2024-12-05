import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";
import SliderBtns from "../SliderBtns";
import "./style.css";

const TestimonyBox = ({ testimonies }) => {
  return (
    <Box>
      <Swiper
        modules={[Autoplay]}
        loop
        slidesPerView={3}
        spaceBetween={50}
        className="mySwiper"
      >
        <Box>
          <SliderBtns />
        </Box>
        {testimonies.map((testimony, i) => {
          return (
            <SwiperSlide key={i} className="swiper-slide">
              <VStack>
                <Box border="4.08px solid #8300ff" p="15px" borderRadius="full">
                  <Image src={testimony.img} />
                </Box>

                <Heading
                  fontSize={{
                    base: "20px",
                    md: "20px",
                    lg: "24px",
                    xl: "28px",
                    "2xl": "30px",
                  }}
                  fontWeight={{ base: "600", "2xl": "600" }}
                  fontFamily="Montserrat"
                  lineHeight="125%"
                >
                  {testimony.name}
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
                  textAlign="center"
                >
                  {testimony.text}
                </Text>
              </VStack>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default TestimonyBox;
