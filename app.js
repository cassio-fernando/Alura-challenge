// function exibirResultado(tag, texto) {
//   var campo = document.querySelector(tag);
//   campo.innerHTML = texto;
// }

// function criptografar() {
//   var textoEntrada = document.getElementById("campoTexto").value;
//   var resultadoCripto = textoEntrada.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

   
//   if (textoEntrada == 0) {
//     let textoIndicacao = "Nenhuma mensagem encontrada"
//     let textoIndicacao2 = "Digite um texto que você deseja criptografar ou descriptografar."
//     exibirResultado('#texto', textoIndicacao)
//     exibirResultado('#texto2', textoIndicacao2)
//     imagem('block')
//     document.getElementById('botao1').style.display = 'none';  
//   } else {
//     exibirResultado('#texto', resultadoCripto)
//     exibirResultado('#texto2', "")
//     imagem('none')
//     document.getElementById('botao1').style.display = 'block';          
    
//   }
//   limparCampo();
 
// }

// function descriptografar() {
//   var texto = document.getElementById('campoTexto').value;
//   var resultadoDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
//   if (texto == 0) {
//     let textoIndicacao = "Nenhuma mensagem encontrada"
//     let textoIndicacao2 = "Digite um texto que você deseja criptografar ou descriptografar."
//     exibirResultado('#texto', textoIndicacao)
//     exibirResultado('#texto2', textoIndicacao2)
//     imagem('block')
    
    
//   } else {
//     exibirResultado('#texto', resultadoDescripto)
//     exibirResultado('#texto2', "")  
//     imagem('none')   
    
//   }
  
//   limparCampo()  
// }

// function limparCampo() {
//   var texto = document.getElementById('campoTexto');
//   texto.value = '';  
// }

// function imagem(display){
//   document.getElementById('imagemBoneco').style.display = display
//  }


// //  function copiar(display) {  
// //   var btn = document.createElement('button');
// //   btn.id = 'botaoCopiar'; 
// //   btn.style.display = display;
// //   var lbl = document.createTextNode("Copiar");
// //   btn.appendChild(lbl);
// //   btn.onclick = function () {
// //       window.history.go(0);
// //   }
// //   document.body.appendChild(btn);

// //   var resultado = document.getElementById("texto").innerText;
// //   if (resultado.trim() !== "") {
// //     var textareaTemporario = document.createElement("textarea");
// //     textareaTemporario.value = resultado;
// //     document.body.appendChild(textareaTemporario);
// //     textareaTemporario.select();
// //      );
// //     document.body.removeChild(textareaTemporario);
// //   }
// // }


// function copiarResultado() {
//   let textoResultado = document.getElementById('texto').textContent;

//   if (textoResultado) {
//     let textArea = document.createElement('textarea');
//     textArea.value = textoResultado;

//     // Adiciona o textarea ao corpo do documento
//     document.body.appendChild(textArea);

//     // Seleciona o conteúdo do textarea
//     textArea.select();

//     // Executa o comando de cópia
//     document.execCommand('copy');

//     // Remove o textarea do corpo do documento
//     document.body.removeChild(textArea);

//     console.log('Texto copiado: ' + textoResultado);
//   } else {
//     console.log('Nenhum texto para copiar.');
//   }
// }

// function atualizarVisibilidadeBotao() {
//   let textoResultado = document.getElementById('texto').textContent;
//   const botao = document.getElementById('botao1');

//   // Define a visibilidade do botão com base na presença de texto no resultado
//   botao.style.display = textoResultado ? 'block' : 'none';
// }

  
 
function exibirResultado(tag, texto) {
  var campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function criptografar() {
  var textoEntrada = document.getElementById("campoTexto").value;
  var resultadoCripto = textoEntrada.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

  if (textoEntrada == 0) {
    let textoIndicacao = "Nenhuma mensagem encontrada";
    let textoIndicacao2 = "Digite um texto que você deseja criptografar ou descriptografar.";
    exibirResultado('#texto', textoIndicacao);
    exibirResultado('#texto2', textoIndicacao2);
    imagem('block');
    document.getElementById('botaoCopiar').style.display = 'none';
  } else {
    exibirResultado('#texto', resultadoCripto);
    exibirResultado('#texto2', "");
    imagem('none');
    document.getElementById('botaoCopiar').style.display = 'block';
  }
  limparCampo();
}

function descriptografar() {
  var textoEntrada = document.getElementById('campoTexto').value;
  var resultadoDescripto = textoEntrada.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  if (textoEntrada == 0) {
    var textoIndicacao = "Nenhuma mensagem encontrada";
    var textoIndicacao2 = "Digite um texto que você deseja criptografar ou descriptografar.";
    exibirResultado('#texto', textoIndicacao);
    exibirResultado('#texto2', textoIndicacao2);
    imagem('block');
    document.getElementById('botaoCopiar').style.display = 'none';
  } else {
    exibirResultado('#texto', resultadoDescripto);
    exibirResultado('#texto2', "");
    imagem('none');
    document.getElementById('botaoCopiar').style.display = 'block';
  }

  limparCampo();
}

function limparCampo() {
  var texto = document.getElementById('campoTexto');
  texto.value = '';
}

function imagem(display){
  document.getElementById('imagemBoneco').style.display = display;
}
function copiarResultado() {
  var textoResultado = document.getElementById('texto').textContent;

  if (textoResultado) {
    var textArea = document.createElement('textarea');
    textArea.value = textoResultado;
    textArea.style.position = 'fixed';  
    document.body.appendChild(textArea);

    textArea.select();

    try {
      document.execCommand('copy');
      console.log('Texto copiado: ' + textoResultado);
    } catch (err) {
      console.error('Erro ao copiar texto: ', err);
    }

    document.body.removeChild(textArea);

  
    document.getElementById('texto').innerHTML = '';

    
    document.getElementById('botaoCopiar').style.display = 'none';

    location.reload();
  } else {
    console.log('Nenhum texto para copiar.');
  }
}

document.getElementById('botaoCriptografar').addEventListener('click', criptografar);
document.getElementById('botaoDescriptografar').addEventListener('click', descriptografar);
document.getElementById('botaoCopiar').addEventListener('click', copiarResultado);
