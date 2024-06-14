$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault(); 
        const Tar = $("#Tarefa").val();
        const NovoI = $('<li></li>')
        $(`<h2>${Tar}</h2>`).appendTo(NovoI)
        $(NovoI).appendTo('ul');
        $('#Tarrefa').val('');
    }) 
})