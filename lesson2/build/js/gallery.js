function ajaxGet(url, callback) {
    const xhr = new XMLHttpRequest;    
    xhr.open('get', url);    
    xhr.send();    
    xhr.onload = function() {
        if (xhr.status !== 200) {
            return console.error('status code' + xhr.status)
        }      
        const data = JSON.parse(xhr.responseText);
        callback(data);
    };
    
}
const gallery = document.querySelector('.gallery');
for(i = 0; i < 4; i++) {
    const div = document.createElement('div');
    div.className = "gallery-item";
    div.id = `item-${i}`;
    div.innerHTML = `<a href="#" target="blank"><img src="#" alt="..loading"></a>`;
    gallery.appendChild(div);
}


const links = document.querySelectorAll('.gallery-item a');
const imgs = document.querySelectorAll('.gallery-item a img');

imgs.forEach((item, index) => {
    ajaxGet('https://dog.ceo/api/breeds/image/random', function(data) {
    links[index].href = data.message;
    item.src = data.message;
    })
})