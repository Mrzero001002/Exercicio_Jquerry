$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault(); 
        const Tar = $("#Tarefa").val();
        const NovoI = $('<li></li>')
        $(`<h2>${Tar}</h2>`).appendTo(NovoI)
        $(NovoI).appendTo('ul');
        $('#Tarrefa').val('');
        const $Tar = $("#Tarefa")
        const $NovoI = $('<li style: text-decoration: line-through> </li>')
        $('h2').onclick(function(){
            $(`
                <ul>
                    <li>
                    <style>
                    h2 {
                    text-decoration: line-through;
                    }
                        <h2>${Tar}</h2>
                    </li>
                </ul>
            `).appendTo($NovoI);
        })
    })
})