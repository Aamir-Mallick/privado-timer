let mints = document.getElementById("mints")
let sec = document.getElementById("sec")
let btn = document.getElementById("btnId")
let colon = document.getElementById("colon")
let preSecondValue = document.getElementById("preSecondValue")
let preMintsValue = document.getElementById("preMintsValue")



 let second = 0
 let mintus = 0


  mints.innerHTML = mintus
  sec.innerHTML = second
 

 let interval

 btn.addEventListener("click", (e)=>{
 	if (e.target.value === "start" || e.target.value === "reset") {


 		         sec.style.color = "black"
                 mints.style.color = "black"
                 preSecondValue.style.color = "black"
                 colon.style.color= "black"
                 preMintsValue.style.color = "black"
 		
 		interval = setInterval(()=>{
             second = second + 1;
             sec.innerHTML = second
             if (second === 10 ) {
                 preSecondValue.style.display = "none"
             }
             
              if (second === 59) {
              	 preSecondValue.style.display = "block"
              	 preSecondValue.style.display = "inline"
              	second = 0
                mintus = mintus + 1;
                mints.innerHTML = mintus; 

             }
             else if (mintus === 5) {
                 e.target.value = "reset"
                 second = 0;
                 mintus = 0;
                
                 clearInterval(interval)
                 sec.style.color = "red"
                 mints.style.color = "red"
                 preSecondValue.style.color = "red"
                 colon.style.color= "red"
                 preMintsValue.style.color = "red"

             }
             sec.innerHTML = second;
             mints.innerHTML = mintus;
           
             
 		}, 1000)

 		event.target.value = "pause"
 	}
    
    else if (event.target.value = "pause") {
       clearInterval(interval)
        event.target.value = "start"
   }


 })






 

