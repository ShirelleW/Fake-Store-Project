import React, { useEffect , useState} from 'react'
import ElectronicsComponent from "../components/productComponents/ElectronicsComponent"
const Electronics = () => {

  const [electronicsData, setElectronicsData] = useState([])

  const getElectronics = async () => {
    const res = await fetch ("https://fakestoreapi.com/products/category/electronics")

    const data = await res.json()
    setElectronicsData(data)
    // console.log("data:" , data)
  }


  useEffect(() => {
    getElectronics()
  }, [])


  return (
    <div className='electronics-container'>
      {electronicsData.map((item) => <ElectronicsComponent key={item.id} item={item}/>)}
      
    </div>
  )
}

export default Electronics