import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme/colors'

const ExpenseBar = ({className, amount, bgcolor, onMouseEnter, onMouseLeave }) => {
  return <span className={className} amount={amount} bgcolor={bgcolor} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}></span>
}

export default styled(ExpenseBar)`
  position: relative;
  text-align: center;
  color: ${colors.mediumBrown};
  width: 100%;
  height: ${({ amount }) => `${amount*1.3}%`};
  background: ${({bgcolor}) => bgcolor};
  border-radius: 4px;
  margin-bottom: 0.4rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.7;
  }

  &:hover::after {
    content: attr(amount);
    position: absolute;
    top: -48px;
    left: -6px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colors.darkBrown};
    color: ${colors.veryPaleOrange};
    width: 60px;
    height: 40px;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 700;
    opacity: 1;
  }
`
