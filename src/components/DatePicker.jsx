import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek, isBefore } from 'date-fns';

const DatePicker = ({ selectedDate, onChange, setShowCalendar, setSelectedDate }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const today = new Date();

    const handleDateClick = (date) => {
        // Solo permite seleccionar si la fecha no es anterior a hoy
        if (!isBefore(date, today)) {
            onChange(date);
            setSelectedDate(date);
            setShowCalendar(false);
        }
    };

    const hasAvailableDaysInPreviousMonth = (date) => {
        const previousMonth = subMonths(date, 1);
        const startDate = startOfMonth(previousMonth);
        const endDate = endOfMonth(previousMonth);
        const days = eachDayOfInterval({ start: startOfWeek(startDate), end: endOfWeek(endDate) });

        // Verifica si hay días disponibles en el mes anterior
        return days.some(day => !isBefore(day, today));
    };

    const handlePreviousMonth = () => {
        // Solo permite navegar hacia atrás si hay días disponibles en el mes anterior
        if (hasAvailableDaysInPreviousMonth(currentDate)) {
            setCurrentDate(subMonths(currentDate, 1));
        }
    };

    const handleNextMonth = () => {
        setCurrentDate(addMonths(currentDate, 1));
    };

    const renderDays = () => {
        const startDate = startOfMonth(currentDate);
        const endDate = endOfMonth(currentDate);
        const days = eachDayOfInterval({ start: startOfWeek(startDate), end: endOfWeek(endDate) });

        return days.map((day, index) => (
            <div
                key={index}
                className={`day cursor-pointer p-2 flex items-center justify-center rounded hover:bg-primary0 ${selectedDate && format(day, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd') ? ' bg-primary0 text-background' : ''} ${isBefore(day, today) ? 'text-secondary2 cursor-not-allowed hover:bg-disable' : ''}`}
                onClick={() => handleDateClick(day)}
            >
                {format(day, 'd')}
            </div>
        ));
    };

    return (
        <div className="absolute bottom-[50px] right-0 bg-background border border-third0 p-2 shadow-lg z-50">
            <div className="header flex justify-between items-center mb-2">
                <button className="nav-button" onClick={handlePreviousMonth} disabled={!hasAvailableDaysInPreviousMonth(currentDate)}>{'<'}</button>
                <span>{format(currentDate, 'MMMM yyyy')}</span>
                <button className="nav-button" onClick={handleNextMonth}>{'>'}</button>
            </div>
            <div className="days grid grid-cols-7 gap-1">
                {renderDays()}
            </div>
        </div>
    );
};

export default DatePicker;