import React from 'react'

const DCard = (props) => {
  return (
    <>
      <h2>Card</h2>
      <div className="card">
        <img src={props.img} alt="Avatar" className="img" />
        <div className="container">
          <h4>
            <b>{props.name}</b>
          </h4>
          <p>{props.job}</p>
        </div>
      </div>
    </>
  )
}

export default DCard