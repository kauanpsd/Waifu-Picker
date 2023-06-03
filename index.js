const waifusData = [
    {
        emotionTags: ["moody"],
        isGif: false,
        image: "https://i.pinimg.com/564x/c4/ca/9f/c4ca9f04ba6fbf3b4826a8a898b3fe22.jpg",
        alt: "@/yaoyao794 on twitter!",
    },
    {
        emotionTags: ["moody", "insomniac"],
        isGif: false,
        image: "https://i.pinimg.com/736x/47/9e/e1/479ee1d2bcdcf9d23a10f09c3d694d77.jpg",
        alt: "Kobeni Yonomori Blanket",
    },
    {
        emotionTags: ["moody"],
        isGif: false,
        image: "https://i.pinimg.com/564x/35/f2/e6/bc1qzk3kxhdxnzkpdgdn9ueg34y08smxgfv0hxvcu3.jpg",
        alt: "SUKUNA I ",
    },
    {
        emotionTags: ["confused", "sad"],
        isGif: false,
        image: "https://i.pinimg.com/564x/49/c5/3a/49c53a068b25e6d958cb69802542de05.jpg",
        alt: "Soul Eater",
    },
    {
        emotionTags: ["dominant", "moody"],
        isGif: false,
        image: "https://i.pinimg.com/564x/70/99/d4/7099d4849006371ee341fd0816b93080.jpg",
        alt: "Evangelion",
    },
    {
        emotionTags: ["happy", "relaxed"],
        isGif: false,
        image: "https://i.pinimg.com/564x/3c/60/21/bc1qzk3kxhdxnzkpdgdn9ueg34y08smxgfv0hxvcu3.jpg",
        alt: "happy rem",
    },
    {
        emotionTags: ["hungry"],
        isGif: false,
        image: "https://i.pinimg.com/564x/ee/fd/47/eefd479c43942b72f235ec019b9e3b78.jpg",
        alt: "girl hungry",
    },
    {
        emotionTags: ["hungry"],
        isGif: false,
        image: "https://i.pinimg.com/564x/ab/df/0f/abdf0f7b5e417637d7b0a0fc83ab1e83.jpg",
        alt: "girl hungry",
    },
    {
        emotionTags: ["insomniac"],
        isGif: false,
        image: "https://i.pinimg.com/564x/19/74/9f/bc1qzk3kxhdxnzkpdgdn9ueg34y08smxgfv0hxvcu3.jpg",
        alt: "zoro sleeping",
    },
    {
        emotionTags: ["insomniac"],
        isGif: false,
        image: "https://i.pinimg.com/564x/5a/03/87/5a0387edd0b9abe40a06d7bb1ad93888.jpg",
        alt: "anime girl sleepy",
    },
    {
        emotionTags: ["relaxed"],
        isGif: false,
        image: "https://i.pinimg.com/564x/a3/c2/35/a3c235384eef4f6aeb03915b8a9cdd3c.jpg",
        alt: "Aqua relaxed",
    },
    {
        emotionTags: ["scared"],
        isGif: false,
        image: "https://i.pinimg.com/564x/74/a0/8c/74a08cd953ebb0cd764b66b48c77f103.jpg",
        alt: "Uraraka scared",
    },
    {
        emotionTags: ["sad"],
        isGif: false,
        image: "https://i.pinimg.com/564x/49/ae/23/49ae23998bd4ecf2a39c2084bb024ec5.jpg",
        alt: "sad anime girl",
    },
    {
        emotionTags: ["sad", "moody"],
        isGif: true,
        image: "https://i.pinimg.com/originals/b0/2b/33/b02b33dba6fc1c8e5a1caa9797299ab5.gif",
        alt: "angry albedo sad",
    },
    
    /* DAQUI PRA CIMA É FOTO */
    {
        emotionTags: ["moody"],
        isGif: true,
        image: "https://media.tenor.com/VlG3XYw4d0EAAAAd/hayase-nagatoro-nagatoro-angry.gif",
        alt: "Angry nagatoro",
    },
    {
        emotionTags: ["moody"],
        isGif: true,
        image: "https://media.tenor.com/RkKwzEZ4zSUAAAAC/laugh-anime.gif",
        alt: "Albedo Angry and Crazy",
    },
    {
        emotionTags: ["confused"],
        isGif: true,
        image: "https://media.tenor.com/AuwPyhY68MEAAAAC/marin-kitagawa-marin.gif",
        alt: "Marim looking confused",
    },
    {
        emotionTags: ["dominant"],
        isGif: true,
        image: "https://media.tenor.com/9tVyuuwT7DgAAAAC/blush-anime.gif",
        alt: "Albedo Dominat",
    },
    {
        emotionTags: ["happy"],
        isGif: true,
        image: "https://media.tenor.com/s-DcmUE7Z_UAAAAd/marin-kitagawa.gif",
        alt: "Marim Kitagawa Happy",
    },
    {
        emotionTags: ["hungry", "sad", "confused"],
        isGif: true,
        image: "https://media.tenor.com/gindzAhOoPMAAAAC/aqua-anime.gif",
        alt: "Aqua Anime GIF",
    },
    {
        emotionTags: ["hungry"],
        isGif: true,
        image: "https://media.tenor.com/3Nn7tgMWmbAAAAAC/anime-bite.gif",
        alt: "Anime Bite GIF",
    },
    {
        emotionTags: ["hungry"],
        isGif: true,
        image: "https://media.tenor.com/s6q8vWdgSnMAAAAC/hungry-anime.gif",
        alt: "Hungry Anime GIF",
    },
    {
        emotionTags: ["insomniac", "scared"],
        isGif: true,
        image: "https://media.tenor.com/viXhLyvelpkAAAAC/tanaka-kun-sleepy.gif",
        alt: "Tanaka Kun Sleepy GIF",
    },
    {
        emotionTags: ["relaxed"],
        isGif: true,
        image: "https://media.tenor.com/yzGKuxVoePcAAAAC/kanna-kamui.gif",
        alt: "Kanna Kamui GIF",
    },
    {
        emotionTags: ["relaxed"],
        isGif: true,
        image: "https://i.pinimg.com/originals/3d/21/f9/bc1qzk3kxhdxnzkpdgdn9ueg34y08smxgfv0hxvcu3.gif",
        alt: "Anime Girl relaxed",
    },
    {
        emotionTags: ["scared", "sad"],
        isGif: true,
        image: "https://media.tenor.com/wC6bh8RDNEoAAAAC/rikka-anime.gif",
        alt: "Rikka Anime GIF sad",
    },
    {
        emotionTags: ["scared"],
        isGif: true,
        image: "https://media.tenor.com/AkDIq-gCF8cAAAAC/anime-shocked.gif",
        alt: "Anime Shocked GIF",
    },
    {
        emotionTags: ["sad"],
        isGif: true,
        image: "https://media.tenor.com/QQ_mcMtEKm8AAAAC/anime-raphtalia.gif",
        alt: "Raphtalia sad",
    },
]

function getEmotionsArray(waifus){
    
    const emotionList = []

    for (let waifu of waifus){
        for (let emotions of waifu.emotionTags)
        emotionList.push(emotions)
    }
    return emotionList
}

function renderEmotionsRadios(waifus){
    const emotions = getEmotionsArray(waifus)
    let radioItems = ``
    for (let emotion of emotions){
        radioItems += `
        <p>${emotion}</p>
        `
    }
    document.getElementById('emotion-radios').innerHTML = radioItems
}

renderEmotionsRadios(waifusData)


