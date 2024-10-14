# BATALHA DE CARTAS

# Conceito
    Uma equipe de 3 personagens em cartas lutam contra outros 3 personagens. É um jogo de turnos e a equipe que tiver pelo
menos 1 personagem com vida ganha. A equipe que não tiver nenhum personagem com vida perde.
    Os turnos serão alterandos para cada jogador. O primeiro jogador daquele turno escolhe o personagem atacante e quem esse
personagem vai atacar e rola um dado de 1 a 6. O jogador defensor escolhe um personagem (pode ser o que está sendo atacado ou outro qualquer) e rola um dado de 1 a 6.
    O resultado dos dados podem ser buffs ou debuffs, sendo 1 o pior debuff e 6 o melhor buff.
- 1 e 2 -> debuffs
- 3 e 4 -> buffs
- 5 e 6 -> super buffs
    O cartão de personagem tem atributos como: vida, poder e 6 habilidades enumeradas, além de um nome e uma imagem associada ao card.

# TELAS

# Tela Inicial
    Uma tela principal da escolha da equipe (duas equipes são apresentadas e uma delas pode ser a escolhida).

    Futuramente, isso poderá ser trocado por uma montagem de equipe, onde o usuário escolhe quais personagens comporão a sua equipe.
    
![Tela Inicial](assets/screens/initial.png)


# Tela de Batalha
    A tela será um campo de cartas. Acima na esquerda aparecerá o turno atual e acima na direita o "time inimigo". Abaixo do
turno atual, mostrar um timer regressivo para a próxima jogada. O timer será como xadrez, um tempo X será definido e a cada jogada um tempo Y será somado. Se o tempo chegar a zero, o jogador perde. 
    No plano central, será mostrado o time inimigo acima e o time aliado abaixo. Dentre eles, será mostrado um campo onde se
pode colocar cards, com um limite de 3 ou 5 espaços para card. Os cards estarão em uma fileira, mas quando forem batalhar, avançarão uma fileira, ficando sozinho (a não ser que haja alguma outra carta que esteja lá por alguma habilidade). O espaço desse fileira mais adianta também será de 3 ou 5.
    Ainda no plano central, a esquerda, ficarão os espaços dos dados. E a direita o placar de quem ganhou cada turno. (Isso
não faz sentido na vdd, só os dados).
    Abaixo dos seus cards, aparecerá o nome você.
    Se algum card for clicado, ele será expandido para ser mostrado.
    No campo, os cards serão mostrados os pontos de vida, o poder de ataque e a última habilidade.

![Tela de Batalha](assets/screens/battle.png)

# Tela Final
    A tela de batalha ficará borrada, e aparecerá um modal acima dela (z index). O modal terá o texto "Vitória" e depois um 
texto menor "Deixe seu e-mail para receber atualizações", um input para e-mail, um botão de confirmar e um X para fechar". 
    
    O fluxo do clique, seja no X ou no "confirmar" será voltar a tela inicial.

    Ao confirmar, o email deve ser cadastrado no firebase e um email será enviado ao jogador (a definir mensagem).

![Modal Final](assets/screens/end.png)

# Os Cards
    Os cards serão mostrados com: 
- foto; 
- nome no meio, abaixo da foto; 
- texto das habilidades enumeradas (para efeitos de dado);
- Número de poder de ataque e quantidade de vida.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.29.

# SOBRE RODAR O PROJETO

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Para buildar o projeto
ng build --output-path docs --base-href /batalha-das-cartas/
cp docs/index.html docs/404.html
git add .
git commit -m "Publicação no GitHub Pages"
git push

Acesse seu repositório no GitHub.
Vá para Settings -> Pages.
Em Source, selecione:
Branch: main
Folder: /docs
Aguarde alguns minutos para que as alterações sejam aplicadas.