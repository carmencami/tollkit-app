import Chairs from "../../asset/chairs.png";
import "./style.css";
import {useState} from "react";
import {useNavigate} from "react-router";

const Home = () =>{
    const navigate = useNavigate();
    const [search, setSearch]= useState('');

    const handleInputChange =({target: {value}}) =>{
        setSearch(value);
    };

    const handleCleanClick =() =>{
        setSearch("");
    };

    const handleSearchClick =() =>{
        navigate('/results/${search.trim()}');
    };

    console.log(navigate);



return(
    <div className="flex h-screen overflow-hidden">
        <div className="w-2/5">
        <img src={Chairs} alt="Movie chairs" className="w-full h-full object-cover"/>
        </div>
    <div className="w-3/5 flex justify-center items-center flex-col px-10">
            <h2 className="text-4xl font-lato font-bold">Busca tu película...</h2>
            <input className="bg-special-gray w-full font-lato my-3 
            h-9 p-1 border focus:outline-none focus:ring-2 focus:ring-gray-500 rounded"
            value={search}
            onChange={handleInputChange}
            />
        <div className="flex w-full justify-between">
            <button className="button-acept w-full font-lato shadow-lg h-9"
            style={{width: "48%"}}
            onClick={handleSearchClick }
            >
                Busca
            </button>
            <button className=" button-acept w-full font-lato shadow-lg h-9"
            style={{width: "48%"}}
            onClick={handleCleanClick}
            >
                Limpiar
            </button>
        </div>
        </div>
    </div>
)
}

export default Home;
