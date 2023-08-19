const countvalue =document.querySelector('.zero');

const increment=()=>{
    let value = parseInt (countvalue.innerText);
    value=value+1;
    countvalue.innerText=value;
    
};
const decrement=()=>{
    let value = parseInt (countvalue.innerText);
    value=value-1;
    countvalue.innerText =value;
};