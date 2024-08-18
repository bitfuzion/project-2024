//add your api key
const API_KEY=""


const submitIcon = document.querySelector("#submit-icon")

const inputElement = document.querySelector("input")

const getImages = async () => {
    const options = {
        method: "POST",
        headers: {
            "Authorization":`Bearer ${API_KEY}`,
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            "prompt":inputElement.value,
            "n":4,
            "size":"1024x1024"
        })
    }
    try {
        const response = await fetch('https://api.openai.com/v1/images/generations',options)
        const data = await response.json()
        console.log(data)
    }catch {
        console.error(error)
    }
}

submitIcon.addEventListener('click',getImages)