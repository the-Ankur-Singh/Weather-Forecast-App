import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}){
    const init_URL = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let hot_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let cold_URL = "https://plus.unsplash.com/premium_photo-1676573201503-f1f0354bb387?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let rain_URL = "https://media.istockphoto.com/id/522795232/photo/rain-water-drop-falling-to-the-floor-in-rainy-season.jpg?s=2048x2048&w=is&k=20&c=E3kkYqudUGR_RWiiKZ2n1RddJy1UdO37BpC-jQAlI-A=";
    
    return(
        <div> 
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={info.humidity > 80 ? rain_URL : info.temp> 15 ? hot_URL : cold_URL} 
                title="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>{/* component span is used to prevent error in the console window */}
              <p>Temprature={info.temp}&deg;C</p> {/*&deg is used to add degree symbol in the html file */}
              <p>Humidity={info.humidity}&deg;C</p>
              <p>Min Temp={info.temp_min}&deg;C</p>
              <p>Max Temp={info.temp_max}&deg;C</p>
              <p>The weather can be described as <b><i>{info.weather}</i></b> feels like {info.feels_like}</p>
            </Typography>
          </CardContent>
        </Card>
        </div>
    ) 
}