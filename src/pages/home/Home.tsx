
function Home() {
    return (
        <>
            <div className="flex justify-center bg-blue-400">
                <div className='grid grid-cols-2 text-white container'>
                    <div className="flex flex-col justify-center items-center gap-4 py-4">
                        <h3 className='font-bold text-5xl'>
                            Você está na farmácia online MRGS!
                        </h3>
                        <p className='text-xl text-center'>Aqui você encontra os melhores preços!</p>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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