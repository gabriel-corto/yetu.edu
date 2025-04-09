import { HelpCircle, Globe, FileText, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className='text-neutral-900 pt-12 pb-8 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12'>
          <div className='flex items-center gap-2'>
            <img src='/logo.png' alt='Valu.edu' className='h-8' />
          </div>
          <div className='col-span-2 md:col-span-1'>
            <h3 className='text-lg font-bold mb-4 flex items-center gap-2'>
              <Globe className='w-5 h-5 text-orange-400' />
              Institucional
            </h3>
            <ul className='space-y-3'>
              <li>
                <a href='#' className='hover:text-orange-300 transition-colors'>
                  Sobre nós
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-orange-300 transition-colors'>
                  Contratos
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-orange-300 transition-colors'>
                  Carreira
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-orange-300 transition-colors'>
                  Cultura
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-bold mb-4 flex items-center gap-2'>
              <HelpCircle className='w-5 h-5 text-orange-400' />
              Ajuda
            </h3>
            <ul className='space-y-3'>
              <li>
                <a href='#' className='hover:text-orange-300 transition-colors'>
                  Centro de ajuda
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-orange-300 transition-colors'>
                  Reportar um bug
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-orange-300 transition-colors'>
                  Status do sistema
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-bold mb-4 flex items-center gap-2'>
              <FileText className='w-5 h-5 text-orange-400' />
              Legal
            </h3>
            <ul className='space-y-3'>
              <li>
                <a href='#' className='hover:text-orange-300 transition-colors'>
                  Termos de uso
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-orange-300 transition-colors'>
                  Política de privacidade
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-orange-300 transition-colors'>
                  Cookies
                </a>
              </li>
            </ul>
          </div>

          <div className='col-span-2 md:col-span-1'>
            <h3 className='text-lg font-bold mb-4 flex items-center gap-2'>
              <Phone className='w-5 h-5 text-orange-400' />
              Contato
            </h3>
            <ul className='space-y-3'>
              <li className='flex items-center gap-2'>
                <Mail className='w-4 h-4 text-orange-300' />
                <a className='hover:text-orange-300 transition-colors'>
                  yetued@gmail.com
                </a>
              </li>
              <li className='flex items-center gap-2'>
                <Phone className='w-4 h-4 text-orange-300' />
                <span>+244 990 000 111</span>
              </li>
              <li className='flex items-start gap-2'>
                <MapPin className='w-4 h-4 text-orange-300 mt-1' />
                <span>Samba</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
