$(() => {
    const slider = $('.slider');
    const dots = $('.dots');
    const sliderLength = $('.slider img').length;
    let timer = 0;
    $('.slider-item').attr('id', ((i) => `item-${i}`));
    for(let i = 0; i < sliderLength; i++) {
        $('.dots').append(`
        <li class="dots-item_${i}">
            <a href="#item-${i}">Slide#${(i+1)}</a>
        </li>`);
    }
    $(slider).tabs({               
        hide: true,
        show: true
    });
     setInterval(() => {                
        $(slider).tabs( "option", "active", timer );
        (timer < sliderLength) ? timer++ : timer = 0;
     }, 3000);   
})