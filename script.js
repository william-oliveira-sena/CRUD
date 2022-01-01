// Formatação e teste do telefone se celular ou fixo para salvar na formatação correto com traço
// font https://www.alura.com.br/artigos/criando-uma-mascara-de-telefone-com-javascript?gclid=CjwKCAiA8bqOBhANEiwA-sIlNzibkNDXpyB2Qph_CMDk6q3x2uJRtAh2LsuRNkBIipQSrQVmJst1ZRoCKgEQAvD_BwE

   function tiraHifen(telefone) {
    const textoAtual = telefone.value;
    const textoAjustado = textoAtual.replace(/\-/g, '' );

    telefone.value = textoAjustado;
    
}

    function mascaraDeTelefone(telefone){
        const textoAtual = telefone.value;
        const isCelular = textoAtual.length === 11;
        let textoAjustado;
        if(isCelular) {
            const ddd = textoAtual.slice(0,2);
            const parte1 = textoAtual.slice(2,7);
            const parte2 = textoAtual.slice(7,11);
            textoAjustado = `${ddd}-${parte1}-${parte2}`        
        } else {
            const ddd = textoAtual.slice(0,2);
            const parte1 = textoAtual.slice(2,6);
            const parte2 = textoAtual.slice(6,10);
            textoAjustado = `${ddd}-${parte1}-${parte2}`
        }
        telefone.value = textoAjustado;
}

    function cadastrar(){

        totalcad = 0;
        cadalunos = [];

            let nome = document.getElementById("nome").value;
            let tel = document.getElementById("telefone").value;
            let nasc = document.getElementById("nascimento").value;
            let nota = document.getElementById("nota").value;

        //formatação da data para padrão Brasileiro 
        data = new Date(nasc);
        dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

        let cad = {nome:nome, telefone:tel, nascimento:dataFormatada, nota:nota};
        cadalunos[totalcad] = cad;
           

        let elemento = document.getElementById("saida");
    
    
     elemento.innerHTML += " Nome: " + cadalunos[totalcad].nome + "<br>" + "Telefone:" + cadalunos[totalcad].telefone + "<br>" + "Data de Nascimento:" + cadalunos[totalcad].nascimento + "<br>" + "Nota:" + cadalunos[totalcad].nota + "<br><br>";

    totalcad++;
}