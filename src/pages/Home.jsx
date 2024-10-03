import imgHome from '../assets/ImgHome.png';
import Card from '../components/Card';
import Filters from '../components/Filters';
import img from '../assets/Images/Images1.png';
import img2 from "../assets/Images/Images2.png";
import img3 from "../assets/Images/Images3.png";
import img4 from "../assets/Images/Images4.png";


export default function Home() {

    const data = [
        {
            img: img,
            title: "Laptop Dell Inspiron 15",
            available: true,
            stock: 3
        },
        {
            img: img2,
            title: "Video beam",
            available: false,
            stock: 5
        },
        {
            img: img3,
            title: "Tablet",
            available: true,
            stock: 10
        },
        {
            img: img4,
            title: "Parlantes",
            available: false,
            stock: 1
        },
    ];

    return (
        <main className="relative top-[145px]">
            <img className="absolute w-full h-[304px]" src={imgHome} alt="Fondo" />
            <div className='flex items-center justify-center h-[300px]'>
                <h1 className='font-montserrat text-5xl'> Pagina Principal </h1>
            </div>
            <Filters />
            <div className='pt-28 w-screen grid grid-cols-2 place-items-center gap-14'>
                {
                    data.map((device, i) => <Card key={i} img={device.img} title={device.title} available={device.available} stock={device.stock}/>)
                }
            </div>
        </main >
    )
}