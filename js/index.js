/**
 * Habilitando o button de RUN da página
 * conforme inserida palavra no input e carregada na fita
 */
document.getElementById('btn-load').addEventListener('click', () => {
    document.getElementById('btn-click').removeAttribute('disabled');
});
/** 
 * Ao submit do formulário aciona essa função
 */
document.getElementById('form-submit').addEventListener("submit", (event) => {
    event.preventDefault();

    /* Limpando os campos de aceitação ou rejeição */
    document.getElementById('success').style.display = 'none';
    document.getElementById('fail').style.display = 'none';
    document.getElementById('steps').style.display = 'none';
    clearSteps();
    /* Escrevendo o input do usuário na fita */
    submitInTape(document.getElementById('input-value').value);

});
/** 
 * Ao click do botão RUN entra aqui
 */
document.getElementById('btn-click').addEventListener('click', () => {
    document.getElementById('btn-click').setAttribute('disabled', 'disabled');
    /* Realizando a transição na máquina pegando o input do usuário */
    transition(document.getElementById('input-value').value);

    /* Limpando os campos para uma próxima palavra */
    document.getElementById('input-value').value = '';
})
/**
 * Se a palavra for um palíndromo entra aqui
 */
function defineSuccess(word, count) {
    const success = document.getElementById('success');
    success.style.display = 'block';
    success.innerHTML =
        `<strong>${word}</strong> is a binary palindrome! Steps: <strong>${count}</strong>`;
    clearTape();
}
/**
 * Se a palavra NÃO for um palíndromo entra aqui
 */
function defineFail(word) {
    const fail = document.getElementById('fail');
    fail.style.display = 'block';
    fail.innerHTML =
        `<strong>Rejected! (${word})</strong> is not a binary palindrome!`;
    clearTape();
}

/**
 * Adiciona à fita da tela de interface do usuário
 */
function submitInTape(word) {
    for (const i in word) {
        document.getElementsByTagName('li')[i]
            .innerHTML = word[i];
    }
}
/**
 * Função para limpar a fita
 */
function clearTape() {
    const list = document.getElementsByTagName("li");
    for (const element of list) {
        element.innerHTML = '';
    }
}

/**
 * Função para exibir o passo a passo do funcionameno da máquina dada uma entrada
 */
function showSteps(item, steps, currentState, symbol) {
    const stepsBox = document.getElementById('all-steps');
    document.getElementById('steps').style.display = 'block';
    if (item != undefined) {
        const itemStep = document.createElement('p');
        itemStep.innerHTML = `<strong>Step: ${steps + 1}</strong> -> Read symbol: <strong>"${symbol}"</strong> - Write: <strong>"${item.write}"</strong> - Current state: <strong>q${currentState}</strong> - Move: <strong>${item.move}</strong> - Next state: <strong>q${item.next_state}</strong>`;
        itemStep.setAttribute('class', 'list-group-item');
        itemStep.setAttribute('style', 'width:55%; margin:auto;');

        stepsBox.appendChild(itemStep);
    }

}
/**
 * Função para limpar o passo a passo da tela
 */
function clearSteps() {
    document.getElementById('all-steps').innerHTML = '';
}