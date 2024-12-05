import { useState } from "react";

import {
  Box,
  Container,
  Heading,
  Image,
  Button,
  Link,
  Flex,
  For,
  List,
} from "@chakra-ui/react";
import footerLogo from "../../assets/footerContent/footerLogo.svg";
import chevronRight from "../../assets/footerContent/chevronRight.svg";
import facebookIcon from "../../assets/footerContent/socials/facebookIcon.svg";
import instagramIcon from "../../assets/footerContent/socials/instagramIcon.svg";
import xIcon from "../../assets/footerContent/socials/xIcon.svg";

const Footer = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleSetActive = (index) => {
    setActiveLink(index);
  };
  return (
    <Box className="footer" borderTop="0.5px solid #75687e">
      <Container>
        <Box className="footer-inner" display="flex" flexDir="column">
          <Box
            className="footer-top"
            display="flex"
            flexDir="column"
            py={{ base: "20px", lg: "20px" }}
          >
            <Box className="footer-top-logo">
              <Link href="#home" _hover={{ textDecor: "none" }}>
                <Image
                  src={footerLogo}
                  w={{
                    base: "170px",
                    md: "175px",
                    xl: "180px",
                    "2xl": "204px",
                  }}
                />
              </Link>
            </Box>

            <Box
              w={{ base: "100%", lg: "90%", xl: "60%" }}
              display="flex"
              flexDir="column"
              gap="20px"
              alignItems="center"
              margin="40px auto"
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
                Want To Be A Part Of Abuja’s Biggest Tech Community?
              </Heading>
              <Button
                py={{ base: "30px", lg: "35px" }}
                px={{ base: "20px", lg: "20px" }}
                w="fit-content"
                borderRadius="40px"
                border="2px solid var(--border-color)"
                bg="none"
                color="var(--border-color)"
                fontSize={{
                  base: "15px",
                  md: "15px",
                  lg: "20px",
                  xl: "24px",
                  "2xl": "28px",
                }}
                fontWeight={{ base: "400", "2xl": "400" }}
                fontFamily="Montserrat"
                lineHeight="120%"
              >
                Register For Our Next Event
                <Image src={chevronRight} />
              </Button>
            </Box>
          </Box>

          <Box
            className="footer-bottom"
            py="20px"
            display="flex"
            justifyContent={{ base: "center", lg: "space-between" }}
            alignItems={{ base: "center", lg: "center" }}
            flexDir={{ base: "column", lg: "row" }}
            gap={{ base: "20px", lg: "0" }}
            borderTop="1px solid #b86dff"
          >
            <Flex gap="20px">
              <For each={[facebookIcon, instagramIcon, xIcon]}>
                {(social, i) => {
                  return (
                    <Link href="#home" _hover={{ textDecor: "none" }} key={i}>
                      <Image src={social} />
                    </Link>
                  );
                }}
              </For>
            </Flex>

            <Box className="navlinks">
              <List.Root
                display="flex"
                flexDir="row"
                listStyle="none"
                gap="25px"
              >
                <For
                  each={[
                    {
                      label: "Home",
                      to: "#home",
                    },
                    {
                      label: "About Us",
                      to: "#about",
                    },
                    {
                      label: "Gallery",
                      to: "#gallery",
                    },
                    {
                      label: "Contact Us",
                      to: "#contact",
                    },
                  ]}
                >
                  {(link, i) => {
                    return (
                      <List.Item>
                        <Link
                          color="#000"
                          className={`nav-link ${
                            activeLink === i ? "active" : ""
                          }`}
                          fontSize={{ base: "", xl: "20px", "2xl": "24px" }}
                          fontWeight={{ base: "", xl: "500", "2xl": "500" }}
                          lineHeight="120%"
                          transition="all ease 0.25s"
                          _hover={{ textDecor: "none" }}
                          onClick={() => handleSetActive(i)}
                          href={link.to}
                          key={i}
                        >
                          {link.label}
                        </Link>
                      </List.Item>
                    );
                  }}
                </For>
              </List.Root>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
