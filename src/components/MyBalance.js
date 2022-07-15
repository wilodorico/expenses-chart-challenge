import React from 'react'
import styled from 'styled-components'
import logoSvg from '../images/logo.svg'

const MyBalance = () => {
  return (
    <Card>
      <div>
      my balance
      $921.48
      </div>
      <div className='icon'>
         <img src={logoSvg} alt="logo of my balance" />
      </div>
    </Card>
  )
}

const Card = styled.div`
   
`

export default MyBalance