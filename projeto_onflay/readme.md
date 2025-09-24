# Projeto OnFly

Este é o repositório do projeto **OnFly**, desenvolvido usando Node.js, n8n e Docker.  
Ele inclui nós customizados, configuração de banco de dados PostgreSQL e scripts para execução local do serviço.

---

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Docker](https://www.docker.com/get-started)  
- [Docker Compose](https://docs.docker.com/compose/install/)  
- [Git](https://git-scm.com/)  
- [Node.js](https://nodejs.org/) (opcional, caso precise rodar scripts fora do Docker)

> Observação: O projeto foi desenvolvido no **Windows** com Git Bash, mas pode ser executado em Linux/Ubuntu.

---

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/SEU_USUARIO/projeto_onfly.git
cd projeto_onfly






docker-compose up -d
Verificar se os containers estão rodando:


docker-compose ps
Acessar o serviço:

n8n: http://localhost:5678

Instalar dependências (opcional)
Se você for rodar scripts Node.js fora do Docker:


cd node_development
npm install
Configuração do ambiente
Banco de dados PostgreSQL já está configurado via Docker Compose.

Caminhos de armazenamento e dados do n8n estão mapeados para:


n8n_data/
Variáveis de ambiente podem ser definidas no .env ou no próprio Docker Compose.

Executando os testes
Se houver testes configurados no projeto, execute:


npm test
ou, se usando Docker:


docker exec -it <nome_do_container> npm test
Estrutura do projeto

projeto_onfly/
├── node_development/      # Scripts e nós customizados
├── n8n_data/              # Dados e logs do n8n
├── docker-compose.yml     # Configuração dos containers
├── .gitignore
└── README.md
Informações adicionais
Todos os arquivos binários e dependências externas estão ignorados via .gitignore.

Evite commitar node_modules ou dados sensíveis.

Desenvolvido usando Windows/Ubuntu com Docker e Git Bash.

Para qualquer dúvida ou suporte, entre em contato com a equipe pelo e-mail do projeto.

Autor: Davi Nunes carvalho
Data: 2025








