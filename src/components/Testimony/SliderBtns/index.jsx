import { Box, Circle, Image } from "@chakra-ui/react";
import arrowLeft from "../../../assets/testimonyContent/arrow-left.svg";
import arrowRight from "../../../assets/testimonyContent/arrow-right.svg";
import { useSwiper } from "swiper/react";

const SliderBtns = () => {
  const swiper = useSwiper();
  return (
    <Box pos="absolute" right="0" top="0" zIndex="2" display="flex" gap="20px">
      <Circle
        h={{ base: "60px", lg: "70px", xl: "80px", "2xl": "90px" }}
        w={{ base: "60px", lg: "70px", xl: "80px", "2xl": "90px" }}
        _hover={{ opacity: "1" }}
        cursor="pointer"
        transition="all ease 0.25s"
        border="3.05px solid #e2a7f7"
        bg="#fff"
        onClick={() => swiper.slidePrev()}
      >
        <Image src={arrowLeft} />
      </Circle>
      <Circle
        h={{ base: "60px", lg: "70px", xl: "80px", "2xl": "90px" }}
        w={{ base: "60px", lg: "70px", xl: "80px", "2xl": "90px" }}
        _hover={{ opacity: "1" }}
        cursor="pointer"
        transition="all ease 0.25s"
        onClick={() => swiper.slideNext()}
        border="3.05px solid #e2a7f7"
        bg="#fff"
      >
        <Image src={arrowRight} />
      </Circle>
    </Box>
  );
};

export default SliderBtns;
