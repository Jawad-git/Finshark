import React, { useEffect, useState } from "react";
import styles from "./CompanyPage.module.css";
import { useParams } from "react-router";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../api";

interface Props {}

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();
  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      if (typeof result === "string") {
        console.log("Server error");
      } else {
        setCompany(result?.data[0]);
      }
    };
    getProfileInit();
  }, []);
  return (
    <div>
      {company ? (
        <div>
          <h1>{company.companyName}</h1>
        </div>
      ) : (
        <h1>Company not found...</h1>
      )}
    </div>
  );
};

export default CompanyPage;
