import React, { useEffect , useState} from 'react'
import MensClothingComponent from '../components/productComponents/MensClothingComponent'

const MensClothing = () => {

  const [mensClothingData, setMensClothing] = useState([])

  const getmensClothingData = async () => {
    const res = await fetch ("https://fakestoreapi.com/products/category/men's%20clothing")

    const data = await res.json()
    setMensClothing(data)
    // console.log("data:" , data)
  }


  useEffect(() => {
    getmensClothingData()
  }, [])


  return (
    <div className='electronics-container'>
      {mensClothingData.map((item) => <MensClothingComponent key={item.id} item={item}/>)}
      
    </div>
  )
}

export default MensClothing