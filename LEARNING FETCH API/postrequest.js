const createTodo = async () => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            title: 'Harsh',
            body: 'Sahu Brand',
            userId: 1,
        }),
    }
    let p =await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    return response
}
const  getTodo= async(id) =>{
      let response = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
      let r = await response.json()
      return r
}       


const mainFunc = async () => {
    let todo = {
        title: 'Harsh2',
         body: 'Sahu Brand2',
        userId: 1,
    }
    let todor = await createTodo(todo)
    console.log(todor)
    console.log(await getTodo(101))//to get the id
    //this is how await and async works where async is made for promise and return response then await
}


mainFunc()