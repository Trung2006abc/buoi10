function m97() {
  let a = document.getElementById("dayso").value;
  a = Math.abs(a);
  let max = 0;
  while (a > 0) {
    let digit = a % 10;
    if (digit > max) {
      max = digit;
    }
    a = Math.floor(a / 10);
  }
  alert(max);
}
function m2(){
  let a=document.getElementById('ccc').value;
  let b=Math.floor(Math.random()*10)+1;
  if(a==b){
    alert("TRUE")
  }
  else{
    alert("FALSE")
  }
}