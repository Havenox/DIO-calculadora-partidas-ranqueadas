# 🏆 Calculadora de Partidas Rankeadas

Este projeto foi desenvolvido como parte de um desafio proposto pela plataforma **DIO (Digital Innovation One)**. O objetivo é calcular o saldo de vitórias de um jogador e classificá-lo em um ranking com base em seu desempenho.

## 🚀 Tecnologias Utilizadas

- **JavaScript** → Manipulação de variáveis, operadores e estruturas de decisão
- **Node.js** (opcional) → Para execução do código no terminal
- **Git e GitHub** → Controle de versão e compartilhamento do código

## 🎯 Objetivo do Projeto

Criar uma função que recebe como parâmetros o número de vitórias e derrotas de um jogador, calcula seu saldo e determina seu nível de acordo com a seguinte classificação:

| Saldo de Vitórias | Ranking |
|------------------|---------|
| 0 - 10  | 🛠️ Ferro |
| 11 - 20  | 🥉 Bronze |
| 21 - 50  | 🥈 Prata |
| 51 - 80  | 🏅 Ouro |
| 81 - 90  | 💎 Diamante |
| 91 - 100 | 🔥 Lendário |
| 101+ | 🏆 Imortal |

## 📝 Como Funciona

O código implementa duas funções principais:

1. **`calculaSaldo(vitorias, derrotas)`** → Calcula o saldo de vitórias.
2. **`calculaRank(saldoVitorias)`** → Retorna o ranking do jogador com base no saldo.

### Exemplo de Saída:

```bash
O Herói tem de saldo de 10 e está no nível de Ferro
```

## 📂 Estrutura do Projeto

```
📂 DIO-calculadora-partidas-ranqueadas
 ├── 📄 index.js  # Código principal do projeto
 ├── 📄 README.md  # Documentação do projeto
```

## 🛠️ Como Executar

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/DIO-calculadora-partidas-ranqueadas.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd DIO-calculadora-partidas-ranqueadas
   ```

3. Execute o código com Node.js:
   ```bash
   node index.js
   ```

## 🤝 Contribuição

Sinta-se à vontade para contribuir com melhorias, abrir issues ou criar pull requests!

---
🚀 Desenvolvido por [Havenox](https://github.com/havenox)
