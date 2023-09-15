
    let B7validator = {
        handleSubmit:(event)=>{
            event.preventDefault()
            let send = true
            
            let inputs = form.querySelectorAll('input')
            B7validator.clearError()


            for(let i=0; i<inputs.length; i++){
                let input = inputs[i]
                let check = B7validator.checkInput(input)


                if(check !== true){
                    send = false
                    B7validator.showError(input, check)
                }
            }


            
            if(send){
                form.submit()
            }



        },
        checkInput:(input)=>{
            let rules = input.getAttribute('data-rules')
            if(rules !== null){
                rules = rules.split('|')
                for(let k in rules){
                    let rDetails = rules[k].split('=')
                    console.log(rDetails)
                    switch(rDetails[0]){
                        
                        case 'required':
                            
                            if(input.value == ''){
                                return 'Campo nao pode ser vazio'
                            }
                        break


                        case 'min':
                            if(input.value.length < rDetails[1]){
                                console.log(rDetails[1])
                                return 'Campo tem que ter pelo menos ' + rDetails[1]+ ' caracteres'
                            }

                        break

                        case 'email':
                            if(input.value != ''){
                                let reggex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                if(!reggex.test(input.value.toLowerCase())){
                                    return 'digite um E-mail valido'
                                }



                            }
                        break


                       
                    }
                }
            }
            return true
            
        },
        showError:(input, error)=>{
            input.style.borderColor = '#FF0000'

            let errorElement = document.createElement('div')
            errorElement.classList.add('error')
            errorElement.innerHTML = error

            input.parentElement.insertBefore(errorElement, input.elementSubling)

        },
        clearError:()=>{
            let inputs = form.querySelectorAll('input')
            for(let i=0; i<inputs.length; i++){
                inputs[i].style = ''
            }


            let errorElement = document.querySelectorAll('.error')
            for(let i=0; i<errorElement.length; i++){
                errorElement[i].remove()
            }
        }
    }

    let form = document.querySelector('.B7validator')
    form.addEventListener('submit', B7validator.handleSubmit)






     
     


























 

 


















 



 
//rules = as regras

//recuperar o valor ( data-rules)
//verificar se algum campo do input tem o data-rules
//dividir uma String em uma lista ordenada de substrings usando (|)
//fazer um loop em rules
//dividir uma String em uma lista ordenada de substrings usando (=) mas criando outra variavel rDtails (detalhes das regras)
//da um switch e se o input for fazio,retornar a msg
 










 





















 
 
 
 

     
 


 


 







 //|min=2





 