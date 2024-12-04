import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  For,
  Image,
  Link,
  List,
} from "@chakra-ui/react";

import logo from "../../assets/navbarContent/logo.svg";
import arrowRight from "../../assets/navbarContent/arrowRight.svg";
import arrowLeft from "../../assets/navbarContent/arrowLeft.svg";
import barIcon from "../../assets/navbarContent/barIcon.svg";
import menuIcon from "../../assets/navbarContent/menuIcon.svg";

import "./style.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleSetActive = (index) => {
    setActiveLink(index);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isNavOpen]);

  return (
    <Box
      className="navbar"
      id="home"
      h={{ base: "100px", sm: "115px", "2xl": "125px" }}
      display="flex"
      alignItems="center"
      borderBottom="0.5px solid #75687e"
      pos="relative"
      zIndex="3"
      bg="#fff"
    >
      <Box
        className={`backdrop ${isNavOpen ? "active" : ""}`}
        onClick={toggleNav}
        pos="fixed"
        top="0"
        right="0"
        width="100%"
        height="100%"
        bg="rgba(0,0,0,0.6)"
        zIndex="10"
        opacity="0"
        visibility="hidden"
        transition="opacity 0.35s ease, visibility 0.35s ease"
      ></Box>
      <Container>
        <Box
          className="navbar-inner"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            className="logo"
            w={{ base: "190px", sm: "250px", xl: "300px", "2xl": "332.14px" }}
            h={{ base: "70px", xl: "80px", "2xl": "80.63px" }}
            display="flex"
            alignItems="center"
          >
            <Link href="#home">
              <Image src={logo} alt="Logo" />
            </Link>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            gap={{ base: "", sm: "40px", "2xl": "50px" }}
          >
            <Box
              className="nav-links"
              pos={{ base: "fixed", lg: "initial" }}
              top="0"
              p={{ base: "20px 20px", lg: "0" }}
              right={
                !isNavOpen
                  ? { base: "-1000px", lg: "initial" }
                  : { base: "0", lg: "initial" }
              }
              opacity={
                !isNavOpen
                  ? { base: "0", lg: "initial" }
                  : { base: "1", lg: "initial" }
              }
              w={{
                base: "50%",
                md: "40%",
                lg: "initial",
              }}
              h={{ base: "100vh", lg: "initial" }}
              bg={!isNavOpen ? "none" : "#fff"}
              zIndex={{ base: "9999", lg: "initial" }}
              boxShadow={{
                base: "0 10px 10px  rgba(0,0,0,0.25)",
                lg: "none",
              }}
              transition={{
                base: "all ease 0.35s",
                md: "all ease 0.5s",
              }}
            >
              <Box
                h="40px"
                w="40px"
                border="0.5px solid var(--border-color)"
                onClick={toggleNav}
                cursor="pointer"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="8px"
                hideFrom="lg"
              >
                <Image src={arrowLeft} h="100%" w="100%" />
              </Box>
              <List.Root
                display="flex"
                flexDir={{ base: "column", lg: "row" }}
                listStyle="none"
                gap="25px"
                py={{ base: "40px", lg: "0" }}
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
                      <List.Item
                        borderBottom={{
                          base: "0.5px solid #75687e",
                          lg: "none",
                        }}
                        textAlign={{ base: "right", lg: "initial" }}
                      >
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

            <Box
              className="register"
              display="flex"
              gap="20px"
              alignItems="center"
            >
              <Button
                borderRadius="20px"
                w={{ base: "102px", lg: "157px", "2xl": "197px" }}
                h={{ base: "40px", lg: "46px", "2xl": "56px" }}
                color="var(--border-color)"
                fontSize={{
                  base: "12px",
                  md: "13px",
                  lg: "14px",
                  xl: "20px",
                  "2xl": "24px",
                }}
                bg="none"
                fontWeight="500"
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="2px solid var(--border-color)"
              >
                Register
                <Image src={arrowRight} />
              </Button>

              <Box
                border="0.5px solid var(--border-color)"
                h="40px"
                w="40px"
                onClick={toggleNav}
                cursor="pointer"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="8px"
                hideFrom="lg"
              >
                <Image src={barIcon} h="100%" w="100%" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
