
function Home() {
    return (
        <>
            <div className="bg-purple-500 flex justify-center">
            <div className="container grid grid-cols-2 text-white">
            <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">
                            FÁRMACIA NANDAY
                        </h2>
                        <p className='text-xl'>
                        Aqui você poderá cadastrar seus produtos de forma rápida e prática,
                         otimizando seu tempo e facilitando o gerenciamento de estoque
                        </p>
                    </div>

                    <div className="flex justify-center ">
                        <img src="https://br.freepik.com/vetores-premium/farmacia-com-enfermeira-no-balcao-personagem-de-desenho-animado-de-farmacia_3693336.htm?epik=dj0yJnU9TjN5Sm1sREZPdTZzbnllSENIZGZtS3U4MDJqS3FhZWgmcD0wJm49MWF3WnphNVVhLUs0XzhkSy1EYTl2USZ0PUFBQUFBR1ltWGdJ"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home