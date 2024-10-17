import React from 'react'

const Sign = (props) => {
  return (
    <div>
      <h2>sign up page</h2>
      <h2>{props.name}</h2>
      {
        props.data_id
      }
    </div>
  )
}

export default Sign
