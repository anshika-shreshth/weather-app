

const apikey= " ";
const apiurl= "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox =document.querySelector(".search input");
const searchbtn= document.querySelector(".search button");
const weathericon= document.querySelector(".weather-icon");

 async function checkweather(city){
    const response = await fetch (apiurl+city+ `&appid=${apikey}`);
    var data= await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";

    if(data.weather[0].main== "Clouds"){
      weathericon.src="clouds.png";

    }
    else if(data.weather[0].main== "Clear"){
      weathericon.src="clear.png";

    }
    else  if(data.weather[0].main== "Rain"){
      weathericon.src="rain.png";

    }
    else if(data.weather[0].main== "Drizzle"){
      weathericon.src="drizzle.png";

    }
    else if(data.weather[0].main== "Mist"){
      weathericon.src="mist.png";


    }
    document.querySelector(".weather").style.display="block";
    searchbox.value = "";

   

 }

 searchbtn.addEventListener("click",()=>{
   checkweather(searchbox.value);

 })

 //checkweather()
