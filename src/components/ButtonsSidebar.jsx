import { Link } from 'react-router-dom';

export default function ButtonSidebar({title, img, to}) {
    return (
        <Link className='hover:cursor-pointer flex flex-col items-center justify-around text-center w-full h-14' to={to}>
            <img className='w-6 h-6' src={img} />
            <p> {title} </p>
        </Link>
    )
}