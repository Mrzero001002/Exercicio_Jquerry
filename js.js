$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault(); 
        const Tar = $("#Tarefa").val();
        const NovoI = $('<li id="pão"></li>')
        $(`<h2>${Tar}</h2>`).appendTo(NovoI)
        $(NovoI).appendTo('ul');
        $('#Tarrefa').val('');
    }) 
    const li = document.getElementById('pão')
    li.addEventListener('click', function(e){
        alert("olá mundo")
    })
})