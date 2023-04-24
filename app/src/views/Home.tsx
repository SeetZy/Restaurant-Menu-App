/*
 * Library imports
 */

import Slider from '../components/Slider'

function HomePage() {
  document.title = 'MĀJAS // RESTAURANT MENU APP'

  return (
    <div className="h-auto bg-bg-svg bg-cover bg-no-repeat">
      <section className="h-screen w-full flex justify-center items-center">
        <div>Home Page</div>
      </section>
      <section className="h-90vh">
        <p className="text-center text-3xl mb-[3vh]">Mūsu jaunākie ēdieni:</p>
        <Slider />
      </section>
    </div>
  )
}

export default HomePage
