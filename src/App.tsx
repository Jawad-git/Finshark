import { useState } from "react";
import { ChangeEvent, SyntheticEvent } from "react";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import { CompanySearch } from "./company";
import { searchCompanies } from "./api";


function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const onClick = async (e: SyntheticEvent) => {
        const result = await searchCompanies(search);
        if (typeof result === "string") {
            setServerError(result);
        } else if (Array.isArray(result.data)) {
            setSearchResult(result.data);
      }
      console.log(searchResult);
  }
  
  return (
    <div>
      <Search onClick={onClick} search={search} handleChange={handleChange} />
      <CardList searchResults={searchResult} />
      {serverError && <h1>{serverError}</h1>}
    </div>
  );
}

export default App;
