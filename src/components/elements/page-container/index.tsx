import { Box, Container, Paper } from "@mui/material";

interface PageContainerProps {
  children: JSX.Element;
}

const PageContainer = ({ children }: PageContainerProps): JSX.Element => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgb(243, 246, 249)",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          height: "100%",
        }}
      >
        <Paper
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {children}
        </Paper>
      </Container>
    </Box>
  );
};

export default PageContainer;
