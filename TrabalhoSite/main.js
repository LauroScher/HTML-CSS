const form = document.getElementById('form');
const nome = document.getElementById('nome');
const senha = document.getElementById('senha');
const textarea = document.getElementById('textarea');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
}); //evita o carregamento da página

function test(){
    const usuario = nome.value;
    const password = senha.value;
    const texto = textarea.value;
    if (texto === 'qGphJD' && usuario !=='' && password !=='' ){
        alert("Login feito com sucesso");
    }else{
        alert("ERRO!")
    }
}