import React from "react";
import styles from "./DesignPage.module.css";

import Table from "../../Components/Table/Table";
interface Props {}

const DesignPage = (props: Props) => {
  return (
    <>
      <h1>FinShark Design Page</h1>
      <h2>
        This is FinShark's design page. This is where we will house various
        design aspects of the app
      </h2>
      <Table />
    </>
  );
};

export default DesignPage;
