/**
 * * Library imports
 */
import { useEffect, useState } from 'react'
// ? https://www.npmjs.com/package/react-bootstrap
import Carousel from 'react-bootstrap/Carousel'
// ? https://www.npmjs.com/package/axios
import axios from 'axios'

interface MenuItem {
  _id: string
  foodName: string
  foodDesc: string
  foodPrice: string
  foodPicture: string
}

const Slider = () => {
  const backendURL = 'http://localhost:5000/get-menu'

  const [menuItems, setMenuItems] = useState<MenuItem[]>([])

  useEffect(() => {
    axios.get(backendURL).then((response) => {
      setMenuItems(response.data.success)
    })
  }, [])

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[70%] h-auto bg-gray-200 rounded-2xl shadow 2xl:w-[60%]">
        <div className="flex m-4 bg-gray-100 rounded-2xl">
          <Carousel variant={'dark'} controls={false}>
            {menuItems.slice(-4).map((item) => (
              <Carousel.Item className="mb-4" key={item._id}>
                <div className="flex">
                  <div className="w-[60%] ml-[4%] mt-[3%]">
                    <h1 className="text-4xl font-bold">{item.foodName}</h1>
                    <p className="mt-1 h-[15vh]">{item.foodDesc}</p>

                    <p>Price: {item.foodPrice} €</p>
                  </div>
                  <div className="w-[40%]">
                    <img
                      className="block"
                      src={item.foodPicture}
                      alt="Food item"
                    />
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Slider
