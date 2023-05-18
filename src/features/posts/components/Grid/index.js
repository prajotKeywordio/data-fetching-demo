import styled from "@emotion/styled";
import { Box } from "@mui/material";

const Grid = styled(Box)`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export { Grid };
