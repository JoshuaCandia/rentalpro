import CarouselWithContent from './components/molecules/FirstCarousel'
import StickyNavbar from './components/molecules/StickyNavBar'
function App() {
  return (
    <div className='bg-black min-h-screen'>
      <StickyNavbar />
      <CarouselWithContent />
    </div>
  )
}

export default App
