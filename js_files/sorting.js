var n_arr=document.getElementById('n_arr');
var a=document.getElementById('divi');
var b_sort=document.getElementById('b_sort');

function new_array(){
    var arr=[];
    var bar=document.querySelectorAll('.bar');
    for(var i=0;i<100;i++){
        arr[i]=Math.round(Math.random()*100+1);
        if(bar[i]){
        a.removeChild(bar[i]);
        }
        var d=document.createElement('div');
        d.classList.add('bar');
        d.style.width='12px';
        d.style.margin='0px 1px';
        var c=arr[i]*4;
        d.style.height=c+'px';
        d.style.background='yellow';
        a.appendChild(d);
    }
}

function swap(el1,el2)
    {
 
      const style1 = window.getComputedStyle(el1);
      const style2 = window.getComputedStyle(el2);
 
 
      const transform1 = style1.getPropertyValue("height");
      const transform2 = style2.getPropertyValue("height");
 
      el1.style.height = transform2;
      el2.style.height = transform1;
 
}

function bub_sort(){
    // var x = await resolveAfter2Seconds(2);
    var bar=document.querySelectorAll('.bar');
    for(var j=0;j<99;j++){
    for(var i=0;i<99-j;i++){
        var h1=bar[i].offsetHeight;
        var h2=bar[i+1].offsetHeight;
        if(h1>h2){
        swap(bar[i],bar[i+1]);
        }
    }
}
}

// function resolveAfter2Seconds(x) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(x);
//       }, 2000);
//     });
//   }
window.onload=new_array();
n_arr.addEventListener('click',new_array);
b_sort.addEventListener('click',bub_sort);