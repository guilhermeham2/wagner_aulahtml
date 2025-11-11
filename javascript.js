document.addEventListener('DOMContentLoaded', function() {
    const inputNome = document.getElementById('name');

    if (inputNome) {
        inputNome.addEventListener('input', function(e) {
            let valor = e.target.value:
            const regexNumeros = /[0-9]/g;
            e.target.value = valor.replace(regexNumeros, '');
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
   
    const inputFornecedor = document.getElementById('fornecedor');

    inputFornecedor.addEventListener('keypress', function(evento) {
       
        const charDigitado = String.fromCharCode(evento.which);
        
        if (/[0-9]/.test(charDigitado)) {
           
            evento.preventDefault();
            
        
        }
    });

    
    inputFornecedor.addEventListener('paste', function(evento) {
       
        const conteudoColado = (evento.clipboardData || window.clipboardData).getData('text');
        
   
        if (/[0-9]/.test(conteudoColado)) {
            
            evento.preventDefault();
          
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    
    const inputCodBarras = document.getElementById('cod_barras');

    inputCodBarras.addEventListener('input', function(e) {
        let valorAtual = e.target.value;
        
        valorAtual = valorAtual.replace(/[^\d]/g, '');
        
        e.target.value = valorAtual;
    });

    inputCodBarras.addEventListener('paste', function(e) {
        const conteudoColado = (e.clipboardData || window.clipboardData).getData('text');
       
        const somenteNumeros = conteudoColado.replace(/[^\d]/g, '');
      
        e.preventDefault();
        document.execCommand('insertText', false, somenteNumeros);
    });
});