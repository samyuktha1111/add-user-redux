import axios from "axios";

function step1(value,error){
    return new Promise((resolve,reject)=>
    {
        if(!error)
        {
            resolve(value+10);
        }
        else{
            reject('Something went wrong')
        }
    });
}
function step2(value,error){
    return new Promise((resolve,reject)=>
    {
        if(!error)
        {
            resolve(value+10);
        }
        else{
reject('Something went wrong')
        }
    });
}
function step3(value,error)
{
    return new Promise((resolve,reject)=>
    {
        if(!error)
        {
            resolve(value+10)
        }
        else{
            reject('Something went wrong')
        }
    })
}
//promise
step1(10,false)
.then((result1)=>step2(result1,false))
.then ((result2)=>step3(result2,false))
.then((result3)=>console.log(result3))
.catch((error)=>console.log(error))

//Async-await
async function result()
{
    let result1=await step1(10,false)
    let result2=await step2(result1,false)
    let result3=await step3(result2,false)
    console.log(result3)
}
result()
//axios
axios.get('https://jsonplaceholder.typicode.com/users')
.then((response)=>console.log(response.data))
.catch((err)=>console.log(err))

//another example of promise
var promise1=new Promise((resolve,reject)=>
{
    const error=false
    let obj={id:1,name:'xyz'}
    if(!error)
    {
       resolve(obj)
    }
    else{
        reject('wrong')
    }
})

promise1().then((value)=>console.log(value))
.catch((err)=>console.log(err))

function apidata()
{
    let userInfo={
        userid:1,
        name:'XYZ'
    }
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            resolve(userInfo)
        },2000)
    })
}
async function homepage()
{
    let apirecord=await apidata();
    console.log(apirecord)
    console.log('hi');
}
homepage()

//promise.all
var p1=new Promise((resolve,reject)=>
{
    let result={
        id:1,
        mks:100
    }
    setTimeout(()=>
    {
        resolve(result)
    },2000)
})
var p2=new Promise((resolve,reject)=>
{
    let obj={
        id:1,
        mks:50
    }
    reject(obj)
})
var p3=new Promise((resolve,reject)=>
{
    resolve('hi')
})
Promise.all([p1,p2,p3]).then((values)=>console.log(values))
.catch((err)=>console.log(err))
Promise.all([
    p1.catch(err=>{return err}),
    p2.catch(err=>{return err}),
    p3.catch((err)=>{return err})
])
.then((values)=>console.log(values))

//promise.allSettled
Promise.allSettled([p1,p2,p3]).then((values)=>console.log(values))
.catch((err)=>console.log(err))

var p4=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve('Hi')
    },2000)
})
var p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Hello');
  }, 2000);
});
var p6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hey');
  }, 2000);
});
Promise.race([p4,p5,p6]).then(values=>console.log(values))//resolve or reject with shortest time
Promise.any([p4,p5,p6]).then(values=>console.log(values))//only resolve with shortest time
async function f1()
{
    let r1=await step1(10,false)
    let r2=await step2(r1,false)
    let r3=await step3(r2,false)
    console.log(r3)

}
f1()
