import { CircularProgress } from "@material-ui/core";
import useStyle from "./style";

const Spinner = () => {
  const classes = useStyle();

  return (
    <div className={classes.spinner}>
      <CircularProgress />
    </div>
  );
};

export default Spinner;
