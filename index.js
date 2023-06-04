import { waifusData } from './data.js'

const emotionRadioDiv = document.getElementById("emotion-radios")
const getBtn = document.getElementById('get-image')

function getMatchWaifu(){

    const waifuvalue = document.querySelector( 'input[type="radio"]:checked')
    if(waifuvalue){
        console.log(waifuvalue.value)
    }
    
}


getBtn.addEventListener('click',getMatchWaifu)

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


