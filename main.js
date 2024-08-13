const btn=document.querySelector('.search-box button');
let city =document.querySelector('.search-box input');
let temp = document.querySelector('.temprature')
let humidity=document.querySelector('#H-value');
let wind_speed =document.querySelector('#W-value');
let description = document.querySelector('.description')
let input = document.querySelector('.search-box input')
const img = document.querySelector('.weather-box img');
function fetchweather(){
    if(city.value.trim()===''){
        alert('please enter a valid city name');
        return;
    }
    else{
        fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=83b12a6dbd4ff7dfaff8e5907f2a6c5e&units=metric`).then(response=> response.json()).then(data => {
            console.log(data);
            switch(data.weather[0].main){
                case 'Clear':
                    img.src ='images/clear.png';
                    break;
                case 'Rain':
                    img.src ='images/rain.png';
                    break;
                case 'Clouds':
                    img.src ='images/cloud.png';
                    break;
                case 'Mist':
                    img.src ='images/mist.png';
                    break;
                case 'Snow':
                    img.src ='images/snow.png';
                    break;
                case 'Haze':
                    img.src ='images/mist.png';
                    break;
                default:
                    img.src ='images/cloud.png'

            }
            temp.textContent = data.main.temp + ' °C';
            humidity.textContent = data.main.humidity + ' %';
            wind_speed.textContent = data.wind.speed + ' Km/h';
            description.textContent = data.weather[0].description;
        })
        .catch(error => {
            temp.textContent = '404';
            humidity.textContent = '-' + ' %';
            wind_speed.textContent = '-' + ' Km/h';
            description.textContent = 'not found';
            img.src ='images/404.png'

        })
    }
}
btn.onclick = fetchweather;
input.addEventListener('keydown',(event)=>{
    if (event.key==='Enter') {
        fetchweather();
    }
})