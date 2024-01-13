/*const p = Promise((resolve,reject)=>{
    setInterval(()=>{
        resolve('hio')
    },1000)
})


console.log(p) */

async function getData(){
    return "shrajik"
}
const dataPromise = getData();
dataPromise.then((res)=>console.log(res));