$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault(); 
        const Tar = $("#Tarefa").val();
        const NovoI = $('<li></li>')
        $(`<button class="L">${Tar}</button>`).appendTo(NovoI)
        $(NovoI).appendTo('ul');
        $('#Tarrefa').val('');
        $('.L').on('click', function(e){
            $('.L').prop('disabled', true);
            $('.L').css('text-decoration', 'line-through')

            $('.L').prop('disabled', false)
            $('.L').css('text-decoration', 'none');
        });
    })
})