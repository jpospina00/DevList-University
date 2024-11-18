import calendarIcon from "../assets/calendarIcon.svg";
import DatePicker from "./DatePicker";
import clearIcon from "../assets/clearIcon.svg";

export default function InputsDatepicker({ showCalendar, day, month, year, getDate, setSelectedDate, selectedDate, setShowCalendar }) {
  return (
    <div className="flex flex-col justify-around w-4/5 h-16 gap-2 font-montserrat">
      <label className="text-[80%]"> Fecha </label>
      <div className="flex w-full justify-between items-center relative">
        <input
          onClick={() => setShowCalendar(true)}
          required
          className="p-2 w-[20%] border border-dark rounded-lg hover:border-secondary0Hover outline-secondary0Hover"
          placeholder="Día"
          type="text"
          defaultValue={day}
          readOnly
        />
        <input
          onClick={() => setShowCalendar(true)}
          required
          className="p-2 w-[20%] border border-dark rounded-lg hover:border-secondary0Hover outline-secondary0Hover"
          placeholder="Mes"
          type="text"
          defaultValue={month}
          readOnly
        />
        <input
          onClick={() => setShowCalendar(true)}
          required
          className="p-2 w-[20%] border border-dark rounded-lg hover:border-secondary0Hover outline-secondary0Hover"
          placeholder="Año"
          type="text"
          defaultValue={year}
          readOnly
        />
        <button
          onClick={() => setShowCalendar(!showCalendar)}
          className="w-[40px] h-[40px] cursor-pointer outline-none"
        >
          <img
            className="w-full h-full"
            src={calendarIcon}
            alt="Seleccionar Fecha"
          />
        </button>
        <button
          onClick={() => getDate(null)}
          title="Add New"
          className="group cursor-pointer outline-none rotate-45 duration-300"
        >
          <svg
            width="35px"
            height="35px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="stroke-secondary2 fill-none group-hover:stroke-[#c20000] group-hover:duration-0 duration-300"
          >
            <path
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
              stroke-width="1.5"
            ></path>
            <path d="M8 12H16" stroke-width="1.5"></path>
            <path d="M12 16V8" stroke-width="1.5"></path>
          </svg>

        </button>
        {showCalendar && (
          <DatePicker
            setSelectedDate={setSelectedDate}
            selectedDate={selectedDate}
            onChange={getDate}
            setShowCalendar={setShowCalendar}
          />
        )}
      </div>
    </div>
  );
}
