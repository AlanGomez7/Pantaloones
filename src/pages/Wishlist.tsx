import React, { useEffect, useState } from 'react'
import { fetchWishlistData } from '../api/pageApi'

function Wishlist() {
  const [result, setResult] = useState()
  const fetchWishlistDetails = async ()=>{
    const result:any = await fetchWishlistData();
    console.log(result)
  }
  useEffect(()=>{
    // fetchWishlistDetails()
  }, [])

  return (
    <div>Wishlist</div>
  )
}

export default Wishlist