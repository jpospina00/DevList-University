import filterIcon from '../assets/Filter.svg';

export default function Filters() {
    return (
        <div className='flex w-screen h-[70px] items-center justify-around bg-[#18333F] text-disable'>
            <div className='flex items-center w-6/12'>
                <div className='flex gap-2 pr-[50px] border-r-2 border-r-disable'>
                    <img src={filterIcon} alt="Filter" />
                    <p> Filtrar </p>
                </div>
                <p className='pr-[50px] pl-[50px] border-r-2 border-r-disable'>
                    Mostrar 1-12 resultados
                </p>
                <div className='flex items-center w-[250px] justify-around gap-4'>
                    <p className='pl-[50px]'>
                        Mostrar
                    </p>
                    <div className="menu z-10">
                        <div className="item">
                            <a href="#" className="link">
                                <span> 12 </span>
                                <svg viewBox="0 0 360 360" xml:space="preserve">
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            id="XMLID_225_"
                                            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                                        ></path>
                                    </g>
                                </svg>
                            </a>
                            <div className="submenu">
                                <div className="submenu-item">
                                    <a href="#" className="submenu-link"> 16 </a>
                                </div>
                                <div className="submenu-item">
                                    <a href="#" className="submenu-link"> 18 </a>
                                </div>
                                <div className="submenu-item">
                                    <a href="#" className="submenu-link"> 20 </a>
                                </div>
                                <div className="submenu-item">
                                    <a href="#" className="submenu-link"> 22 </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <form className="form relative w-[30%]">
                <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
                    <svg
                        width="17"
                        height="16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-labelledby="search"
                        className="w-5 h-5 text-dark"
                    >
                        <path
                            d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                            stroke="currentColor"
                            stroke-width="1.333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                </button>
                <input
                    className="input text-dark w-full rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-[#a3ece7] placeholder-dark transition-all duration-300 shadow-md"
                    placeholder="Search..."
                    required=""
                    type="text"
                />
                <button type="reset" className="absolute right-3 -translate-y-1/2 top-1/2 p-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-dark"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>
            </form>
        </div>
    )
}