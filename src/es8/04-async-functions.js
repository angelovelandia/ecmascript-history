async function asyncFunction () {}

const asyncFunction = async () => {}

async function asyncFunction () {
    try {
      const response = await promesa()
      return response
    } catch (error) {
      return error
    }
}

const fnAsync = () => {
    return new Promise ((resolve, reject) => {
      (true)
       ? setTimeout(resolve ('AsynC!!'), 2000)
        : reject (new Error ('Error!'));
   });
}

const anotherFn = async ()=> {
    const somethig = await fnAsync();
    console.log(somethig);
    console.log("Hi!");
}

console.log("Before")
anotherFn();
console.log("After")