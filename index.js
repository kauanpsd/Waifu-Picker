import { waifusData } from './data.js'

const emotionRadioDiv = document.getElementById("emotion-radios")

emotionRadioDiv.addEventListener('change', function(e){
    console.log(e.target.id)
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


