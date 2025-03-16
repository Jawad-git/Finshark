import React from "react";
import styles from "./DesignPage.module.css";

import Table from "../../Components/Table/Table";
import RatioList from "../../Components/RatioList/RatioList";
import { CompanyKeyMetrics } from "../../company";
import { TestDataCompany, testIncomeStatementData } from "../../Components/Table/testData";
interface Props {}
const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
];

const DesignPage = (props: Props) => {
  return (
    <>
      <h1>
        Design guide - this is the design guide for Fin Shark. These are reusable components of the app with brief
        instructions on how to use them.
      </h1>
      <RatioList data={testIncomeStatementData} config={tableConfig} />
      <Table config={tableConfig} data={testIncomeStatementData} />
      <h3>
        Table - table takes in a configuration object and company data as params. Use the config to style your table.
      </h3>
    </>
  );
};

export default DesignPage;
