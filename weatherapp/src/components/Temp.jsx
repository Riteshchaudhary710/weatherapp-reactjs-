import React,{useState,useEffect} from 'react'

export default function Temp() {
    const [city, setcity] = useState(null);
    const [search,setSearch]=useState("kathmandu");
    useEffect( () => {
        const fetchApi = async () =>{
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c304f07ea3ab858fce3ecf7b957d9c49`;
            const response = await fetch(url);
           // console.log(response);
            const resJson =  await response.json();
           // console.log(resJson);
           setcity(resJson.main);
        }
        fetchApi();
    },[search])
    return (
        <>
        <div className="box">
            <div className="inputData">
                <input type="search"  className="inputField"  onChange={(e) => {setSearch(e.target.value)}}/>
            </div>
        </div>
        {!city ? (
            <p>No Data Found</p>
        ): (
        <div className="info">
            <h2 className="Location">{search}</h2>
            <h2 className="temp">
                {city.temp}deg  celcius
            </h2>
        </div>)}
        </>
    )
}
