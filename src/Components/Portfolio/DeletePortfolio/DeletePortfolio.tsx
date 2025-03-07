import React, { SyntheticEvent } from 'react'
import styles from './DeletePortfolio.module.css'
interface Props  {
  onPortfolioDelete: (e: SyntheticEvent) => void
  portfolioValue: string
}

const DeletePortfolio : React.FC<Props> = ({onPortfolioDelete, portfolioValue}: Props) : JSX.Element => {
  return (
      <form onSubmit={onPortfolioDelete}>
          <input hidden={true} value={portfolioValue} />
          <button type="submit">X</button>
      </form>
  )
}

export default DeletePortfolio