$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault(); 
        const Tar = $("#Tarefa").val();
        const NovoI = $('<li></li>')
        $(`<button class="L">${Tar}</button>`).appendTo(NovoI)
        $(NovoI).appendTo('ul');
        $('#Tarrefa').val('');
    });

    $('ul').on('click', 'button.L', function(e){
        $(this).toggleClass('done');
    });
})