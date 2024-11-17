import { useEffect, useState } from "react";
import InputsDatepicker from "./InputsDatepicker";
import DropDown from "./Dropdown";


export default function PopupRequest() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptionName, setSelectedOptionName] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    generateHours();
    console.log(list);
  }, []);

  const generateHours = () => {
    let initHour = 7;
    let endHour = 22;
    let listHours = [];

    for (let i = initHour; i <= endHour; i++) {
      listHours.push({ id: `${i}:00`, name: `${i}:00` });
      listHours.push({ id: `${i}:30`, name: `${i}:30` });
    }
    setList(listHours);
  };

  const getDate = (date) => {
    if (date == null) {
      setYear("");
      setMonth("");
      setDay("");
    } else {
      setYear(date.getFullYear());
      setMonth(date.getMonth() + 1);
      setDay(date.getDate());
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOptionName(event.target.id);
    setSelectedOption(event.target.value);
    setIsOpen(false); // Cierra el dropdown al seleccionar una opción
  };

  return (
    <div className="fixed w-screen h-screen bg-dark flex items-center justify-center bg-opacity-50 z-40 top-0">
      <div className="flex flex-col bg-disable w-[35%] h-[40%] items-center justify-center gap-10 rounded-3xl">
        <h3 className="font-montserrat font-bold text-2xl w-[90%] ">
          Fecha programada:
        </h3>
        <div className="w-[90%] flex gap-5 justify-between ">
          <InputsDatepicker
            day={day}
            month={month}
            year={year}
            getDate={getDate}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            showCalendar={showCalendar}
            setShowCalendar={setShowCalendar}
          />
          <div className="flex flex-col gap-2 w-[30%] font-montserrat">
            <label>hora</label>
            <DropDown
              handleOptionChange={handleOptionChange}
              isOpen={isOpen}
              list={list}
              selectedOption={selectedOption}
              selectedOptionName={selectedOptionName}
              setIsOpen={setIsOpen}
            />
          </div>
          <div className="flex flex-col gap-2 items-end w-[25%] ">
            <label className="w-full font-montserrat">
                horas a usar
            </label>
            <input
              required
              className="p-2 w-full border border-dark rounded-lg hover:border-secondary0Hover outline-secondary0Hover"
              type="number"
            />
          </div>
        </div>
        <div className="flex justify-center gap-7 w-full h-[10%] font-montserrat">
          <button className="w-1/5 h-full border border-secondary0 text-secondary0 rounded-lg hover:bg-secondary0Hover hover:text-disable">
            Cancelar
          </button>
          <button className="w-1/5 h-full border border-secondary0 text-secondary0 rounded-lg hover:bg-secondary0Hover hover:text-disable">
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
