//const check = (template, input) => {
//  return template.test(input)
//}
//const nameTemplate = /^([a-z\.-]+)(@)([a-z\.-]+)\.([a-z]{2,3})$/im;
//const inputVal = "my-mail@@mail.ru";
//console.log(check(nameTemplate, inputVal));



const nameTemplate = /^([a-zа-яё].{1})(([a-zа-яё])|(\s))*([a-zа-яё].{0})$/im;
		const telTemplate = /^((\+\d)(\(\d{3}\))(\d{3})-(\d{4}))$/m;
		const emailTemplate = /^([a-z\.-]+)(@)([a-z\.-]+)\.([a-z]{2,3})$/im;

        
     
		function validation (template, input, warningId) {
        let value = input.value  
        const check = (template, value) => {
          return template.test(value)
        }
      console.log(check(template, input))
            if (!check(template, input))  {
                if (!input.classList.contains("bd--red") && !warningId.classList.contains("d--red")) {                 
                    input.classList += " bd--red";
                    warningId.classList += " d--red"; 
                    input.setCustomValidity("Invalid field.");
                }
                } else {
                    input.classList.remove("bd--red");
                    warningId.classList.remove("d--red");
                    input.setCustomValidity("");
                }
		};



		submit.addEventListener ('click', function () {
				validation(nameTemplate, name, nameHelp);
				validation(telTemplate, tel, telHelp);
				validation(emailTemplate, email, emailHelp);
			}
		);
