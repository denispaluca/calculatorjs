function add(n1,n2){
  return n1+n2;
}

function subtract(n1,n2){
  return n1-n2;
}

function multiply(n1,n2){
  return n1*n2;
}

function divide(n1,n2){
  return n1/n2;
}

function operate(op,n1,n2){
  switch (op) {
    case '+':
      return add(n1,n2);
      break;
    case '-':
      return subtract(n1,n2);
      break;
    case 'x':
     return multiply(n1,n2);
      break;
    case '/':
      return divide(n1,n2);
      break;
    default:
      return "Wrong Opeartion";
      break;
  }
}

const div = document.querySelector('div');
const numButtons = document.querySelectorAll('.nrbtn');
const opButtons = document.querySelectorAll('.opbtn');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');

numButtons.forEach(element => {
  element.addEventListener('click',() =>{
    div.textContent += element.textContent;
  })
});

opButtons.forEach(element => {
  element.addEventListener('click', () =>{
    if(div.textContent !== ''){
      if(div.textContent[div.textContent.length - 1].match(/^(\+|\-|\/|\x)$/)){
        div.textContent = div.textContent.substr(0,div.textContent.length -1);
      }
      div.textContent += element.textContent;  
    }
  })
});

clear.addEventListener('click', ()=>{
  div.textContent = '';
})

equal.addEventListener('click', () =>{
  if(div.textContent[div.textContent.length - 1].match(/^(\+|\-|\/|\x)$/))
    div.textContent = div.textContent.substr(0,div.textContent.length -1);
  let str = div.textContent;

  ops = [];
  numsStr = str.split(/[\+,\-,\x,\/]+/);
  nums = [];
  numsStr.forEach(element => {
    nums.push(parseInt(element));
  });
  
  for(var i = 0; i < str.length; i++){
    if(isNaN(str[i]))
      ops.push(str[i]);
  }


  let numOfOps = 0;
  let lastIndex = 0;
  ops.forEach(e => {
    var index = ops.indexOf(e,numOfOps) - numOfOps;
    nums.splice(index,2,
      operate(e,nums[index],nums[index+1]));
    numOfOps++;
  });
  
  div.textContent = nums[0];
})