import React, {ChangeEvent, useState, SyntheticEvent} from 'react'
import styles from "./Search.module.css";
interface Props {
    search: string | undefined;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick: (e: SyntheticEvent) => void;
} 

const Search: React.FC<Props> = ({search, handleChange, onClick}: Props): JSX.Element => {
  return (
      <div>
          <input type={search} onChange={(e) => handleChange(e)} />
          <button onClick={(e) => onClick(e)}>Search</button>
    </div>
  )
}

export default Search;