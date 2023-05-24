import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const LinkButton = ({ children, ...props }) => 
  <Button component={Link} color="secondary" to="/posts" {...props}>
    {children}
  </Button>

export { LinkButton };
