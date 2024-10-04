import { Box, Grid, Typography } from "@mui/material";
import PageHeader from "./components/PageHeader";
import SearchBar from "./components/SearchBar";
import ActionCard from "./components/ActionCard";
import HelpCard from "./components/HelpCard";
import FaqSection from "./components/FAQSection";
import ContactPlatform from "./components/ContactPlatform";
import Footer from "../../components/footer";
import {
  actionCardData,
  contactChannels,
  footerPageHeaderMockData,
  helpDeskData,
} from "../../utils/mockData";
import { Contact_Us_Header_BG } from "../../utils/iconLinks";

const ContactUs = () => {
  return (
    <Box position="relative" sx={{ overflowX: "hidden" }}>
      <Box
        textAlign="center"
        sx={{
          backgroundImage: `url(${Contact_Us_Header_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          padding: { xs: "3rem 1rem 6rem", sm: "6rem 2rem 10rem" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "30vh",
        }}
      >
        <PageHeader
          title={footerPageHeaderMockData.title}
          subtitle={footerPageHeaderMockData.subtitle}
        />
        <SearchBar />
      </Box>

      <Box
        position="relative"
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        width="100%"
        mb={4}
        gap={2}
        sx={{
          mt: { xs: "-70px", sm: "-100px" },
          zIndex: 1,
          overflowX: "hidden",
        }}
      >
        {actionCardData.map((section, index) => (
          <ActionCard
            key={index}
            icon={section.icon}
            title={section.title}
            subtitle={section.subtitle}
            buttonLabel={section.actionText}
            onClick={() => {}}
          />
        ))}
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        px={{ xs: 1, sm: 2, md: 2 }}
        py={{ xs: 3, sm: 6, md: 2 }}
        width="100%"
        maxWidth="100%"
        overflow="hidden"
      >
        <Typography
          variant="h3"
          fontSize="32px"
          fontWeight="bold"
          pb="20px"
          gutterBottom
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {"Browse our help desk"}
        </Typography>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gap={3}
          width="100%"
          maxWidth="100%"
          overflow="hidden"
        >
          {helpDeskData.map((item, index) => (
            <Box
              key={index}
              flexBasis={{
                xs: "100%",
                sm: "48%",
                md: "30%",
              }}
              display="flex"
              justifyContent="center"
              maxWidth="100%"
            >
              <HelpCard
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                onClick={() => {}}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <FaqSection />

      <Box sx={{ py: "100px", px: "50px", textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{ pb: { xs: "5px", md: "10px" } }}
          gutterBottom
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Any other questions?
        </Typography>
        <Typography
          variant="body1"
          sx={{ pb: { xs: "20px", md: "40px" } }}
          gutterBottom
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          We're here to help. You can contact us: Weekdays: 6am to 6pm PT,
          Weekends: 6am to 6pm PT.
        </Typography>

        <Box
          sx={{
            border: "2px solid #D9D9D9",
            padding: "20px",
            borderRadius: "20px",
          }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Grid container spacing={3} justifyContent="center">
            {contactChannels.map((channel, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={channel.label}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ width: "100%", position: "relative" }}
                >
                  <ContactPlatform
                    label={channel.label}
                    linkText={channel.linkText}
                    href={channel.href}
                    icon={channel.icon}
                  />

                  {index < contactChannels.length - 1 && (
                    <Box
                      sx={{
                        display: { xs: "none", md: "block" },
                        height: "100px",
                        width: "1px",
                        backgroundColor: "#373737",
                        marginLeft: "20px",
                        alignItems: "center",
                      }}
                    />
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default ContactUs;
