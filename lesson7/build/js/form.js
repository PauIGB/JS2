$(() => {
    const form = $('#form');
    //name
    const name = $('#name');
    const nameRegex = /^([a-zа-яё].{1})(([a-zа-яё])|(\s))*([a-zа-яё].{0})$/im;
    const nameWarning = 'Имя должно содержать ТОЛЬКО русские или английские буквы, использование других символов недопустимо. Строка НЕ может начинаться и заканчиватся пробелом.';
    //email
    const email = $('#email');
    const emailRegex = /^([a-z\d\.-]+)(@)([a-z\d\.-]+)\.([a-z]{2,3})$/im;
    const emailWarning = 'Введите email в одном из следующих форматов: mymail@mail.ru or my.mail@mail.ru or my-mail@mail.ru';
    //phone
    const phone = $('#phone');
    const phoneRegex = /^((\+\d)(\(\d{3}\))(\d{3})-(\d{4}))$/m;
    const phoneWarning = 'Введите телефон в следующем формате: +7(000)000-0000';

    const city = $('#city');        
    const birth = $('#birth');        
    const textArea = $('#textArea')

    const allFields = $( [] ).add( name ).add( email ).add( phone );
    const tips = $( ".validateTips" );

    autocomplete(city);
    datepicker(birth);

    form.on('submit', (event) => {
        event.preventDefault();            
        addUser();

    })
    function checkRegexp(inputField, regExp, warningText) {
        if(!(regExp.test(inputField.val()))) {
            warning(warningText);
            inputField.addClass( "ui-state-error" ).effect('bounce');
            return false;

        } else {
            return true;
        }
    }
    function warning(warningText) {
        tips.text(warningText).addClass( "ui-state-highlight" );
        setTimeout(function() {
            tips.removeClass("ui-state-highlight" )
        }, 1500)
        $(tips).dialog({
        modal: true,            
        buttons: {
            'OK': function() {
                $(this).dialog('close');
            }                
        }
    });
    }

    function addUser() {
        var valid = true;
        allFields.removeClass( "ui-state-error" );
        valid = valid && checkRegexp(name, nameRegex, nameWarning);
        valid = valid && checkRegexp(email, emailRegex, emailWarning);
        valid = valid && checkRegexp(phone, phoneRegex, phoneWarning);
        if ( valid ) {
        $( "#users tbody" ).append( `
            <tr class="user-info">
            <td>${name.val()}</td>
            <td>${email.val()}</td>
            <td>${phone.val()}</td>
            <td>${city.val()}</td>
            <td>${birth.val()}</td>
            </tr>
            <tr class="message">
            <td colspan='5'>${textArea.val()}</td>
            </tr>`
        );}
         return valid;            
    }

    function datepicker (newEl) {
        newEl.datepicker({
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        dayNamesMin: [ 'ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
        dateFormat: 'dd/mm/yy'

        }); 
        newEl.attr('placeholder', 'dd/mm/yyyy');
    }        

    function autocomplete(newEl) {
       $.ajax({
            url: 'http://89.108.65.123/cities',
            dataType: 'json',
            success: function(data) { 
                const source = new Array;
                data.forEach((item) => source.push(item.name));
                newEl.autocomplete({source});           
                newEl.attr('placeholder', source[0]);
            }
        })
    }
})
