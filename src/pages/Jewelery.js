import React, { useEffect , useState} from 'react'
import JeweleryComponent from "../components/productComponents/JeweleryComponent"

const Electronics = () => {

  const [jeweleryData, setJeweleryData] = useState([])

  const getJeweleryData = async () => {
    const res = await fetch ("https://fakestoreapi.com/products/category/jewelery")

    const data = await res.json()
    setJeweleryData(data)
    // console.log("data:" , data)
  }


  useEffect(() => {
    getJeweleryData()
  }, [])


  return (
    <div className='electronics-container'>
      {jeweleryData.map((item) => <JeweleryComponent key={item.id} item={item}/>)}
      
    </div>
  )
}

export default Electronics