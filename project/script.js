const url = 'https://open-weather13.p.rapidapi.com/city/landon/EN';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '95d1ec6019mshefaaac06ad8026bp1b58f0jsnf4bf4dc22a77',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

let myFun = async ()=>{
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        document.getElementById("para").innerHTML = result;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
document.getElementById("btn").addEventListener('click', myFun)
