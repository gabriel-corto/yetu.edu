import { Zap, Award, TrendingUp, Rocket } from "lucide-react"

export function YetuEduJourney() {
  return (
    <section className='py-12 md:py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mb-4'>
            Nossa <span className='text-orange-500'>Jornada</span>
          </h2>
          <p className='text-lg text-neutral-600 max-w-2xl mx-auto'>
            Da ideação ao crescimento, cada marco representa nosso compromisso
            com a educação
          </p>
        </div>

        <div className='relative'>
          <div className='absolute left-4 md:left-1/2 h-full w-1 bg-orange-100 transform -translate-x-1/2'></div>

          <div className='space-y-12 md:space-y-16'>
            <div className='relative flex flex-col md:flex-row items-center md:odd:flex-row-reverse group'>
              <div className='flex-1 md:px-8 mb-4 md:mb-0'>
                <div className='bg-white p-6 rounded-xl shadow-lg border border-orange-100 relative'>
                  <div className='absolute -top-3 left-6 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center'>
                    <Zap className='w-3 h-3 text-white' />
                  </div>
                  <h3 className='text-xl font-bold text-neutral-900 mb-2'>
                    Ideação
                  </h3>
                </div>
              </div>
              <div className='w-24 flex-shrink-0 text-center'>
                <span className='inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium'>
                  DEZ. 2019
                </span>
              </div>
            </div>

            <div className='relative flex flex-col md:flex-row items-center md:odd:flex-row-reverse group'>
              <div className='flex-1 md:px-8 mb-4 md:mb-0'>
                <div className='bg-white p-6 rounded-xl shadow-lg border border-orange-100 relative'>
                  <div className='absolute -top-3 left-6 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center'>
                    <Award className='w-3 h-3 text-white' />
                  </div>
                  <h3 className='text-xl font-bold text-neutral-900 mb-2'>
                    TOP 100 Startup
                  </h3>
                </div>
              </div>
              <div className='w-24 flex-shrink-0 text-center'>
                <span className='inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium'>
                  MAI. 2022
                </span>
              </div>
            </div>

            <div className='relative flex flex-col md:flex-row items-center md:odd:flex-row-reverse group'>
              <div className='flex-1 md:px-8 mb-4 md:mb-0'>
                <div className='bg-white p-6 rounded-xl shadow-lg border border-orange-100 relative'>
                  <div className='absolute -top-3 left-6 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center'>
                    <TrendingUp className='w-3 h-3 text-white' />
                  </div>
                  <h3 className='text-xl font-bold text-neutral-900 mb-2'>
                    Parceria TotalEnergies
                  </h3>
                </div>
              </div>
              <div className='w-24 flex-shrink-0 text-center'>
                <span className='inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium'>
                  FEV. 2024
                </span>
              </div>
            </div>

            <div className='relative flex flex-col md:flex-row items-center md:odd:flex-row-reverse group'>
              <div className='flex-1 md:px-8 mb-4 md:mb-0'>
                <div className='bg-white p-6 rounded-xl shadow-lg border border-orange-100 relative'>
                  <div className='absolute -top-3 left-6 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center'>
                    <Rocket className='w-3 h-3 text-white' />
                  </div>
                  <h3 className='text-xl font-bold text-neutral-900 mb-2'>
                    Beta 1 Lançado
                  </h3>
                </div>
              </div>
              <div className='w-24 flex-shrink-0 text-center'>
                <span className='inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium'>
                  JUN. 2024
                </span>
              </div>
            </div>

            <div className='relative flex flex-col md:flex-row items-center md:odd:flex-row-reverse group'>
              <div className='flex-1 md:px-8 mb-4 md:mb-0'>
                <div className='bg-white p-6 rounded-xl shadow-lg border border-orange-100 relative'>
                  <div className='absolute -top-3 left-6 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center'>
                    <Award className='w-3 h-3 text-white' />
                  </div>
                  <h3 className='text-xl font-bold text-neutral-900 mb-2'>
                    Finalistas LISPA Boost 2024
                  </h3>
                </div>
              </div>
              <div className='w-24 flex-shrink-0 text-center'>
                <span className='inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium'>
                  MAR. 2025
                </span>
              </div>
            </div>

            <div className='relative flex flex-col md:flex-row items-center md:odd:flex-row-reverse group'>
              <div className='flex-1 md:px-8 mb-4 md:mb-0'>
                <div className='bg-orange-50 p-6 rounded-xl shadow-lg border border-orange-200 relative'>
                  <div className='absolute -top-3 left-6 w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center'>
                    <Zap className='w-3 h-3 text-white' />
                  </div>
                  <h3 className='text-xl font-bold text-neutral-900 mb-2'>
                    Actualmente
                  </h3>
                </div>
              </div>
              <div className='w-24 flex-shrink-0 text-center'>
                <span className='inline-block px-3 py-1 bg-orange-600 text-white rounded-full text-sm font-medium'>
                  JUN 2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
