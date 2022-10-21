
// Pegar todos os campos.
let name_product = document.querySelector("[name='name']");
let price = document.querySelector("[name='price']");
let quantity = document.querySelector("[name='quantity']");
let image = document.querySelector("[name='image']");
let types = ['jpeg', 'png', 'jpg']
let feedback = document.querySelector('.form-feedback');
feedback.style.visibility = 'hidden';

// Verificar se as informações estão corretas.

name_product.addEventListener('change', ()=>{

    // Tratar informações.
    if(name_product.value.length >= 1){
        name_product.style.border = '1px solid green';
    }else{
        name_product.style.border = '1px solid red';
    }

})

price.addEventListener('change', ()=>{
    if(price.value.length >= 1){
        price.style.border = '1px solid green';
    }else{
        price.style.border = '1px solid red';
    }
})

quantity.addEventListener('change', ()=>{
    if(quantity.value.length >= 1){
        quantity.style.border = '1px solid green';
    }else{
        quantity.style.border = '1px solid red';
    }
})

image.addEventListener('change', (e)=>{
    let extension = image.files[0].name.split('.').pop()
    if(types.includes(extension)){
        if(image.value.length >= 1){
            image.style.border = '1px solid green';
            // Renderizar imagem selecionada.
            document.querySelector('.image').src = URL.createObjectURL(image.files[0]);
            document.querySelector('#label-image').style.display = 'none';
    
        }else{
            image.style.border = '1px solid red';
        }
    }else{
        feedback.style.visibility = 'visible';
        feedback.textContent = 'Os formatos válidos: (.JPG .JPEG .PNG)'
    }
})


// Tratar informações.
const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    
    e.preventDefault();

    if(name_product.value.length == 0 && price.value.length == 0 && quantity.value.length == 0 && image.value.length == 0){

        name_product.style.border = '1px solid red';
        price.style.border = '1px solid red';
        quantity.style.border = '1px solid red';
        image.style.border = '1px solid red';
        feedback.style.visibility = 'visible';
        feedback.textContent = 'Preencha todos os campos marcados.'

    }else{
        form.submit();
    }

})

const button = document.querySelector("[type='reset']");
button.addEventListener('click', ()=>{

    name_product.style.border = '';
    price.style.border = '';
    quantity.style.border = '';
    image.style.border = '';
    document.querySelector('.image').src = '';
    document.querySelector('#label-image').style.display = 'block';
    feedback.style.visibility = 'hidden';
    document.querySelector('.product-success').style.display = 'none';
    
})
