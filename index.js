const card = document.getElementById("container-app-card")
const card2 = document.getElementById("container-app-card2")
const card3 = document.getElementById('container-app-card3')
const card4= document.getElementById('container-app-card4')
const card5 = document.getElementById("container-app-card5")
const card6 = document.getElementById("container-app-card6")

const api ="spotfiy-json.json"
const api2 ="spotfiy2-json.json"
const api3 ="spotfiy3-json.json"
const api4 ="spotfiy4-json.json"
const api5 ="spotfiy5-json.json"
const api6 ="spotfiy6-json.json"

 



async function getApi(api){
  const data = await fetch(api)
  const reponse = await data.json()
 data_function(reponse)
}
getApi(api)


let  increamnt = 0


const containerRightdata = document.querySelector(".right-section-shopping")




 function app(item1,item2){
    containerRightdata.innerHTML = `
    









    <div class="boss-big-poppa">    
  
    <div class="up-Tropical-House" style="width: 100%;"> 
  <div class ="Tropical-House"><span style="font-family: sans-serif;color: white;">Tropical House</span></div>
  <div class ="Tropical-House" id="close"><span  style="color: white;"   class="material-symbols-outlined">close </span></div>
  </div>
   
    <div  class = "img-section-shopping"> 
      <img src="${item2}">
    </div>
  
  
    <div  class = "img-section-higer"  style="width: 90%;"> 
       <div class="text-section-higher">
         <div class="higer"><span>${item1}</span></div>
         <div class="Lue-Bender"><span>Lue Bender</span></div>
  
       </div>
  
       <div class="text-section-icon"> <span class="material-symbols-outlined">favorite </span> <span class="material-symbols-outlined"> more_horiz</span></div>
    </div>
  
  
  <div class="section-suivre">
  <div class="incdide-section-suivre">
    <span>A suivre dans la file</span>
    <span>Ouvrir le file d'attente</span>
  </div>
  
  <div class="contnet-section-suivre">
  <div class="contnet-section-suivre-icon"><span class="material-symbols-outlined">music_note </span></div>
  <div class="contnet-section-suivre-img"><img src="${item2}" style="width: 100%;"></div>
  <div class="contnet-section-suivre-text">
  <div class="contnet-section-suivre-text1">Get with Nobody (feat.Baimz)</div>
  <div class="contnet-section-suivre-text2">${item1}</div>
  
  </div>
  
  
  </div>
  
  </div>
   
  
  
  
  
  </div>
  






























    
    `
 const close = document.getElementById("close")
 const sfir = document.getElementById("sfir")
 
 close.addEventListener("click",()=>{
 
    sfir.style.display="none"
    
 
   
     
 })

 }
 



function data_function(index) {
    index.map((item) => {
      card.innerHTML += `
        <div class="card-app" id="card-app">
          <div class="card-img" id="self"><img src="${item.imgName}" style="width: 80%;"></div>
          <div class="card-img-text" id="nameMusic">${item.namemusic}</div>
          <div class="card-img-texts"><span>${item.describre}</span></div>
          <div class="card-img-btn" id="card-img-btn"><button class="btn-search">   <span class="material-symbols-outlined"> play_arrow</span></button></div>
        </div>
      `;
    });
  
    const buttons = document.querySelectorAll(".btn-search");
    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const sfir = document.getElementById("sfir")
        sfir.style.display="block"
        const card = event.target.closest(".card-app");
        const cardText = card.querySelector("#nameMusic");
        const cardImg = card.querySelector(".card-img img");
         
             const cardTetxt =   cardText.innerHTML
             const cardImg1a =   cardImg.src
             increamnt+=1  

         
             app(cardTetxt,cardImg1a)
    });
    });

      const cardL = document.querySelectorAll(".card-app")
      const button  = document.getElementById("card-img-btn")
 
      cardL.forEach((item)=>{

        item.addEventListener("mouseover",(e)=>{
             const appkill =item.querySelector("#card-img-btn")
             
              appkill.style.display="flex"
              appkill.style.transition = "opacity 2.3s ease";
        })


        item.addEventListener("mouseleave",(e)=>{
            const appkill =item.querySelector("#card-img-btn")
            
             appkill.style.display="none"
             
       })





      })

 
 
  }


 

 
 























async function getApi2(index){
    const data  = await fetch(index)
    const response = await data.json()
    data_function2(response)
}

getApi2(api2)

function  data_function2(index4){
    
    index4.map((item)=>{
     card2.innerHTML +=`
     <div class="card-app" id="card-app">
     <div class="card-img" id="self"><img src="${item.imgName}" style="width: 80%;"></div>
     <div class="card-img-text">${item.namemusic}</div>
     <div class="card-img-texts"><span> ${item.describre}</span></div>
 </div>

     
     
     `
    })


    
}


async function getApi3(index5){
    const data = await fetch(index5)
    const response = await data.json()
    data_function3(response)
}

getApi3(api3)

function data_function3(res){
res.map((item)=>{
card3.innerHTML +=`
 
<div class="card-app" id="card-app"   >
<div class="card-img" id="self"><img src="${item.imgName}" style="width: 80%;"></div>
  <div class="card-img-text" >${item.namemusic}</div>
  <div class="card-img-texts" ><span>  ${item.describre}</span></div>
  </div>



`
})
}


async function getApi4(index6){
    const data  = await fetch(index6)
    const response = await data.json()
    data_function4(response)
}
 
getApi4(api4)

function data_function4(npm){
    npm.map((item)=>{
        card4.innerHTML +=`
        <div class="card-app" id="card-app">
        <div class="card-img" id="self"><img src="${item.imgName}" style="width: 80%;"></div>
        <div class="card-img-text">${item.namemusic}</div>
        <div class="card-img-texts"><span> ${item.describre}</span></div>
    </div>  

        
        
        `
        
        
    })
}


async function getApi5(index9){
    const data = await fetch(index9)
    const response = await data.json()
     data_function5(response)

}
getApi5(api5)

function data_function5(res){
    res.map((item)=>{
        card5.innerHTML +=`
        <div class="card-app" id="card-app">
        <div class="card-img" id="self"><img src="${item.imgName}" style="width: 80%;"></div>
        <div class="card-img-text">${item.namemusic}</div>
        <div class="card-img-texts"><span>${item.describre}</span></div>
    </div>  


        `
    })
}

async function getApi6(index10){
    const data = await fetch(index10)
    const response =await data.json()
    data_function6(response)
}

getApi6(api6)


function data_function6(reponse){
    reponse.map((item)=>{
    card6.innerHTML +=`
    
    <div class="card-app" id="card-app">
    <div class="card-img" id="self"><img src="${item.imgName}" style="width: 80%;"></div>
    <div class="card-img-text">${item.namemusic}</div>
    <div class="card-img-texts"><span>${item.describre}</span></div>
</div>  

    `
    })
}


const right_card_section = document.getElementById("play")

const  apicard = "spotfiy7-json.json"


async function getApi7(index11){
    const data = await fetch(index11)
    const response =await data.json()
   data_function7(response)
}
getApi7(apicard)


function data_function7(app){
     app.map((item)=>{
        right_card_section.innerHTML +=`
        <div class="container-play-list-item">

<div class="container-play-list-item-img"><img src="${item.imgName}" width="100%"></div>

<div class="container-play-list-item-text">
  <span class="text-high">${item.namemusic}</span>
  <span class="text-smoth">${item.describre}</span>
</div>

</div> 
 
        
        `
     })
}
 


 


// do section 3 ofr your song 





 
