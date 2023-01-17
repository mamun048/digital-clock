const hour =document.getElementById("hour")
const min = document.getElementById("min") 
const sec = document.getElementById("sec") 
const am = document.getElementById("am") 

function upclock() {
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()
  let ampm = "AM"

  if (h > 12) {
    h = h - 12;
    ampm = "PM"
  }
    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s
     hour.innerText = h
     
     
     
     hour.innerText = h
     min.innerText = m
     sec.innerText = s
     am.innerText = ampm
     setTimeout(() => {
       upclock()
     }, 1000)

}
upclock();


 
 