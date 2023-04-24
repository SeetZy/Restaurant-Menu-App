/**
 * * Library imports
 */
// ? https://www.npmjs.com/package/react-bootstrap
import Carousel from 'react-bootstrap/Carousel'

const Slider = () => {
  const photo =
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80'
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[70%] h-auto bg-gray-200 rounded-2xl shadow 2xl:w-[60%]">
        <div className="flex m-4 bg-gray-100 rounded-2xl">
          <Carousel variant={'dark'} controls={false}>
            <Carousel.Item>
              <div className="flex">
                <div className="w-[60%] ml-[4%] mt-[3%]">
                  <h1 className="text-4xl font-bold">
                    Trade with Files & Documents
                  </h1>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </div>
                <div className="w-[40%]">
                  <img className="block" src={photo} alt="First slide" />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="flex">
                <div className="w-[60%] ml-[4%] mt-[3%]">
                  <h1 className="text-4xl font-bold">Trade with Money</h1>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </div>
                <div className="w-[40%]">
                  <img className="block" src={photo} alt="First slide" />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="flex">
                <div className="w-[60%] ml-[4%] mt-[3%]">
                  <h1 className="text-4xl font-bold">Trade with Crypto</h1>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </div>
                <div className="w-[40%]">
                  <img className="block" src={photo} alt="First slide" />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="flex">
                <div className="w-[60%] ml-[4%] mt-[3%]">
                  <h1 className="text-4xl font-bold">Trade with NFT's</h1>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </div>
                <div className="w-[40%]">
                  <img className="block" src={photo} alt="First slide" />
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Slider
