//TEXT//
		
		const textBlock = document.querySelector('#text-block');

		const bntSemiChange = document.querySelector('#semi-change');
		const btnSemiReturn = document.querySelector('#semi-return');

		const textTemplate = /(?<=\s)'|('$)|('^)/gm;


		bntSemiChange.onclick = () => textBlock.innerHTML = textBlock.innerHTML.replace(textTemplate,'<span class="yellow">"</span>');
		btnSemiReturn.onclick = () => textBlock.innerHTML = textBlock.innerHTML.replace(/<span class="yellow">"<\/span>/g,"'");
								
				//FORM//
		
		const name = document.querySelector('#name');
		const tel = document.querySelector('#tel');
		const email = document.querySelector('#email');
       

		const submit = document.querySelector('#submit'); 
        const nameTemplate = /^([a-zа-яё].{1})(([a-zа-яё])|(\s))*([a-zа-яё].{0})$/im;
		const telTemplate = /^((\+\d)(\(\d{3}\))(\d{3})-(\d{4}))$/m;
		const emailTemplate = /^([a-z\.-]+)(@)([a-z\.-]+)\.([a-z]{2,3})$/im;
        function check (template, value) {
            return template.test(value)   
        }

		function validation (template, input, warningId) {
            const value = input.value;
            if (!check(template, value))  {
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