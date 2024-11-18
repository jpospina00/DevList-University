import { Link } from 'react-router-dom';

export default function ButtonSidebar({ title, img, to, selected, updateSelected }) {
    return (
        <Link onClick={() => updateSelected({ title, img, to, selected })}
            className={`cursor-pointer flex flex-col items-center justify-around text-center w-full h-16 ${selected ? "bg-disable bg-opacity-30" : ""}`}
            to={to}>
            <img className='w-6 h-6' src={img} />
            <p className='text-[80%]'> {title} </p>
        </Link>
    )
}