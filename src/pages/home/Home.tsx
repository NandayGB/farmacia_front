import './Home.css';

function Home() {
    return (
        <>
        <div className="bg-indigo-900 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja Bem vindo a Farmácia Nanday!</h2>
              <p className='text-xl'>Na nossa farmácia online, você encontra tudo o que precisa para cuidar da sua saúde e bem-estar,
               com conveniência, segurança e qualidade garantida.  </p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-blue-800 py-2 px-4'>Cadastrar Produtos</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
             
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;