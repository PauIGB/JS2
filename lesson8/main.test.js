describe("В поле name могут быть только русские и ангийские буквы, строка не может начинаться с пробела", () => {
    const template = /^([a-zа-яё].{1})(([a-zа-яё])|(\s))*([a-zа-яё].{0})$/im
    it('Проверка на русские и английские буквы и пробелы между словами', () => {        
           assert.equal(check(template, "Петр The destroyer Сидоров"), true)      
    })
    it('Проверка на пробел в начале строки', () => {        
           assert.equal(check(template, " asdfsad"), false)      
    })
    it('Проверка на пробел в конце строки', () => {        
       assert.equal(check(template, "asdfsad "), false)      
    })
    const symbols = "0123456789 [$&+,:;=?@#|'<>.-^*()%!]{   }" 
    for (i = 0; i < symbols.length; i++) {
        const symbol = symbols.charAt(i);
        it(`Проверка на наличие символа ${symbol} в поле name`, () => {        
           assert.equal(check(template, symbol), false)      
        })
    }
})
describe("В поле phone возможна запись телефона только в следующем формате: +7(000)000-0000", () => {
    const template = /^((\+\d)(\(\d{3}\))(\d{3})-(\d{4}))$/m
    it('Проверка телефона в формате: +7(000)000-0000', () => {        
           assert.equal(check(template, '+7(000)000-0000'), true)      
    })
    it('Проверка на наличие пробелов', () => {        
           assert.equal(check(template, " "), false)      
    })
   
    const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz   [$&+,:;=?@#|'<>.-^*()%!]{}" 
    for (i = 0; i < symbols.length; i++) {
        const symbol = symbols.charAt(i);
        it(`Проверка на наличие символа ${symbol} в поле phone`, () => {        
           assert.equal(check(template, symbol), false)      
        })
    }
})