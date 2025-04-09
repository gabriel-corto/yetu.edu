import { LogIn, UserPlus } from "lucide-react"

export function Banner() {
  return (
    <section className='flex flex-col lg:flex-row items-center justify-center py-10 md:py-20 gap-10 md:gap-20'>
      <div className='flex flex-col gap-4 md:gap-6 text-center lg:text-left'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-2xl'>
          A Yetu.edu, Conecta-te com quem inspira,
        </h1>
        <p className='text-lg md:text-xl text-neutral-600 max-w-xl'>
          "A educação é a arma mais poderosa que você pode usar para mudar o
          mundo" - Nelson Mandela
        </p>

        <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4'>
          <button className='border border-orange-400 flex items-center gap-1 font-bold text-orange-500 rounded-full px-6 py-3 text-sm md:text-base w-full sm:w-auto justify-center'>
            <LogIn className='w-4 h-4 md:w-5 md:h-5' />
            <span>Entrar</span>
          </button>

          <button className='bg-neutral-900 flex hover:bg-orange-400 duration-300 cursor-pointer items-center gap-1 font-bold text-white rounded-full px-6 py-3 text-sm md:text-base w-full sm:w-auto justify-center'>
            <UserPlus className='w-4 h-4 md:w-5 md:h-5' />
            <span>Criar Conta</span>
          </button>
        </div>
      </div>

      <div className='max-w-md lg:max-w-none'>
        <img
          src='/landing.png'
          className='w-full max-w-[30rem]'
          alt='Estudantes conectados através da plataforma Yetu.edu'
        />
      </div>
    </section>
  )
}
