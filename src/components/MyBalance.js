import React from 'react'
import styled from 'styled-components'
import logoSvg from '../images/logo.svg'
import { colors } from '../theme/colors'
import Card from '../UI/Card'

const MyBalance = () => {
  return (
    <BalanceCard>
      <div className='card-content'>
        <h3>My balance</h3>
        <span>$921.48</span>
      </div>
      <div className='card-icon'>
        <img src={logoSvg} alt='logo of my balance' />
      </div>
    </BalanceCard>
  )
}

const BalanceCard = styled(Card)`
  color: ${colors.veryPaleOrange};

  .card-content h3 {
    font-size: 1.1rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }

  .card-content span {
    font-size: 1.8rem;
    font-weight: 700;
  }

  @media screen and (max-width: 500px) {
    .card-content h3 {
      font-size: 1rem;
      font-weight: 400;
      margin-bottom: 0.5rem;
    }

    .card-content span {
      font-size: 1.6rem;
      font-weight: 700;
    }

    .card-icon img {
      width: 4rem;
    }
  }
`

export default MyBalance
