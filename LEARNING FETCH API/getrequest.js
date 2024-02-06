let p = fetch('https://goweather.herokuapp.com/weather/Ny')
//to get all the data that is in the api
p.then((value1) => {
    console.log(value1.status)//return the status i.e 200-299
    console.log(value1.ok)//return boolean true if everything  is alright
    // console.log(value1.text)//for text
    console.log(value1.headers)
    return value1.json()//return a javascript object which is parsed 
}).then((value2) => {
    console.log(value2)
})
