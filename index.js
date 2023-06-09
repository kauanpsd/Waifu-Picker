import { waifusData } from './data.js'

const emotionRadioDiv = document.getElementById("emotion-radios");
const getBtn = document.getElementById('get-image');
const gifOnly = document.getElementById('gif-check')
const waifuModalInner = document.getElementById('waifu-modal-inner');
const waifuModal = document.getElementById('waifu-modal');
const closeBtn = document.getElementById('waifu-modal-close-btn');

closeBtn.addEventListener('click', function(){
    waifuModal.style.display='none'
})

function getMatchWaifu(){

    const gifChecker = gifOnly.checked
    const waifuvalue = document.querySelector( 'input[type="radio"]:checked').value
    const getSelectedWaifu = waifusData.filter(function (waifu){

        if(gifChecker){
            return waifu.isGif && waifu.emotionTags.includes(waifuvalue)
        } else{
            return !waifu.isGif && waifu.emotionTags.includes(waifuvalue)
        }
        
    })

   return getSelectedWaifu
    
}

function getSingleWaifu(){
    const waifusArray = getMatchWaifu()
    
    if(waifusArray.length === 1){
       return waifusArray[0]
    } else {
        let randomN = Math.floor(Math.random() * waifusArray.length)
       return waifusArray[randomN]
    }

}

function renderCat(){
    const waifuObj = getSingleWaifu()

    waifuModalInner.innerHTML =`
    <img class="waifu-img" 
    src="${waifuObj.image}"
    alt="${waifuObj.alt}"
    >`
    waifuModal.style.display='flex'
}


getBtn.addEventListener('click',renderCat)

emotionRadioDiv.addEventListener('change', function(e){
    const radios = document.getElementsByClassName('radio');
    for(let radio of radios){
        radio.classList.remove('highlight')
    }
       document.getElementById(e.target.id).parentElement.classList.add('highlight')
})

function getEmotionsArray(waifus){
    const emotionList = []

    for (let waifu of waifus){
        for (let emotions of waifu.emotionTags)
        if(!emotionList.includes(emotions)){
            emotionList.push(emotions)
        }
        
    }
    return emotionList
}

function renderEmotionsRadios(waifus){ 
    const emotions = getEmotionsArray(waifus)
    let radioItems = ``
    for (let emotion of emotions){
        radioItems += `
        <div class = "radio">
        <label for = "${emotion}">${emotion}</label>
        <input type = "radio"
        id = "${emotion}"
        value = "${emotion}"
        name = "emotions"
        > </div>
        ` 
    }
    document.getElementById('emotion-radios').innerHTML = radioItems
}


renderEmotionsRadios(waifusData)


