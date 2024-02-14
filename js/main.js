$(document).ready(function(){
    $('#tel').mask(' (00) 00000-0000');
    $('#cpf').mask('  000.000.000.00');
    $('#cep').mask('  00000-000');

    $('form, form div').validate({
        rules:{
            nome:{required: true},
            cpf:{required: true},
            email:{required: true, email: true},
            tel:{required: true},
            cep:{required: true},
            endereco:{required: true}
        }
    });
});