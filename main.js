$(document).ready(function(){

    $("#phone").mask("(00) 00000-0000", { 
        placeholder: "(**) *****-****",
    });

    $("#cpf").mask("000.000.000-00", {
        placeholder: "000.000.000-00"
    })

    $("#cep").mask("00.000-000", {
        placeholder: "00.000-000"
    })

    $('form').validate({
        rules:{
            name:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            phone:{
                required: true
            },
            cpf:{
                required: true
            },
            address:{
                required: true
            },
            cep:{
                required: true
            },
        },
        messages:{
            name:"Por favor, insira o seu nome",
            email: "Por favor, insira o seu email",
            phone: "Por favor, insira o seu phone",
            cpf: "Por favor, insira o seu CPF",
            address: "Por favor, insira o seu endereço",
            cep: "Por favor, insira o seu CEP"
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incompletos`)
            }
        }
    })

})