import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme/colors'

const ExpenseBar = ({ className, amount, bgcolor }) => {
  return (
    <span
      className={className}
      amount={amount}
      bgcolor={bgcolor}
    ></span>
  )
}

export default styled(ExpenseBar)`
  position: relative;
  text-align: center;
  color: ${colors.mediumBrown};
  width: 100%;
  height: ${({ amount }) => `${amount * 1.3}%`};
  background: ${({ bgcolor }) => bgcolor};
  border-radius: 4px;
  margin-bottom: 0.4rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.7;
  }
`
