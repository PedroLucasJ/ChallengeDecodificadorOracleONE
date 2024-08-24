const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

const crypto = [
  ["a", "ai"],
  ["e", "enter"],
  ["i", "imes"],
  ["o", "ober"],
  ["u", "ufat"],
];

function encryptText(text) {
  let encryptedText = text.toLowerCase();
  const sortedCrypto = crypto.slice().sort((a, b) => b[1].length - a[1].length); 

  for (let [letter, cipher] of sortedCrypto) {
    let regex = new RegExp(letter, "g");
    encryptedText = encryptedText.replace(regex, cipher);
  }

  return encryptedText;
}

function decryptText(text) {
  let decryptedText = text.toLowerCase();
  const sortedCrypto = crypto.slice().sort((a, b) => b[1].length - a[1].length); 
  const reversedCrypto = sortedCrypto.reverse(); 

  for (let [letter, cipher] of reversedCrypto) {
    let regex = new RegExp(cipher, "g");
    decryptedText = decryptedText.replace(regex, letter);
  }

  return decryptedText;
}

function processText(processFunction) {
    let inputText = textArea.value.toLowerCase();
    const validPattern = /^[a-z\s]*$/;

    if (!validPattern.test(inputText)) {
        alert("O texto deve conter apenas letras minúsculas, sem acentos ou caracteres especiais.");
        return;
    }

    let resultText = processFunction(inputText);
    mensagem.value = resultText;
}

document.querySelector('.but-encrypt').addEventListener('click', function() {
    processText(encryptText);
});

document.querySelector('.but-decrypt').addEventListener('click', function() {
    processText(decryptText);
});

document.querySelector('.but-copy').addEventListener('click', function() {
    mensagem.select();
    document.execCommand('copy');
});
