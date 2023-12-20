import { useBreakpoints } from "@/hooks/use-breakpoints";
import { Box, Container, Paper, SxProps } from "@mui/material";

interface PageContainerProps {
  children: React.ReactNode;
  sx?: SxProps;
}

const PageContainer = ({ children, sx }: PageContainerProps): JSX.Element => {
  const { isAboveSm } = useBreakpoints();
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgb(243, 246, 249)",
        overflow: "scroll",
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
            height: isAboveSm ? "100%" : "auto",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "8rem .5rem .5rem .5rem",
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
