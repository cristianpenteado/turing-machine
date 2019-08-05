# Turing Machine for Binary Palindrome (Máquina de Turing para Palíndromo Binário)

-  ### Autores: [Cristian Penteado](http://github.com/cristianpenteado) & [Douglas Scaini](http://github.com/douglasscaini)

 ## Índice
-  [Objetivo](#id01)
-  [O que é um palíndromo?](#id02)
-  [Uma Máquina de Turing é uma 7-tupla?](#id03)
-  [Alfabeto](#id04)
-  [Diagrama de Estados](#id05)
-  [Função de Transição](#id06)
-  [Referências](#id07)

## Objetivo:<a name="id01"></a>

O seguinte projeto proposto visa desenvolver um protótipo de Máquina de Turing para resolução de um problema. Com base nisso, desenvolvemos uma Máquina de Turing para validar palíndromos de números binários.

## O que é um palíndromo?<a name="id02"></a>

É uma palavra, frase ou qualquer outra sequência de unidades que tenha a propriedade de poder ser lida tanto da direita para a esquerda como da esquerda para a direita.

Exemplos: "radar", "mirim", "A torre da derrota", "11011", etc..

## Uma Máquina de Turing é uma 7-tupla?<a name="id03"></a>

  Uma Máquina de Turing é uma 7-tupla M = (Q, Σ, Γ, δ, q0, B, F), onde:

-  **Q** é um conjunto finito de estados;

-  **Σ** conjunto finito de símbolos de entrada.

-  **Γ** conjunto - completo de símbolos, Σ é um subconjunto.

-  **δ** é uma função parcial δ: Q × Γ → Q × Γ × {L,R}, chamada de função de transição.

-  **q0** ∈ Q é o estado inicial;

-  **B (ou ☐)** é um símbolo que representa um branco (está em Γ mas não em Σ).

-  **F** ∈ Q é o subconjunto de estados finais.

### M = ( {q0, q1, q2, q3, q4, q5, q6, q7, q8}, {0,1}, {0,1,B}, δ, q0, B, {q8} )

## Alfabeto:<a name="id04"></a>

**0, 1**

## Diagrama de Estados:<a name="id05"></a>

![diagrama de estados](https://ap.imagensbrasil.org/images/2019/05/23/diagrama.png)

## Função de transição (δ):<a name="id06"></a>

![tabelafuncao](https://ap.imagensbrasil.org/images/2019/05/23/tabelafuncao.png)

## Referências:<a name="id07"></a>  

1.  [Definição de Palíndromo.](https://pt.wikipedia.org/wiki/Pal%C3%ADndromo)
2.  [O que é uma Máquina de Turing?](http://www.dainf.ct.utfpr.edu.br/~rdutra/courses/2015-2/tc_aulas/aula9.pdf)
3.  [Máquina de Turing para Palíndromos.](https://www.youtube.com/watch?v=Ynd5on9g6Q8)
4.  [Diagrama de estados para Máquina de Turing.](http://www.jflap.org/)
