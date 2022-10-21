let formCartAdd = document.querySelectorAll('.formCartAdd');
let dot = document.querySelector('.dot');

formCartAdd.forEach(form => {

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        // Adicionar ao contador de itens no carrinho.
        dot.textContent = dot.textContent++ + 1;

        // Receber valores importantes.
        let product_id = form.querySelector('input[name=product_id]').value;
        let buttonCartAdd = form.querySelector('.btn-add-cart');
        buttonCartAdd.classList.remove('btn-info');
        buttonCartAdd.classList.add('btn-warning');
        buttonCartAdd.textContent = 'No Carrinho'


        // Enviar dados para o carrinho.
        console.log('adicionado!');
        $.ajax({
            method: 'POST',
            url: '/cart/',
            data: {
                'product_id': product_id,
            },
            headers: {
                "X-CSRFToken": getCookie("csrftoken")
            },
            dataType: "dataType",
            success: function (response){
                console.log('sucesso');
            }
        })

    })

})

// Pegar CSRF Token
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}