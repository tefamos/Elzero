let mega = document.getElementById('show');
let mg=document.getElementById('mega');
// mega.addEventListener('click',(e)=>{
//  
// })
mega.addEventListener('click',(e)=> {
  // 
  e.preventDefault();
if(mg.style.getPropertyValue("opacity")==="0")
{
  mg.style.top="calc(100% + 1px)";
  mg.style.opacity="1";
  mg.style.zIndex="100";
}
else  {
    mg.style.top="calc(100% + 53px)";
  mg.style.opacity="0";
  mg.style.zIndex="-1"
  }
  
    })

    //


let nums = document.querySelectorAll(".stats .numbers");
let statsSection = document.getElementById('stat');
let started = false; // Function Started ? No
let techs = document.querySelector(".skills .techs")
let skill = document.querySelectorAll(".skills .holder .sp");

window.onscroll = function () {
  // Skills Animate Width
  if(window.scrollY >= techs.offsetTop -200)
  {
    skill.forEach((element)=>{changwidth(element)})
    
  }
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
}

function changwidth(el){
  let widthy = parseInt(el.dataset.progress);
  let mainw=parseFloat(getComputedStyle(techs).width);
  
  widthy=mainw * widthy / 100;
  let c =`${widthy}px`
  el.style.width=c;
// el.style.setProperty('width',c)
}
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 200 / goal );
}






//     let x = new XMLHttpRequest()
// x.open("GET",'aa.txt');
// x.send()
// x.onreadystatechange=()=>{
// if(x.readyState==4&&x.status==200)
// {
//   console.log(x.readyState)
//   console.log(x.responseText)
// }
// }