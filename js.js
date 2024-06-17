$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault(); 
        const Tar = $("#Tarefa").val();
        const NovoI = $('<li class="pedra"></li>')
        $(`<h2>${Tar}</h2>`).appendTo(NovoI)
        $(NovoI).appendTo('ul');
        $('#Tarrefa').val('');
    }) 

    $('#pedra').click(function(e){
        console.log(NovoI)
    })
})