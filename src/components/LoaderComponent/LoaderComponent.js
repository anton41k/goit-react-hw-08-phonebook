import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import css from "./LoaderComponent.module.css";

function LoaderComponent() {
  return (
    <div className={css.overlay}>
      <Loader type="ThreeDots" color="rgb(184, 121, 5)" height="35" />
    </div>
  );
}

export default LoaderComponent;
