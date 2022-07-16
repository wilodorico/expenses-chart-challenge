import styled from 'styled-components'
import { expenses } from '../data/expense-data'
import { colors } from '../theme/colors'
import Card from '../UI/Card'
import ExpenseBar from './ExpenseBar'

const ExpenseOfWeek = () => {


  const date = new Date();
  let day = expenses[date.getDay() -1].day;

  const newArrExpenses = expenses.map((expense) => {
    return { ...expense, isTrue: expense.day === day }
  })

  return (
    <CardExpense bgcolor={colors.veryPaleOrange}>
      <h3>Spending - Last 7 days</h3>
      <div className='expense-list'>
        <ul>
          {newArrExpenses.map((expense) => (
            <li key={expense.day}>
              <ExpenseBar
                amount={expense.amount}
                txtAmount={`$${expense.amount}`}
                bgcolor={expense.isTrue ? colors.cyan : colors.softRed}
              />
              {expense.day}
            </li>
          ))}
        </ul>
        <hr />
        <div className='total-month'>
          <div className='this-month'>
            <h4>Total this month</h4>
            <span>$478.33</span>
          </div>
          <div className='last-month'>
            <span>+2.4%</span>
            <h5>from last month</h5>
          </div>
        </div>
      </div>
    </CardExpense>
  )
}

const CardExpense = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${colors.darkBrown};
  padding: 2.2rem 2rem;

  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .expense-list {
    width: 100%;
  }

  .expense-list ul {
    display: flex;
    justify-content: space-between;
    height: 210px;
  }

  .expense-list li {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: ${colors.mediumBrown};
    width: 3.1rem;
    height: auto;
    font-size: 0.9rem;
    text-align: center;
  }

  .expense-list hr {
    margin: 1.8rem 0;
    height: 2px;
    background-color: ${colors.lightBrown};
    border: none;
  }

  .total-month {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .this-month h4,
  h5 {
    color: ${colors.mediumBrown};
    font-weight: 400;
  }

  .this-month span {
    font-size: 2.9rem;
    font-weight: 700;
  }

  .last-month {
    text-align: end;
    padding: 1rem 0 0;
  }

  .last-month span {
    font-weight: 700;
    font-size: 1.2rem;
  }

  .last-month h5 {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 500px) {
    padding: 1.3rem;

    h3 {
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
  }

    .expense-list li {
      width: 2.1rem;
      font-size: 0.7rem;
    }

    .this-month h4 {
      font-size: 1rem;
    }

    .this-month span {
    font-size: 2rem;
  }

  .last-month {
    padding: 0.4rem 0 0;
  }

  .last-month span {
    font-weight: 700;
    font-size: 1.1rem;
  }

  .last-month h5 {
    font-size: 1rem;
  }
  }
`

export default ExpenseOfWeek
