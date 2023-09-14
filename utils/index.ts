export async function fetchCars(){
    const headers = {
        'X-RapidAPI-Key': '5c3267f12fmsh90addea9098fe71p1a7fc8jsn441dd385e153',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers : headers,
    }); 

    const result = await response.json(); 

    return result; 
}