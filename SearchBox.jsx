import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function SearchBox({updateInfo}){ 
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const key = "0e74ad2e28287d4a3cf09b34974880df";

    let getWeatherInfo = async ()=>{
        try{
            let response = await fetch(`${URL}?q=${city}&appid=${key}&units=metric`);
            let jsonResponse= await response.json();
            console.log(jsonResponse);
            let result={
                city: city, 
                temp: jsonResponse.main.temp,
                temp_min: jsonResponse.main.temp_min, 
    temp_max: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feels_like: jsonResponse.main.feels_like, 
                weather: jsonResponse.weather[0].description
            };
        // console.log(result);
        return result;
        }
        catch(error){
            throw error;
        }
    }
    
    let handleChange = (event)=>{
        setCity(event.target.value);
    }
    let handleSubmit = async (e)=>{
        try{
            e.preventDefault(); 
            setCity("");
            getWeatherInfo();
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }catch(error){
            setError(true);
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <TextField id="City" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br></br><br></br>
                <Button variant="contained" type='submit'>Search</Button>
                {error && <p style={{color:"red"}}>No such place found !</p>}
            </form>
 
        </div>
    )
}