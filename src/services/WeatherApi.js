export default function WeatherApi(city) {
    const api = {
        key: "4cb831d67ca2539c40dbd210c18a714a",
        base: "http://api.openweathermap.org/data/2.5/"
    }
    const search = async () => {
        const response = await fetch(`${api.base}/weather?q=${city}&units=metric&APPID=${api.key}`);
        const data = await response.json();
        console.log(data);
        return await data;
    }
    return search();
}