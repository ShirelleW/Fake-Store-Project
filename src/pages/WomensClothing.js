import React, { useEffect , useState} from 'react'
import WomensClothingComponent from '../components/productComponents/WomensClothingComponent'

const WomensClothing = () => {

  const [womensClothing, setWomensClothing] = useState([])

  const getwomensClothing = async () => {
    const res = await fetch ("https://fakestoreapi.com/products/category/women's%20clothing")

    const data = await res.json()
    setWomensClothing(data)
    // console.log("data:" , data)
  }


  useEffect(() => {
    getwomensClothing()
  }, [])


  return (
    <div className='electronics-container'>
      {womensClothing.map((item) => <WomensClothingComponent key={item.id} item={item}/>)}
      
    </div>
  )
}

export default WomensClothing