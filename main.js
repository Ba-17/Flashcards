function criaCartão(categoria, pergunta, resposta){
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.inner.HTML= `
    <div class="conteudo-cartao">
    <h3>categoria</h3>
</div>

<div class="pergunta-cartao">  
    <p>pergunta</p>
</div>
<div class="resposta-cartao">  
    <p>resposta</p>
</div>
    `
    container.appendChild(cartao);
    }