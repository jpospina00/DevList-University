import { Link } from 'react-router-dom';

export default function ButtonNav({ name, selected, to, updateSelected, onClick }) {
  return (
    <>
      {onClick ?
        <p onClick={onClick} className={
          `hover:text-dark hover:bg-[#6ddbd8] w-[100px] h-[50px] flex items-center justify-center rounded-lg ${selected ? "bg-[#6ddbd8] text-dark" : ""}`
        }>
          {name}
        </p>
        : <Link to={to} onClick={() => updateSelected({ name, selected, to })}>
          <p className={
            `hover:text-dark hover:bg-[#6ddbd8] w-[100px] h-[50px] flex items-center justify-center rounded-lg ${selected ? "bg-[#6ddbd8] text-dark" : ""}`
          }>
            {name}
          </p>
        </Link>}
    </>
  );
}
