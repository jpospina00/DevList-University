import FilterIcon from "../assets/FilterIcon.svg";
import SearchIcon from "../assets/SearchIcon.svg";
import Trash from "../assets/Trash.svg";
import Headers from "../Headers";
import ApiUrl from "../Api";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import CardUsers from "../components/CardUsers";
import { Link } from "react-router-dom";

export default function Users() {

    const search = useRef();
    const [monitors, setMonitors] = useState([]);
    const [profesors, setProfesors] = useState([]);
    const [notFound, setNotFound] = useState([]);
    const [open, setOpen] = useState(false);

    const handleSearch = () => {
        setSearchValues(search.current.value?.trim());
    };

    useEffect(() => {
        axios.get(`${ApiUrl}user/`, Headers('application/json')).then((res) => {
            console.log(res);
            let users = res.data;
            console.log(users)
            setMonitors(users.filter(user => user.roleId == 2));
            setProfesors(users.filter(user => user.roleId == 3));
            console.log(profesors)
        }).catch((err) => {
            setNotFound(!notFound);
        })
    }, []);

    return (
        <div className="w-full h-[100%] overflow-hidden flex flex-col gap-5 items-center pt-5">
            <div className="flex w-[90%] justify-between">
                <div className="flex items-center justify-start w-[50%]">
                    <div className="w-[500px] relative">
                        <input ref={search} className="border border-[#229799] w-full rounded-xl p-1 outline-none" type="text" placeholder="Buscar" onChange={handleSearch} />
                        <img className="absolute top-3 right-3 w-[17px] h-[14px]" src={SearchIcon} alt="Buscar" />
                    </div>
                </div>
                <div className="flex items-center gap-5 w-[50%] justify-around">
                    <Link to={"/UserRegister"} className="w-[160px] h-[30px] border border-[#214455] text-center rounded-lg hover:bg-secondary0Hover hover:text-disable">
                        Agregar Usuario
                    </Link>
                    <button className="w-[160px] h-[30px] border border-[#214455] rounded-lg hover:bg-secondary0Hover hover:text-disable">
                        Seleccionar todos
                    </button>
                    <button className="outline-none flex items-center">
                        <p className="text-[#B1B1B1]">
                            Eliminar
                        </p>
                        <img src={Trash} alt="Eliminar" />
                    </button>
                </div>
            </div>
            <div className="flex flex-col w-[90%] h-[100%] gap-5">
                <div className="w-full h-full">
                    <h1 className="font-montserrat font-semibold text-[100%]"> Profesores </h1>
                    <div className="flex flex-col h-full w-full gap-5 overflow-scroll">
                        {profesors.map((user, i) => <CardUsers
                            name={user.name}
                            email={user.email}
                            createdAt={user.createdAt}
                            phone={user.phone}
                            activo={user.active}
                            open={open}
                            roleId={user.roleId}
                            setOpen={setOpen}
                            userId={user.userId} key={i} />)}
                    </div>
                </div>
                <div className="w-full h-full">
                    <h1 className="font-montserrat font-semibold text-[100%]"> Monitores </h1>
                    <div className="flex flex-col h-full w-full gap-5 overflow-scroll">
                        {monitors.map((user, i) => <CardUsers
                            name={user.name}
                            email={user.email}
                            createdAt={user.createdAt}
                            phone={user.phone}
                            activo={user.active}
                            open={open}
                            roleId={user.roleId}
                            setOpen={setOpen}
                            userId={user.userId} key={i} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}