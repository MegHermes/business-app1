import Card from "@mui/material/Card";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import Bill from "layouts/billing/components/Bill";

function BillingInformation() {
  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Billing Information
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill name="Jeff Besos" company="Amazon" email="contact@amazon.com" vat="FRB1235476" />
          <Bill name="Elon Musk" company="Tesla" email="contact@tesla.com" vat="FRB1235476" />
          <Bill
            name="Steve Jobs"
            company="Apple"
            email="contact@apple.com"
            vat="FRB1235476"
            noGutter
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BillingInformation;
