export function About() {
  return (
    <section className='py-10 md:py-20'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold mb-10'>
        Sobre a Yetu.edu
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
        <div>
          <h2 className='text-2xl md:text-3xl font-bold mb-4'>Nossa Missão</h2>
          <p className='text-lg text-neutral-600 mb-6'>
            Empoderar estudantes e educadores, proporcionando uma plataforma
            digital que facilite o acesso a conteúdos acadêmicos, conecte
            mentores a alunos e promova um aprendizado colaborativo e inovador.
          </p>

          <h2 className='text-2xl md:text-3xl font-bold mb-4'>
            O Que Oferecemos
          </h2>
          <ul className='space-y-3 text-neutral-600'>
            <li className='flex items-start gap-2'>
              <span className='text-orange-500 font-bold'>•</span>
              <span>Plataforma de ensino online integrada</span>
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-orange-500 font-bold'>•</span>
              <span>
                Ferramentas de colaboração para estudantes e professores
              </span>
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-orange-500 font-bold'>•</span>
              <span>Biblioteca digital com recursos educacionais</span>
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-orange-500 font-bold'>•</span>
              <span>Sistema de gestão de aprendizagem para instituições</span>
            </li>
          </ul>
        </div>

        <div className='bg-orange-50 p-6 md:p-8 rounded-2xl'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4 text-orange-500'>
            Nossos Valores
          </h2>
          <div className='space-y-6'>
            <div>
              <h3 className='font-bold text-lg mb-2'>Acessibilidade</h3>
              <p className='text-neutral-600'>
                Garantir que qualquer estudante possa aprender sem limitações
                financeiras ou geográficas.
              </p>
            </div>
            <div>
              <h3 className='font-bold text-lg mb-2'>Inovação</h3>
              <p className='text-neutral-600'>
                Usar a tecnologia para transformar a forma como aprendemos e
                ensinamos.
              </p>
            </div>

            <div>
              <h3 className='font-bold text-lg mb-2'>Exelência</h3>
              <p className='text-neutral-600'>
                Oferecer recursos educacionais de alta qualidade para apoiar o
                crescimento dos alunos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
