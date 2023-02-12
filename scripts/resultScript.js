let objects = [{
    name: "Happy Bocchi",
    img: "https://img1.ak.crunchyroll.com/i/spire3/ce09954d04b9388547d819522f75a01b1663350777_large.png",
    content: "You got 'Happy Bocchi'. Your day will be awesome"
},
{
    name: "Sad Bocchi",
    img: "https://haiji.kissu.moe/jp/thumb/1665876094627.webp",
    content: "You got 'Sad Bocchi'. Hope Everything will be alright "
},
{
    name: "Thinking Bocchi",
    img: "https://www.nautiljon.com/images/perso/00/59/gotoh_hitori_21095.webp",
    content: "You got 'Happy Bocchi'. Your day will be awesome"
},
]


const result = document.querySelector('#result')
const currentImg = document.querySelector('#bocchi-img')
const currentContent = document.querySelector('#content')

let currentItem = 0

window.addEventListener('DOMContentLoaded', function(){
   
    currentItem = Math.floor(Math.random()* objects.length)
    getBocchi(currentItem)
    

})

function getBocchi(content){
    const item = objects[content]
    result.textContent = item.name
    currentImg.src = item.img


}
