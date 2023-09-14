import { CarCard, Hero } from '@/components'
import CustomFilter from '@/components/CustomFilter'
import Searchbar from '@/components/Searchbar'
import { fetchCars } from '@/utils'
import Image from 'next/image'

export default async function Home() {

  const allCars = await fetchCars(); 
  const isDataEmpty =!Array.isArray(allCars) || allCars.length < 1 || !allCars; 

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4x1 font-extrabold'> Catalogo de Autos</h1>
          <p>Explora los autos que te podrian gustar</p>
          <div className='home__filters'>
            <Searchbar />

            <div className='home__filter-container'>
              <CustomFilter title="fuel" />
              <CustomFilter title="year" />
            </div>
          </div>

          {!isDataEmpty ? (
            <section>
              <div className='home__cars-wrapper'>
                {allCars?.map((car) => (
                  <CarCard car={car} />
                ))}
              </div>
            </section>
          ) : (
            <div className='home__error-container'>
              <h2 className='text-black text-xl font-bold'>Oops, No se encontraron resultados</h2>
              <p>{allCars?.mesasage}</p>
            </div>
          )}

        </div>
      </div>
    </main>
  )
}
