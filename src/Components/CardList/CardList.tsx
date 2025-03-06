import styles from "./CardList.module.css";
import Card from "../Card/Card";
import React, { SyntheticEvent } from 'react'
import { CompanySearch } from "../../company";
import { v4 as uuidv4 } from "uuid";

interface Props {
    searchResults: CompanySearch[];
    onPortfolioCreate: (e: SyntheticEvent) => void;
}

const CardList : React.FC<Props> = ({searchResults, onPortfolioCreate}: Props) : JSX.Element => {
    return (<>
        {searchResults.length === 0 ? <h1>No results!</h1> : searchResults.map((result) => (
            <Card
                searchResult={result}
                key={uuidv4()}
                id={result.symbol}
                onPortfolioCreate={onPortfolioCreate}
            />
        ))}
    </>);
}

export default CardList