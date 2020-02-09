/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Flex } from "theme-ui";
import { Global } from "@emotion/core";
import Logo from "@offcourse/atoms/src/components/Logo";

export const logoStyles = {
  h1: {
    bg: "grayScale.4",
    color: "grayScale.0"
  }
};

const Layout: FunctionComponent = ({ children }) => {
  return (
    <Box
      sx={{
        display: "grid",
        width: "100%",
        height: "100%",
        gridTemplateRows: "8fr 1fr"
      }}
    >
      <Global styles={theme => theme.globals} />
      <Flex sx={{ justifyContent: "center", alignItems: "center" }}>
        {children}
      </Flex>
      <Box sx={{ display: "grid",  p: 4, justifyContent: "end" }}>
        <Logo sx={logoStyles}>Offcourse Studio_</Logo>
      </Box>
    </Box>
  );
};

export default Layout;
