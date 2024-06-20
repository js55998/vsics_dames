import React from 'react'

const ObjectProps = (props) => {
    return (
        <header>
        <div>
          <h1>{props.data.welcome}</h1>
          <h2>{props.data.title}</h2>
          <h3>{props.data.subtitle}</h3>
        </div>
      </header>
    )
}

export default ObjectProps
