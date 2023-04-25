/*
 * Library imports
 */
import { useState, useLayoutEffect } from 'react'
// ? https://www.npmjs.com/package/react-router-dom
import { Link } from 'react-router-dom'
// ? https://www.npmjs.com/package/react-bootstrap
import Button from 'react-bootstrap/Button'
// ? https://www.npmjs.com/package/gsap
import { gsap } from 'gsap'

/**
 * * Page/Component imports
 */
import LoadingBar from '../components/LoadingBar'
import Slider from '../components/Slider'
import MenuItems from '../components/MenuItems'

function HomePage() {
  document.title = 'MĀJAS // RESTAURANT MENU APP'

  const [isLoaded, setIsLoaded] = useState(false)

  useLayoutEffect(() => {
    if (isLoaded) {
      // fade out loading screen
      gsap.to('.loading-screen', {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          // remove loading screen from DOM
          document.querySelector('.loading-screen')?.remove()
        },
      })
    }
  }, [isLoaded])

  return (
    <>
      {!isLoaded && (
        <div className="loading-screen fixed top-0 left-0 w-full h-full flex justify-center items-center z-40 bg-white">
          <LoadingBar />
        </div>
      )}
      <div className="h-auto " onLoad={() => setIsLoaded(true)}>
        <section className="h-[80vh] w-full relative bg-bg-food bg-cover bg-no-repeat flex justify-center items-center">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="flex flex-col items-center z-20">
            <div className="text-white mb-4 min-[300px]:text-3xl sm:text-4xl md:text-5xl">
              Restaurant-Menu-App
            </div>
            <div>
              <Link to="/add-menu-items" className="no-underline">
                <Button variant="outline-light">Pievienot ēdienu</Button>{' '}
              </Link>
            </div>
          </div>
        </section>

        <section className="h-auto pt-10 pb-10 border-t-2 border-black bg-main">
          <p className="text-center text-3xl text-white font-bold mb-[3vh]">
            Mūsu jaunākie ēdieni
          </p>
          <Slider />
        </section>

        <section className="h-auto pt-10 pb-10">
          <MenuItems />
        </section>
      </div>
    </>
  )
}

export default HomePage
