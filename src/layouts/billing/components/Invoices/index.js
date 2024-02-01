import Card from "@mui/material/Card";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

import Invoice from "layouts/billing/components/Invoice";

function Invoices() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          Invoices
        </MDTypography>
        <MDButton variant="outlined" color="info" size="small">
          view all
        </MDButton>
      </MDBox>
      <MDBox p={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice date="January, 21, 2024" id="#MS-415646" price="$180" />
          <Invoice date="January, 10, 2024" id="#RV-126749" price="$250" />
          <Invoice date="June, 05, 2023" id="#QW-103578" price="$120" />
          <Invoice date="April, 25, 2023" id="#MS-415646" price="$180" />
          <Invoice date="March, 01, 2023" id="#AR-803481" price="$297" noGutter />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default Invoices;
