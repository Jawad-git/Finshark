import React, { useEffect, useState } from "react";
import styles from "./CashFlowStatement.module.css";
import { CompanyCashFlow } from "../../company";
import Table from "../Table/Table";
import { useOutletContext } from "react-router";
import { getCashFlowStatement } from "../../api";
interface Props {}

const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) => company.operatingCashFlow,
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) =>
      company.netCashUsedForInvestingActivites,
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) =>
      company.netCashUsedProvidedByFinancingActivities,
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) => company.cashAtEndOfPeriod,
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) => company.capitalExpenditure,
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) => company.commonStockIssued,
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) => company.freeCashFlow,
  },
];

const CashFlowStatement: React.FC<Props> = (props: Props): JSX.Element => {
  const ticker = useOutletContext<string>();
  const [cashFlowData, setCashFlowData] = useState<CompanyCashFlow[]>([]);
  useEffect(() => {
    const fetchCashFlow = async () => {
      const result = await getCashFlowStatement(ticker!);
      setCashFlowData(result!.data);
    };
    fetchCashFlow();
  }, []);
  return (
    <>
      {cashFlowData.length > 0 ? (
        <Table config={config} data={cashFlowData} />
      ) : (
        <div className="text-center">No results</div>
      )}
    </>
  );
};

export default CashFlowStatement;
