import { Box, Container, Paper } from "@mui/material";

interface PageContainerProps {
  children: React.ReactNode;
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
            flexDirection: "column",
            alignItems: "center",
            padding: "8rem .5rem .5rem .5rem",
          }}
        >
          {children}
        </Paper>
      </Container>
    </Box>
  );
};

export default PageContainer;