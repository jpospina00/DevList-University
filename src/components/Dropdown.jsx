export default function Dropdown({ selectedOption, list, handleOptionChange, setIsOpen, isOpen }) {
    return (
        <div className="relative cursor-pointer transition duration-300 z-20">
            <div
                className="border border-dark p-2 mb-1 rounded flex items-center justify-between"
                onClick={() => setIsOpen(!isOpen)} // Alterna el estado del dropdown
            >
                <span>
                    {selectedOption === 'all' ? 'All' : selectedOption}
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    className={`transform transition duration-300 ${isOpen ? 'rotate-0' : 'rotate-[-90deg]'}`}
                >
                    <path
                        d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                    />
                </svg>
            </div>
            <div
                className={`border border-dark flex gap-2 flex-col items-center rounded bg-[#e9edf5] absolute w-full transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'}`}
            >
                {list.map((option) => (
                    <div key={option} title={option} className='w-[95%]'>
                        <input
                            id={option}
                            name="option"
                            type="radio"
                            value={option}
                            checked={selectedOption === option}
                            onChange={handleOptionChange}
                            className="hidden"
                        />
                        <label
                            className={`cursor-pointer border border-dark block rounded p-1 transition duration-300 mb-2 w-full text-left hover:bg-primary0 ${selectedOption === option ? 'hidden' : ''
                                }`}
                            htmlFor={option}
                        >
                            {option === 'all' ? 'All' : option}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}