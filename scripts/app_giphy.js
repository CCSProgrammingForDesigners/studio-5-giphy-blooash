const api_key = "4D4ngDC0nxViQKkRbaswEn8aVUQ8enfl"

const addImagesToResponses = (images) => {
    const responses = document.getElementsByClassName('responses')[0]
    responses.innerHTML = ""
    for (const image of images) {
        responses.insertAdjacentHTML('beforeend', `<li><img src="${image.images.fixed_width.url}"></li>`)
    }
}

//search box

const feed = document.getElementById('searchInput');
searchInput.addEventListener('change', e => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${feed.value}&api_key=${api_key}&limit=9`).then(response => {
        return response.json()
    }).then(data => {
        console.log(data.data)
        const images = data.data
        addImagesToResponses(images)
    })
})


//hashtags


const tags = document.getElementsByClassName('tags')
for (const i of tags) {
    i.addEventListener('click', e => {
        e.preventDefault();
        const inputSearch = e.target.dataset.tag;
        fetch(`http://api.giphy.com/v1/gifs/search?q=${inputSearch}&api_key=${api_key}&limit=9`).then(response => {
            return response.json()
        }).then(data => {
            console.log(data.data)
            const images = data.data
            addImagesToResponses(images)
        })
    })
}



fetch(`http://api.giphy.com/v1/gifs/random?api_key=${api_key}`).then(response => {
    return response.json();
}).then(data => {
    //This is where we have access to the data
    console.log(data.data.images.original.url)
    const url = data.data.images.original.url
    const largeImage = document.getElementsByClassName('large-image')[0]
    largeImage.insertAdjacentHTML('beforeend', `<img src="${url}">`)
})

fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=9`).then(response => {
    return response.json()
}).then(data => {
    console.log(data.data)
    const images = data.data
    const responses = document.getElementsByClassName('responses')[0]
    for (const image of images) {
        responses.insertAdjacentHTML('beforeend', `<li><img src="${image.images.fixed_width.url}"></li>`)
    }

})