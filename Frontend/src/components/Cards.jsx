import React from 'react'

function Cards({item}) {
  return (
    <>
    <div>
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={item.image}
      alt="category" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.category}
      <div className="badge badge-secondary">category</div>
    </h2>
    
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{item.price}</div>
      <div className="badge badge-outline">price drop!</div>
    </div>
  </div>
</div>
    </div>
    
    </>
  )
}

export default Cards
