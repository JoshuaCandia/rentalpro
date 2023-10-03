import { Carousel, Typography, Button } from '@material-tailwind/react'

export default function StickyNavBar() {
  return (
    <Carousel
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className='absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2'>
          {new Array(length).fill('').map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      className='h-[91.5vh] sm:h-[94vh] md:h-[95vh] lg:h-[89.5vh] max:h-[93vh] w-full'
    >
      <div className='relative h-full w-full'>
        <img
          src='https://images.pexels.com/photos/3172566/pexels-photo-3172566.jpeg'
          alt='img 1'
          className='h-full w-full object-cover'
        />
        <div className='absolute inset-0 grid h-full w-full place-items-center bg-black/75'>
          <div className='w-3/4 text-center md:w-2/4'>
            <Typography
              variant='h1'
              color='white'
              className='mb-4 text-3xl md:text-4xl lg:text-5xl'
            >
              Diversión asegurada de la mano de Rental Pro!
            </Typography>
            <Typography
              variant='lead'
              color='white'
              className='mb-12 opacity-80 text-xl'
            >
              Eventos Esplendor: Organización de eventos extraordinarios,
              Creatividad,atención al detalle y experiencias inolvidables
              garantizadas.
            </Typography>
            <div className='flex justify-center gap-2'>
              <Button size='lg' color='white'>
                Explore
              </Button>
              <Button size='lg' color='white' variant='text'>
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='relative h-full w-full'>
        <img alt='img 2' className='h-full w-full object-cover' />
        <div className='absolute inset-0 grid h-full w-full items-center bg-black/75'>
          <div className='w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32'>
            <Typography
              variant='h1'
              color='white'
              className='mb-4 text-3xl md:text-4xl lg:text-5xl'
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant='lead'
              color='white'
              className='mb-12 opacity-80'
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className='flex gap-2'>
              <Button size='lg' color='white'>
                Explore
              </Button>
              <Button size='lg' color='white' variant='text'>
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='relative h-full w-full'>
        <img alt='img 3' className='h-full w-full object-cover' />
        <div className='absolute inset-0 grid h-full w-full items-end bg-black/75'>
          <div className='w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32'>
            <Typography
              variant='h1'
              color='white'
              className='mb-4 text-3xl md:text-4xl lg:text-5xl'
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant='lead'
              color='white'
              className='mb-12 opacity-80'
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className='flex gap-2'>
              <Button size='lg' color='white'>
                Explore
              </Button>
              <Button size='lg' color='white' variant='text'>
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  )
}
