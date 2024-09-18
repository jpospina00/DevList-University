import imgHome from '../assets/ImgHome.png';

export default function Home() {
    return (
        <main className="relative top-[95px]">
            <img className="absolute w-full h-[304px]" src={imgHome} alt="Fondo" />
            <div className='flex items-center justify-center h-[304px]'>
                <h1 className='font-montserrat text-5xl'> Pagina Principal </h1>
            </div>
        </main>
    )
}