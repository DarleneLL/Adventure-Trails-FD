import { Button } from "@mui/material";

function CButton({ children }) {
 return (
  <Button
   sx={{ p: 1, my: 2, m: 2 }}
   color="success"
   variant="contained"
   size="small">
   {children}
  </Button>
 );
}

export default CButton;
