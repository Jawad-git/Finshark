import React, {ChangeEvent, useState, SyntheticEvent} from 'react'
import styles from "./Search.module.css";
interface Props {
    search: string | undefined;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSearchSubmit: (e: SyntheticEvent) => void;
} 

const Search: React.FC<Props> = ({search, handleSearchChange, onSearchSubmit}: Props): JSX.Element => {
  return (
      <>
          <form onSubmit={onSearchSubmit}>
              <input value={search} onChange={(e) => handleSearchChange(e)} />
          </form>
      </>
  )
}

export default Search;