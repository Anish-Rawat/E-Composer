import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import ActionButton from "../../../components/ActionButton";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

type ActionCardProps = {
  icon: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  onClick: () => void;
};

const ActionCard: React.FC<ActionCardProps> = ({
  icon,
  title="",
  subtitle="",
  buttonLabel="",
  onClick,
}) => {
  return (
    <Card
      sx={{
        width: {
          xs: 300,
          sm: 350,
        },
        height: {
          xs: "auto",
          sm: "auto",
        },
        padding: {
          xs: "8px 16px",
          sm: "10px 20px",
        },
        margin: "0 16px",
      }}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "5px",
        }}
      >
        <Box display="flex" justifyContent="center">
          <Box
            component="span"
            sx={{
              fontSize: { xs: "40px", sm: "50px", md: "60px" },
              img: {
                width: "70%",
                height: "70%",
                objectFit: "contain",
              },
            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img src={icon} alt={title} />
          </Box>
        </Box>
        <Typography variant="h6" textAlign="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="body2"
          textAlign="center"
          color="text.secondary"
          gutterBottom
          pb="8px"
        >
          {subtitle}
        </Typography>
        <ActionButton
          text={buttonLabel}
          icon={<ArrowRightAltIcon />}
          onClick={onClick}
        />
      </CardContent>
    </Card>
  );
};

export default ActionCard;
