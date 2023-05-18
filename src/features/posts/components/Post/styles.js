import styled from "@emotion/styled";
import { Paper, Typography } from "@mui/material";

const Wrapper = styled((props) => <Paper {...props} elevation={1} />)`
  border-radius: 8px;
  padding: 1rem;
`;

const Title = styled((props) => <Typography {...props} variant="h2" />)`
  margin-bottom: 8px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;


const Body = styled((props) => <Typography {...props} variant="body" />)`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export { Wrapper, Title, Body };
