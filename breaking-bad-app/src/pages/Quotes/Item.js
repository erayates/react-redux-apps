import React from 'react'

function Item({item}) {
  return (
    <div>{item.quote} <strong>{item.author}</strong> </div>
  )
}

export default Item