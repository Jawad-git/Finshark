import React, { useEffect } from "react";
import styles from "./TenKFinder.module.css";
import { CompanyTenK } from "../../company";
import { getTenK } from "../../api";
import TenKFinderItem from "./TenKFinderItem/TenKFinderItem";
import Spinner from "../Spinner/Spinner";
import { toast } from "react-toastify";
import { handleError } from "../../Helpers/ErrorHandler";

interface Props {
  ticker: string;
}

const TenKFinder = ({ ticker }: Props) => {
  const [companyData, setCompanyData] = React.useState<CompanyTenK[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    const getCompanyTenK = async () => {
      if (!ticker) {
        console.log("No ticker provided");
        return;
      }

      try {
        setIsLoading(true);
        console.log(`Fetching 10-K data for ticker: ${ticker}`);
        const result = await getTenK(ticker);

        if (!result) {
          console.log("No result returned from getTenK");
          toast.warning("No data returned from server");
          return;
        }

        if (result?.data) {
          console.log(`Received ${result.data.length} 10-K filings`);
          setCompanyData(result.data);
          toast.success(
            `Successfully loaded ${result.data.length} 10-K filings`
          );
        }
      } catch (error) {
        console.log("Error in TenKFinder:", ticker);
        handleError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getCompanyTenK();
  }, [ticker]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="inline-flex rounded-md shadow-sm m-4">
      {companyData?.length > 0 ? (
        companyData
          .slice(0, 5)
          .map((tenK) => <TenKFinderItem key={tenK.fillingDate} tenK={tenK} />)
      ) : (
        <div>No 10-K filings found for {ticker}</div>
      )}
    </div>
  );
};

export default TenKFinder;
