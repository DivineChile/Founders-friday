import {
  Box,
  Container,
  Button,
  Image,
  For,
  Grid,
  GridItem,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

import arrowRight from "../../assets/sponsorContent/arrow-right.svg";

const Sponsor = () => {
  return (
    <Box className="sponsor">
      <Container>
        <Box
          className="sponsor-inner"
          display="flex !important"
          flexDir="column"
          gap="40px"
          py={{ base: "40px", lg: "80px" }}
        >
          <Box
            className="sponsor-inner-head"
            display="flex"
            justifyContent="space-between"
            flexDir={{ base: "column", lg: "row" }}
            gap={{ base: "20px", lg: "0" }}
          >
            <Box w={{ base: "100%", lg: "50%", xl: "55%" }}>
              <Text
                fontSize={{
                  base: "12px",
                  md: "16px",
                  lg: "20px",
                  xl: "25px",
                  "2xl": "30px",
                }}
                fontWeight={{ base: "bold", "2xl": "bold" }}
                fontFamily="Montserrat"
                lineHeight="125%"
                color="#5c00b3"
                mb="10px"
              >
                Sponsor The Next Friday
              </Text>
              <Heading
                w={{ base: "100%", lg: "70%" }}
                fontSize={{
                  base: "35px",
                  md: "40px",
                  lg: "45px",
                  xl: "50px",
                  "2xl": "55px",
                }}
                fontWeight={{ base: "bold", "2xl": "bold" }}
                fontFamily="Montserrat"
                lineHeight="125%"
              >
                Why Sponsor Founders Friday?
              </Heading>
            </Box>

            <Box
              textAlign={{ base: "start", lg: "end" }}
              w={{ base: "100%", lg: "50%", xl: "45%" }}
            >
              <Text
                fontSize={{
                  base: "12px",
                  md: "12px",
                  lg: "12px",
                  xl: "14px",
                  "2xl": "16px",
                }}
                fontWeight={{ base: "400", "2xl": "400" }}
                fontFamily="Montserrat"
                lineHeight={{ base: "140%", lg: "150%", "2xl": "160%" }}
                color="#4c4452"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
                rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
                dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan
                leo suscipit id. Maecenas ut ante quis quam lobortis consequat
                eu id turpis. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas.
              </Text>
            </Box>
          </Box>
          <Box
            w={{ base: "100%", sm: "80%", xl: "90%" }}
            m="auto"
            display="flex"
            justifyContent="space-between"
            gap={{ base: "30px", lg: "0" }}
            flexDir={{ base: "column", lg: "row" }}
          >
            <Box
              className="sponsor-details"
              p={{ base: "20px", md: "40px", xl: "20px" }}
              borderRadius="15px"
              border="2px solid #ca92ff"
              w={{ base: "100%", lg: "45%" }}
              shadow="xl"
            >
              <Grid
                templateColumns="repeat(2, 1fr)"
                gap={{ base: "20px", md: "40px", xl: "20px" }}
              >
                <For
                  each={[
                    {
                      heading: "Network Opportunities",
                      text: "Connect with industry leaders, founders, and potential partners.",
                      bg: "#dcb6ff",
                    },
                    {
                      heading: "Community Impact",
                      text: "Support the growth and development of the startup ecosystem.",
                      bg: "#eddbff",
                    },
                    {
                      heading: "Brand Association",
                      text: "Align your brand with innovation and entrepreneurial success.",
                      bg: "#eddbff",
                    },
                    {
                      heading: "Visibility",
                      text: "Gain exposure to a targeted audience of young professionals and entrepreneurs.",
                      bg: "#dcb6ff",
                    },
                  ]}
                >
                  {(item, i) => {
                    return (
                      <GridItem key={i}>
                        <Box
                          display="flex"
                          flexDir="column"
                          bg={item.bg}
                          p="15px"
                          borderRadius="100%"
                          border="2px solid #a649ff"
                          alignItems="center"
                          justifyContent="center"
                          textAlign="center"
                          h={{ base: "150px", lg: "200px", "2xl": "250px" }}
                          gap="5px"
                        >
                          <Heading
                            fontSize={{
                              base: "10px",
                              md: "13px",
                              lg: "15px",
                              xl: "20px",
                              "2xl": "24px",
                            }}
                            fontWeight={{ base: "bold", "2xl": "bold" }}
                            fontFamily="Montserrat"
                            lineHeight="120%"
                          >
                            {item.heading}
                          </Heading>
                          <Text
                            fontSize={{
                              base: "10px",
                              md: "12px",
                              lg: "14px",
                              xl: "16px",
                              "2xl": "18px",
                            }}
                            fontWeight={{ base: "400", "2xl": "400" }}
                            fontFamily="Montserrat"
                            lineHeight="120%"
                          >
                            {item.text}
                          </Text>
                        </Box>
                      </GridItem>
                    );
                  }}
                </For>
              </Grid>
            </Box>

            <Box w={{ base: "100%", lg: "45%" }}>
              <VStack alignItems="start">
                <Heading
                  fontSize={{
                    base: "20px",
                    lg: "20px",
                    xl: "24px",
                    "2xl": "28px",
                  }}
                  fontWeight={{ base: "bold", "2xl": "bold" }}
                  fontFamily="Montserrat"
                  lineHeight={{ base: "100%", lg: "100%", "2xl": "120%" }}
                >
                  How To Sponsor
                </Heading>
                <Text
                  color="#605668"
                  fontSize={{
                    base: "15px",
                    md: "15px",
                    lg: "15px",
                    xl: "20px",
                    "2xl": "24px",
                  }}
                  fontWeight={{ base: "400", "2xl": "400" }}
                  fontFamily="Montserrat"
                  lineHeight="120%"
                  fontStyle="italic"
                >
                  Ready to Make an Impact?
                </Text>
                <Text
                  fontSize={{
                    base: "12px",
                    md: "12px",
                    lg: "14px",
                    xl: "16px",
                    "2xl": "18px",
                  }}
                  fontWeight={{ base: "400", "2xl": "400" }}
                  fontFamily="Montserrat"
                  lineHeight="120%"
                  color="#2c2830"
                >
                  Fill out the form below or contact us at [contact email/phone
                  number] to learn more about how you can sponsor the next
                  Founders Friday
                </Text>
              </VStack>

              <form>
                <Grid templateColumns="repeat(2, 1fr)" mt="30px" gap="20px">
                  <For
                    each={[
                      {
                        label: "Name",
                        placeholder: "Full name",
                        type: "text",
                      },
                      {
                        label: "Company (optional)",
                        placeholder: "Company name",
                        type: "text",
                      },
                      {
                        label: "Email",
                        placeholder: "Email address",
                        type: "email",
                      },
                      {
                        label: "Phone",
                        placeholder: "Phone number",
                        type: "number",
                      },
                    ]}
                  >
                    {(field, i) => {
                      return (
                        <GridItem
                          display="flex"
                          flexDir="column"
                          gap="5px"
                          key={i}
                        >
                          <Text
                            as="label"
                            fontSize={{
                              base: "10px",
                              md: "12px",
                              lg: "14px",
                              xl: "16px",
                              "2xl": "18px",
                            }}
                            fontWeight={{ base: "600", "2xl": "600" }}
                            fontFamily="Montserrat"
                            lineHeight="120%"
                          >
                            {field.label}
                          </Text>
                          <Input
                            placeholder={field.placeholder}
                            border="1px solid #121212"
                            borderRadius="10px"
                            py={{ base: "20px", lg: "25px" }}
                            type={field.type}
                          />
                        </GridItem>
                      );
                    }}
                  </For>
                  <Button
                    type="submit"
                    p={{ base: "20px", lg: "30px 20px" }}
                    bg="#9524ff"
                    color="#fff"
                    fontSize={{
                      base: "15px",
                      md: "15px",
                      lg: "17px",
                      xl: "20px",
                      "2xl": "24px",
                    }}
                    fontWeight={{ base: "500", "2xl": "500" }}
                    fontFamily="Montserrat"
                    lineHeight="120%"
                    w="fit"
                    borderRadius="10px"
                    cursor="pointer"
                  >
                    Sponsor
                    <Image src={arrowRight} />
                  </Button>
                </Grid>
              </form>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Sponsor;
