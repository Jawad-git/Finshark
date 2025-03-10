import React from "react";
import styles from "./Spinner.module.css";
import { ClipLoader } from "react-spinners";

interface Props {
  isLoading?: boolean;
}

const Spinner = ({ isLoading = true }: Props) => {
  return (
    <div className={styles.spinner} id="loading-spinner">
      <ClipLoader
        color="#36d7b7"
        size={150}
        loading={isLoading}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;
