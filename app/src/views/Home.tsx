/*
 * Library imports
 */

import Slider from '../components/Slider'

function HomePage() {
  return (
    <>
      <section className="h-screen w-full flex justify-center items-center">
        <div>Home Page</div>
      </section>
      <section>
        <p className="text-center text-3xl mb-[3vh]">Our newest products:</p>
        <Slider />
      </section>
    </>
  )
}

export default HomePage
