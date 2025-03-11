import React, { useEffect } from "react";
import styles from "./TenKFinder.module.css";
import { CompanyTenK } from "../../company";
import { getTenK } from "../../api";
import TenKFinderItem from "./TenKFinderItem/TenKFinderItem";
import Spinner from "../Spinner/Spinner";

interface Props {
  ticker: string;
}

const TenKFinder = ({ ticker }: Props) => {
  const [companyData, setCompanyData] = React.useState<CompanyTenK[]>([]);
  useEffect(() => {
    const getCompanyTenK = async () => {
      const result = await getTenK(ticker);
      if (typeof result === "string") {
        console.log("Server error");
      } else if (!result) {
        console.log("No data found");
      } else {
        setCompanyData(result?.data);
      }
    };
    getCompanyTenK();
  }, []);
  return (
    <div className="inline-flex rounded-md shadow-sm m-4">
      {companyData?.length > 0 ? (
        companyData
          ?.slice(0, 5)
          .map((tenK) => <TenKFinderItem key={tenK.fillingDate} tenK={tenK} />)
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default TenKFinder;
