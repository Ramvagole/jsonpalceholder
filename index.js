let url="https://jsonplaceholder.typicode.com/users?_page=1&_limit=6";
let getdata= async (url)=>{
    let a= await fetch(`${url}`);
    let b= await a.json();
    console.log(b)
    let c= await fetch("https://jsonplaceholder.typicode.com/users");
    let d= await c.json();
    console.log(d.length);
    pagination(d.length,6);
    display(b);    
}
getdata(url);
function pagination(tot,lim){
    let total=tot;
    let limit=lim;
    let noOfButton=Math.ceil(total/limit);
    document.getElementById("but").innerHTML="";
    for(let i=1;i<=noOfButton;i++){
        let d=document.getElementById("but");
        let g=document.createElement("button");
        g.textContent=`${i}`;
        g.addEventListener("click",function(){
            getdata(`https://jsonplaceholder.typicode.com/users?_page=${i}&_limit=6`);
        })
        d.append(g);
    }

}

function display(b){
    document.getElementById("teir").innerHTML=""
    b.forEach((v)=>{
        let di=document.createElement("div");
        let a=document.createElement("h1");
        a.textContent=v.username;
        di.append(a);
        document.getElementById("teir").append(di);
    })
}