import React, {ChangeEvent, useState, SyntheticEvent} from 'react'
import styles from "./Search.module.css";
interface Props {} 

const Search: React.FC<Props> = (props: Props): JSX.Element => {
    const [search, setSearch] = useState<string>("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleClick = (e: SyntheticEvent) => {
        console.log(e);
    }

  return (
      <div>
          <input type="text" onChange={(e) => handleChange(e)} />
          <button onClick={(e) => handleClick(e)}>Search</button>
    </div>
  )
}

export default Search;