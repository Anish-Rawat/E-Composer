import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faqs } from "../../../utils/mockData";

const FaqSection = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      console.log(event) 
      //  Check
    };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#E0E0FF",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        py: { xs: 5, sm: 5, md: 10 },
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight="bold"
        color="#373737"
        pb="20px"
        gutterBottom
        data-aos="fade-up"
      data-aos-duration="1000"
      >
        Popular Searched Questions
      </Typography>

      <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "16px",
            overflow: "hidden",
            mx: { xs: 2, sm: 2, md: 15 },
          }}
          data-aos="fade-up"
      data-aos-duration="1000"
        >
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                backgroundColor: "white",
                mb: 0,
                border: "none",
                boxShadow: "none",
                "&:not(:last-child)": {
                  borderBottom: "1px solid #ccc",
                },
                "&:before": {
                  display: "none",
                },
                "&:first-of-type": {
                  borderTopLeftRadius: "16px",
                  borderTopRightRadius: "16px",
                },
                "&:last-of-type": {
                  borderBottomLeftRadius: "16px",
                  borderBottomRightRadius: "16px",
                },
                py: { xs: 1, sm: 1, md: 3 },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography variant="h6" fontWeight="bold" color="#737373">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
    </Box>
  );
};

export default FaqSection;
