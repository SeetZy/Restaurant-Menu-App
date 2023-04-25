/**
 * * Library imports
 */
import { useEffect, useState } from 'react'
// ? https://www.npmjs.com/package/react-bootstrap
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
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
    <div className="flex justify-center items-center">
      <div className="bg-gray-200 rounded-2xl shadow">
        <div className="w-auto flex m-4 bg-gray-100 rounded-2xl ">
          <Carousel variant={'dark'} controls={false}>
            {menuItems.slice(-4).map((item) => (
              <Carousel.Item className="">
                <Card
                  className="m-10 min-[300px]:w-[200px] md:w-[350px]"
                  style={{ flexGrow: 1 }}
                >
                  <Card.Img variant="top" src={item.foodPicture} />
                  <Card.Body>
                    <Card.Title>{item.foodName}</Card.Title>
                    <Card.Text>{item.foodDesc}</Card.Text>
                    <br />
                    <Card.Text>Price: {item.foodPrice} €</Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Slider
