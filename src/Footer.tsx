import BarChartIcon from "@mui/icons-material/BarChart";
import CategoryIcon from "@mui/icons-material/Category";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaidIcon from "@mui/icons-material/Paid";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import ReceiptIcon from "@mui/icons-material/Receipt";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Categories"
          icon={<PaidIcon />}
          onClick={() => navigate("/")}
        />
        <BottomNavigationAction
          label="Budgets"
          icon={<PriceCheckIcon />}
          onClick={() => navigate("/budgets")}
        />
        <BottomNavigationAction
          label="Transactions"
          icon={<ReceiptIcon />}
          onClick={() => navigate("/transactions")}
        />
        <BottomNavigationAction
          label="Stats"
          icon={<BarChartIcon />}
          onClick={() => navigate("/stats")}
        />
      </BottomNavigation>
    </Paper>
  );
}

export default Footer;
