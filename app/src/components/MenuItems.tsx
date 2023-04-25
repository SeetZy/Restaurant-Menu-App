/**
 * * Library imports
 */
import { useEffect, useState } from 'react'
// ? https://www.npmjs.com/package/react-bootstrap
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

const MenuItems = () => {
  const backendURL = 'http://localhost:5000/get-menu'

  const [menuItems, setMenuItems] = useState<MenuItem[]>([])

  useEffect(() => {
    axios.get(backendURL).then((response) => {
      setMenuItems(response.data.success)
    })
  }, [])

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[70%] h-auto bg-gray-200 rounded-2xl shadow 2xl:w-[60%] ">
        <div className="flex m-4 bg-gray-100 rounded-2xl flex-wrap">
          {menuItems.map((item) => (
            <Card className="w-[250px] m-2" style={{ flexGrow: 1 }}>
              <Card.Img variant="top" src={item.foodPicture} />
              <Card.Body>
                <Card.Title>{item.foodName}</Card.Title>
                <Card.Text>{item.foodDesc}</Card.Text>
                <br />
                <Card.Text>Price: {item.foodPrice} €</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MenuItems
