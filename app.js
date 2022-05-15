let input = document.querySelector('input');
let button = document.querySelector('button');
let output = document.querySelector('.output-container')
let body = document.body;

let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let p3 = document.querySelector('.p3');
let p4 = document.querySelector('.p4');
let p5 = document.querySelector('.p5');
let p6 = document.querySelector('.p6');

function changeweather(response,temp){
if(temp<=0){
    body.style.backgroundImage = "url('https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1478719059408-592965723cbc%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D712%26q%3D80')";    
}else if (
response =='overcast clouds' ||
response == 'scattered clouds' || 
response == 'broken clouds'){
body.style.backgroundImage  = "url('https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1483977399921-6cf94f6fdc3a%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D793%26q%3D80')";
}else if (response == 'light rain'||
response == 'heavy rain'|| 
response == 'moderate'||
response=='rain'){
    body.style.backgroundImage  = "url('https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1519692933481-e162a57d6721%3Fixid%3DMnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlYXZ5JTIwcmFpbnxlbnwwfDB8MHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D60')";
}else if (response == 'haze'){
    body.style.backgroundImage  = "url('https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1519692933481-e162a57d6721%3Fixid%3DMnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlYXZ5JTIwcmFpbnxlbnwwfDB8MHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D60')";
}else{
    body.style.backgroundImage = "url('https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1553901753-215db344677a%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D751%26q%3D80')"
}
}


button.addEventListener('click' , function(){
    let cityName = input.value;

    if(cityName != '')
    output.style.display = 'block';
    let desc;
    let temp;
    let tempMn , tempMax , tempALL ; 
    let humidity ;
    let time = new Date();

    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d47df3c22c4ef496ed4ba3e0a22f2237`;
    let xhr =new XMLHttpRequest();
    xhr.open('get',API)
    xhr.onload= function(){
        let data = JSON.parse(xhr.responseText);
       console.log(data);

       desc = data.weather[0].description;
       temp = data.main.temp;
       tempMin = data.main.temp_min;
       tempMax = data.main.temp_max;
       humidity = data.main.temp_humidity;

       temp = temp - 273.15;
       temp = Math.round(temp);
       changeweather(desc, temp)
       temp = temp + "c";

       p1.innerHTML = cityName;
       p1.innerHTML = 
    }
    xhr.send()
})