export default function InputsDatepicker({showCalendar, day, month, year, getDate}) {
    return (
        <div className='flex flex-col justify-around w-4/5 h-16'>
            <label> Fecha </label>
            <div className='flex w-full justify-between items-center relative'>
                <input onClick={() => setShowCalendar(true)} required className='h-7 pl-2 w-[20%] border border-dark rounded-lg hover:border-secondary0Hover outline-secondary0Hover' placeholder='Dìa' type="text" defaultValue={day} readOnly />
                <input onClick={() => setShowCalendar(true)} required className='h-7 pl-2 w-[20%] border border-dark rounded-lg hover:border-secondary0Hover outline-secondary0Hover' placeholder='Mes' type="text" defaultValue={month} readOnly />
                <input onClick={() => setShowCalendar(true)} required className='h-7 pl-2 w-[20%] border border-dark rounded-lg hover:border-secondary0Hover outline-secondary0Hover' placeholder='Año' type="text" defaultValue={year} readOnly />
                <button onClick={() => setShowCalendar(!showCalendar)} className='w-[40px] h-[40px] cursor-pointer outline-none'>
                    <img src={calendarIcon} alt="Seleccionar Fecha" />
                </button>
                <button onClick={() => getDate(null)} className='w-[40px] h-[40px] cursor-pointer outline-none'>
                    <img src={calendarIcon} alt="Seleccionar Fecha" />
                </button>
                {showCalendar && <DatePicker setSelectedDate={setSelectedDate} selectedDate={selectedDate} onChange={getDate} setShowCalendar={setShowCalendar} />}
            </div>
        </div>
    )
}