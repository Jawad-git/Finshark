import styles from "./CardList.module.css";
import Card from "../Card/Card";
import React from 'react'

interface Props {}

const CardList = (props: Props) => {
    return (<div>
        <Card companyName="Apple" ticker="AAPL" price={100} />
        <Card companyName="Microsoft" ticker="MSFT" price={250}/>
        <Card companyName="Google" ticker="GOOGL" price={1700}  />

    </div>);
}

export default CardList