import React, { SyntheticEvent } from "react";
import styles from "./DeletePortfolio.module.css";
interface Props {
  onPortfolioDelete: (e: SyntheticEvent) => void;
  portfolioValue: string;
}

const DeletePortfolio: React.FC<Props> = ({
  onPortfolioDelete,
  portfolioValue,
}: Props): JSX.Element => {
  return (
    <form onSubmit={onPortfolioDelete}>
      <input hidden={true} value={portfolioValue} />
      <button className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500">
        X
      </button>
    </form>
  );
};

export default DeletePortfolio;
