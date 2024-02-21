import { Backdrop, CircularProgress } from "@mui/material";

function ProgressCircle(props: { open: boolean }): JSX.Element {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={props.open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default ProgressCircle;
