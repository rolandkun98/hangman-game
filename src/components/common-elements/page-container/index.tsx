import { Box, Container, Paper, SxProps } from "@mui/material";

interface PageContainerProps {
  children: React.ReactNode;
  sx?: SxProps;
}

const PageContainer = ({ children, sx }: PageContainerProps): JSX.Element => {
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
          height: "100vh",
        }}
      >
        <Paper
          sx={{
            height: "100vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "8rem .5rem .5rem .5rem",
            overflow: "scroll",
            ...sx,
          }}
        >
          {children}
        </Paper>
      </Container>
    </Box>
  );
};

export default PageContainer;
