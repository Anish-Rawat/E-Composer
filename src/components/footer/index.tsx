import { Box, Typography, Grid, Link } from "@mui/material";
import Newsletter from "./components/Newsletter";
import FooterSection from "./components/FooterSection";
import { footerMockData } from "../../utils/mockData";

const Footer = () => {
  const { companyInfo, newsletter, sections, paymentMethods } = footerMockData;

  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        padding: { xs: "40px 10px", md: "40px 100px" },
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent={{ xs: "flex-start", md: "space-between" }} 
        alignItems="flex-start"
        wrap="wrap"
      >
        <Grid item xs={12} md={4}>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
            {companyInfo.name}
            <span style={{ color: "#3bb300" }}>.</span>
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Email:{" "}
            <Link href={`mailto:${companyInfo.email}`}>
              {companyInfo.email}
            </Link>
          </Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Phone:{" "}
            <Link href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</Link>
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            {newsletter.message}
          </Typography>
          <Newsletter />
        </Grid>

        {sections?.map((section, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6} 
            md={2} 
            sx={{ textAlign: { xs: "left", md: "center" } }} 
          >
            <FooterSection title={section?.title} links={section?.links} />
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #e0e0e0",
          paddingTop: "20px",
          marginTop: "40px",
          flexDirection: { xs: "column", md: "row" }, 
        }}
      >
        <Typography variant="body2" sx={{ mb: { xs: 2, md: 0 } }}>
          © 2024 EComposer Store. All Rights Reserved.
        </Typography>

        <Box display="flex" gap={2}>
          <img src={paymentMethods.imgSrc} alt="Payment Methods" height={30} />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
