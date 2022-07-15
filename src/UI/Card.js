import styled from 'styled-components'
import { colors } from '../theme/colors'

const Card = ({ className, children, bgColor }) => {
  return <div className={className} bgColor={bgColor}>{children}</div>
}

export default styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 450px;
  width: 100%;
  background-color: ${({ bgColor }) => bgColor || colors.softRed};
  padding: 1.5rem;
  margin: 1rem;
  border-radius: 1rem;
`
