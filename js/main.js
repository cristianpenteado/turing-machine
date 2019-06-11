function transition(word) {
    if (validateWord(word)) {
        /* Fragmenta a palavra em um array juntamente com um spreed com ''*/
        let fragmentedWord = [...word.split(''), ''];
        /* Declaração de variáveis */
        let count = 0, position = 0, currentState = 0, imagePosition = 50;
        let symbol, move, next_state, write;

        /* Enquanto o estado não for o final ou se a palavra não for um palíndromo
         * Serão percorridos os estados da máquina */
        while (currentState != 8) {
            /* Essa variável recebe o objto do JSON conforme o símbolo lido */
            symbol = turing.states[currentState][fragmentedWord[position]];
            /* Exibe o passo a passo do que está acontecendo na máquina */
            showSteps(symbol, count, currentState, fragmentedWord[position]);
            /* Se não for um palíndromo entra aqui */
            if (symbol == undefined) {
                defineFail(word);
                break;
            }

            /* Atualiza as variáveis com os valores do JSON */
            move = symbol.move;
            next_state = symbol.next_state;
            write = symbol.write;

            /* Altera o estado atual*/
            currentState = next_state;

            /* Escreve no Array o valor de escrita da máquina */
            fragmentedWord[position] = write;

            /* Movimenta para esquerda ou direita no Array*/
            position = move == 'right' ? position + 1 : position - 1;

            /* Incrementa o contador de operações na fita */
            count++;

            if (currentState == 8) defineSuccess(word, count);
        }
        /* Se o alfabeto for inválido entra aqui */
    } else defineFail(word);
}

/* 
 * Validação da entrada de dados 
 */
function validateWord(word) {
    let valueReturn = false;
    for (const i in word) {
        if (word.charAt(i) != 0 && word.charAt(i) != 1) valueReturn = false;
        else valueReturn = true;
    }
    return valueReturn;
}
