const Accesstoken = 'nX2pnvrSw2l5XX8OfSTfkxsSrhRRUEhX5aztm7Qm7JI'

let input=document.getElementById("inputtext") 

let val
let page=1
document.getElementById("btnSearch").addEventListener('click',()=>{

document.getElementById("Imgcon").innerHTML=''
     //page=1
     val = input.value
     input.value = ''
     fetchimg(val)
    
  })

async function fetchimg(val) {
    let response = await fetch(`https://api.unsplash.com/search/photos?query=${val}&client_id=${Accesstoken}&page=${page}`)
    let result = await response.json()
    if(result.results.length < 1){
        document.getElementById("Imgcon").innerHTML='<h2>Not found</h2>'
    }else{
        displayImg(result)
    }
    
}

function displayImg(res) {
  res.results.map((data)=>{
     let div = document.createElement("div")
     div.setAttribute("class","singleimg")
     div.innerHTML=`
         <div class="profileinfo">
            <img src=${data.user.profile_image.large} alt="">
            <p>${data.user.name}</p>
         </div>
         <div class="mainimg">
            <img src=${data.urls.regular} alt="">
            <p>${data.alt_description}</p>
         </div>`
      document.getElementById("Imgcon").appendChild(div)
     removebtn(div)
    })
    
    document.getElementById("loardmore").classList.add('visible')
    
    document.getElementById("reset").classList.add("revisible")
  }
  
  document.getElementById("loardmore").addEventListener("click",()=>{
      page++
      fetchimg(val)
  })
  
   function removebtn(div){
       document.getElementById("reset").addEventListener("click",()=>{
           div.innerHTML=''
         document.getElementById("reset").classList.remove("revisible")
         
         document.getElementById("loardmore").classList.remove("visible")
       })
   }  