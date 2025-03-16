import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import styles from "./SearchPage.module.css";
import CardList from "../../Components/CardList/CardList";
import Navbar from "../../Components/Navbar/Navbar";
import ListPortfolio from "../../Components/Portfolio/ListPortfolio/ListPortfolio";
import Search from "../../Components/Search/Search";
import { searchCompanies } from "../../api";
import { CompanySearch } from "../../company";
import { PortfolioGet } from "../../Models/Portfolio";
import { getPortfolioApi, portfolioAddApi, portfolioDeleteApi } from "../../Services/PortfolioService";
import { toast } from "react-toastify";

interface Props {}

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getPortfolio();
  }, []);

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
    console.log(searchResult);
  };

  const getPortfolio = async () => {
    try {
      const result = await getPortfolioApi();
      if (typeof result === "string") {
        setServerError(result);
      } else if (Array.isArray(result?.data)) {
        setPortfolioValues(result?.data);
      }
    } catch (error: any) {
      toast.error(error);
    }
  };

  const onPortfolioCreate = async (e: any) => {
    e.preventDefault();
    try {
      var res = await portfolioAddApi(e.target[0].value);
      if (res?.status === 204) {
        toast.success("stock added to portfolio!");
        getPortfolio();
      }
    } catch (error: any) {
      toast.warning("Could not create portfolio item!");
    }
  };

  const onPortfolioDelete = async (e: any) => {
    e.preventDefault();
    try {
      var res = await portfolioDeleteApi(e.target[0].value);
      if (res?.status === 200) {
        toast.success("Stock deleted from portfolio!");
        getPortfolio();
      }
    } catch (error: any) {
      toast.warning("Could not delete portfolio item!");
    }
  };
  return (
    <div>
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
      <ListPortfolio portfolioValues={portfolioValues!} onPortfolioDelete={onPortfolioDelete} />
      <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate} />
      {serverError && <h1>{serverError}</h1>}
    </div>
  );
};

export default SearchPage;
