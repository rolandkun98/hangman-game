import { Box, Container, Paper, SxProps } from "@mui/material";

interface PageContainerProps {
  children: React.ReactNode;
  outterBoxSx?: SxProps;
  paperSx?: SxProps;
}

const PageContainer = ({
  children,
  outterBoxSx,
  paperSx,
}: PageContainerProps): JSX.Element => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgb(243, 246, 249)",
        overflow: "scroll",
        ...outterBoxSx,
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
            ...paperSx,
          }}
        >
          {children}
        </Paper>
      </Container>
    </Box>
  );
};

export default PageContainer;
