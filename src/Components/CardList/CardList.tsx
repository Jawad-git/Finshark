import styles from "./CardList.module.css";
import Card from "../Card/Card";
import React from 'react'
import { CompanySearch } from "../../company";
import { v4 as uuidv4 } from "uuid";

interface Props {
    searchResults: CompanySearch[];
}

const CardList : React.FC<Props> = ({searchResults}: Props) : JSX.Element => {
    return (<>
        {searchResults.length === 0 ? <h1>No results!</h1> : searchResults.map((result) => (
            <Card
                searchResult={result}
                key={uuidv4()}
                id={result.symbol}
            />
        ))}
    </>);
}

export default CardList