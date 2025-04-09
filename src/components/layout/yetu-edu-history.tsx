import { UserPlus, Phone } from "lucide-react"

export function YetuEduHistory() {
  return (
    <section className='py-12 md:py-24 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-white to-orange-50'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12 md:mb-16'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 mb-4'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700'>
              História da Yetu.edu
            </span>
          </h1>
          <div className='w-20 h-1 bg-orange-400 mx-auto'></div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <div className='relative'>
              <div className='absolute -left-4 -top-4 w-12 h-12 bg-orange-100 rounded-full opacity-70'></div>
              <div className='absolute -right-4 -bottom-4 w-16 h-16 bg-orange-200 rounded-full opacity-50'></div>
              <div className='relative bg-white p-8 rounded-2xl shadow-lg border border-orange-100'>
                <p className='text-lg md:text-xl text-neutral-700 leading-relaxed'>
                  A Yetu Edu nasceu da minha própria experiência como estudante.
                  Durante minha trajetória acadêmica, enfrentei inúmeras
                  dificuldades para encontrar materiais de estudo acessíveis e
                  mentores que pudessem guiar minha formação.
                </p>
                <p className='text-lg md:text-xl text-neutral-700 leading-relaxed mt-6'>
                  Muitas vezes, precisei recorrer a fontes limitadas e enfrentar
                  barreiras que tornavam o aprendizado um desafio ainda maior.
                  Foi a partir dessas dificuldades que surgiu a ideia de criar
                  uma plataforma que pudesse mudar essa realidade.
                </p>
              </div>
            </div>

            <div className='flex justify-center lg:justify-start'>
              <button className='group relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-full px-8 py-4 shadow-lg hover:shadow-orange-200 transition-all duration-300 transform hover:-translate-y-1'>
                <span className='relative z-10 flex items-center gap-2'>
                  <UserPlus className='w-5 h-5' />
                  <span>Experimentar Agora</span>
                </span>
                <span className='absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
              </button>
            </div>
          </div>

          <div className='relative'>
            <div className='relative rounded-2xl overflow-hidden shadow-xl border-4 border-white'>
              <img
                src='/ceos.png'
                className='w-full h-auto object-cover transition-transform duration-500 hover:scale-105'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-neutral-900/30 to-transparent'></div>
            </div>
            <div className='absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-md border border-orange-100 hidden md:block'>
              <div className='flex items-center'>
                <div className='bg-orange-500 p-2 rounded-full mr-3'>
                  <Phone className='w-5 h-5 text-white' />
                </div>
                <div>
                  <p className='text-xs text-neutral-500'>Fundador</p>
                  <p className='font-bold text-neutral-800'>Joel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
