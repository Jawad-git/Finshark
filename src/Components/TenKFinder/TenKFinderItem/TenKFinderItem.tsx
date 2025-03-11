import React from "react";
import styles from "./TenKFinderItem.module.css";
import { CompanyTenK } from "../../../company";
import { Link } from "react-router-dom";

interface Props {
  tenK: CompanyTenK;
}

const TenKFinderItem: React.FC<Props> = ({ tenK }: Props): JSX.Element => {
  const fillingData = new Date(tenK.fillingDate).getFullYear();
  return (
    <Link
      to={tenK.finalLink}
      reloadDocument
      type="button"
      className="inline-flex items-center p-4 text-md text-white bg-lightGreen rounded-md"
    >
      10K - {tenK.symbol} - {fillingData}
    </Link>
  );
};

export default TenKFinderItem;
