$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault(); 
        const Tar = $("#Tarefa").val();
        const NovoI = $('<li style="display: none"></li>')
        $(`<h2>${Tar}</h2>`).appendTo(NovoI)
        $(NovoI).appendTo('ul');
        $(NovoI).fadeIn(1000);
        $('#Tarrefa').val('');
    }) 
})