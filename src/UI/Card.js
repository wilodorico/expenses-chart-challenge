import styled from 'styled-components'
import { colors } from '../theme/colors'

const Card = ({ className, children, bgcolor }) => {
  return <div className={className} bgcolor={bgcolor}>{children}</div>
}

export default styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 540px;
  width: 100%;
  background-color: ${({ bgcolor }) => bgcolor || colors.softRed};
  padding: 1.8rem 2rem;
  margin-bottom: 1.4rem;
  border-radius: 1rem;
`
