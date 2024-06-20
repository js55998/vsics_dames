import React from 'react'

const MathComponent = () => {
    const numOne = 3
    const numTwo = 2
    const result = (
      <h2>
        The Result of {numOne} + {numTwo} = {numOne + numTwo}
      </h2>
    )

    
     const author={
        firstName:'Debasish',
        lastName:'Sahoo'
     }
    const yearBorn = 1820
    const currentYear = 2024
    const age = currentYear - yearBorn
    const personAge = (
      <h2>
        {' '}
        {author.firstName} {author.lastName} is {age} years old
      </h2>
    )


    return (
        <>
            {result}
            {personAge}
        </>
    )
}

export default MathComponent
