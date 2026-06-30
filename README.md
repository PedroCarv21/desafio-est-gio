# Minha Solução — Banco Agilize



## Stack
- **Backend:** Node.js versão 24 (API com Express)
- **Frontend:** HTML/CSS e JavaScript com React

## Pré-requisitos e dependências
- Node.js 24+ ou superior instalado
- npm
- Instalar dependências em cada projeto:

## Como executar

### Backend (API)
```bash
cd backend

npm install

npm run start
```

A API vai estar disponível em http://localhost:3000

### Frontend
```bash
cd frontend

npm install

npm run dev
```

A aplicação ficará disponível em http://localhost:5173

## Exemplo de uso
```
1. Criar uma conta acessando localhost:5173 (não esqueça de preencher o nome do titular, tipo de conta e o saldo).
2. Clique no botão 'Criar Conta'.
3. A conta aparece automaticamente na lista de contas
4. Para realizar um saque:
   - Informe um valor
   - Clique no botão 'Sacar'.
5. Realizar transferência:
   - Clique em 'seleciona a conta' e escolha para qual usuário você deseja enviar o dinheiro.
   - Informe um valor que será enviado.
   - Clique no botão 'Transferir'

```

**OBS 1: se a conta for corrente, haverá uma taxa de R$ 1,00 para cada saque realizado.**

**OBS 2: se a conta for corrente, haverá um cheque especial e a conta poderá ficar até - R$ 500,00.**

## Observações (opcional)
- O projeto utiliza arquitetura separando frontend e backend.
- A API segue padrão REST com Express.
- O estado das contas é atualizado via comunicação entre frontend e backend.
- Não há persistência em banco de dados externo, apenas a utilização de um array para o armazenamento de dados em memória.