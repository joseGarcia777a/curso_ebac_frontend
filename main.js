$(document).ready(function(){
    
    $('#formulario').on("submit",function(e){
        e.preventDefault();
        const tarefa = $('#tarefa').val();
        console.log(tarefa);

        $('ul').append(`<li class="lista">${tarefa}</li>`);

        $('.lista').click(function(){
            $('li').css('text-decoration', 'line-through');
        });

    });

});
