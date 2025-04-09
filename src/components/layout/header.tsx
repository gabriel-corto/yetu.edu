import { House, LayoutGrid, Gift, LogIn, UserPlus, Link } from "lucide-react"
import { NavLink } from "react-router-dom"

export function Header() {
  return (
    <header className='flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0'>
      <div className='w-40 md:w-auto'>
        <img src='/logo.png' alt='Logo Yetu.edu' className='w-full' />
      </div>

      <nav className='flex items-center gap-1 md:gap-2 lg:gap-4 flex-wrap justify-center'>
        <NavLink
          to=''
          className='active flex items-center gap-1 text-neutral-700 font-semibold hover:text-orange-400 duration-300 hover:bg-orange-50 p-2 md:p-3 lg:p-4 rounded-xl text-sm md:text-base'
        >
          <House className='w-4 h-4 md:w-5 md:h-5' />
          <span>Home</span>
        </NavLink>

        <NavLink
          to='/about'
          className='flex items-center gap-1 text-neutral-700 font-semibold hover:text-orange-400 duration-300 hover:bg-orange-50 p-2 md:p-3 lg:p-4 rounded-xl text-sm md:text-base'
        >
          <Link className='w-4 h-4 md:w-5 md:h-5' />
          <span>Sobre</span>
        </NavLink>

        <NavLink
          to='/products'
          className='flex items-center gap-1 text-neutral-700 font-semibold hover:text-orange-400 duration-300 hover:bg-orange-50 p-2 md:p-3 lg:p-4 rounded-xl text-sm md:text-base'
        >
          <LayoutGrid className='w-4 h-4 md:w-5 md:h-5' />
          <span>Produtos</span>
        </NavLink>

        <NavLink
          to='/plans'
          className='flex items-center gap-1 text-neutral-700 font-semibold hover:text-orange-400 duration-300 hover:bg-orange-50 p-2 md:p-3 lg:p-4 rounded-xl text-sm md:text-base'
        >
          <Gift className='w-4 h-4 md:w-5 md:h-5' />
          <span>Planos</span>
        </NavLink>
      </nav>

      <aside className='flex items-center gap-2 md:gap-4'>
        <button className='border border-orange-400 flex items-center cursor-pointer gap-1 font-bold text-orange-500 rounded-full p-2 md:p-3 lg:p-4 text-sm md:text-base'>
          <LogIn className='w-4 h-4 md:w-5 md:h-5' />
          <span>Entrar</span>
        </button>

        <button className='bg-orange-400 flex hover:bg-neutral-900 duration-300 cursor-pointer items-center gap-1 font-bold text-white rounded-full p-2 md:p-3 lg:p-4 text-sm md:text-base'>
          <UserPlus className='w-4 h-4 md:w-5 md:h-5' />
          <span>Criar Conta</span>
        </button>
      </aside>
    </header>
  )
}
