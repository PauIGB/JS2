describe("В поле name могут быть только русские и ангийские буквы, строка не может начинаться с пробела", () => {
     it('Проверка на русские и английские буквы и пробелы между словами', () => {        
           assert.equal(check(/^([a-zа-яё].{1})(([a-zа-яё])|(\s))*([a-zа-яё].{0})$/im, "Петр The destroyer Сидоров"), true)      
    })
    it('Проверка на цифры', () => {        
           assert.equal(check(/^([a-zа-яё].{1})(([a-zа-яё])|(\s))*([a-zа-яё].{0})$/im, 213412), false)      
    })
    it('Проверка на пробел в начале строки', () => {        
           assert.equal(check(/^([a-zа-яё].{1})(([a-zа-яё])|(\s))*([a-zа-яё].{0})$/im, " asdfsad"), false)      
    })
    it('Проверка на пробел в конце строки', () => {        
       assert.equal(check(/^([a-zа-яё].{1})(([a-zа-яё])|(\s))*([a-zа-яё].{0})$/im, "asdfsad "), false)      
    })
    it('Проверка на спецсимволы', () => {        
       assert.equal(check(/^([a-zа-яё].{1})(([a-zа-яё])|(\s))*([a-zа-яё].{0})$/im, "< "), false)      
    })

})
//describe("В поле name могут быть только русские и ангийские буквы, строка не может начинаться с пробела", () => {
//    var text = "";
//    function check(template, value) {        
//        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 [$&+,:;=?@#|'<>.-^*()%!]{} "; 
//        for (var i = 0; i < 5; i++) {
//            text += possible.charAt(Math.floor(Math.random() * possible.length));
//        }             
//        it(`проверка выражения ${text}`, () => {        
//           assert.equal(check(template, value), false)})
//        }
//        for (var i = 0; i < 5; i++) {
//            check(/^([a-zа-яё].{1})(([a-zа-яё])|(\s))*([a-zа-яё].{0})$/im, text);
//            }  
//})
//   