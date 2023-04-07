
 const Icons = (icon)=>{
        console.log(icon);
    const Iconos = {
        'Thunderstorm':'./icons/thunderstorms-rain.svg',
        'Drizzle': './icons/drizzle.svg',
        'Rain': './icons/rain.svg',
        'Snow': './icons/snowy.svg',
        'Clear': './icons/clear-day.svg',
        'Atmosphere': './assets/icons/weather.svg',
        'Clouds': './icons/fog.svg',
        'Fog': './icons/fog.svg',
        'Haze': './icons/haze.svg',
        'Smoke': './icons/smoke.svg',
        'default': './icons/clear-day.svg'
      };
      
      
        const iconsvg = Iconos[icon] || Iconos['default'];
        console.log(iconsvg);
        return iconsvg;
}
export default Icons;