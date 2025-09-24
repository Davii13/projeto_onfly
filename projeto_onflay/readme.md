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
Configure o arquivo .env (opcional) caso queira sobrescrever variáveis padrão:

text
Copiar código
# Exemplo de variáveis de ambiente
DB_HOST=postgres
DB_PORT=5432
DB_USER=n8n
DB_PASSWORD=n8npassword
DB_NAME=n8n
Executando o serviço localmente com Docker
Subir os containers do Docker:

bash
Copiar código
docker-compose up -d
Verificar se os containers estão rodando:

bash
Copiar código
docker-compose ps
Acessar o serviço:

n8n: http://localhost:5678

Instalar dependências (opcional)
Se você for rodar scripts Node.js fora do Docker:

bash
Copiar código
cd node_development
npm install
Configuração do ambiente
Banco de dados PostgreSQL já está configurado via Docker Compose.

Caminhos de armazenamento e dados do n8n estão mapeados para:

Copiar código
n8n_data/
Variáveis de ambiente podem ser definidas no .env ou no próprio Docker Compose.

Executando os testes
Se houver testes configurados no projeto, execute:

bash
Copiar código
npm test
ou, se usando Docker:

bash
Copiar código
docker exec -it <nome_do_container> npm test
Estrutura do projeto
bash
Copiar código
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

Autor: Seu Nome
Data: 2025

yaml
Copiar código

---

Se você quiser, posso também **adaptar o README com instruções específicas do seu nó customizado `RandomGenerator` no n8n**, para que qualquer pessoa que clonar o projeto consiga rodar exatamente como você tem localmente.  

Quer que eu faça essa versão detalhada?






Você disse:
me de o radme completo aq esta o caminho se preciae 
"C:\Users\davin\Desktop\clone ti\projeto_onfly\projeto_onflay\custom_nodes\randomGenerator"


O ChatGPT disse:
Perfeito! Vou criar um README.md completo e detalhado para o seu projeto, incluindo instruções específicas para o nó customizado RandomGenerator que está no caminho:

bash
Copiar código
C:\Users\davin\Desktop\clone ti\projeto_onfly\projeto_onflay\custom_nodes\randomGenerator
markdown
Copiar código
# Projeto OnFly

Este é o repositório do projeto **OnFly**, desenvolvido utilizando **Node.js**, **n8n** e **Docker**.  
Inclui nós customizados para o n8n, como o `RandomGenerator`, além de configuração de banco de dados PostgreSQL e scripts para execução local do serviço.

---

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Docker](https://www.docker.com/get-started)  
- [Docker Compose](https://docs.docker.com/compose/install/)  
- [Git](https://git-scm.com/)  
- [Node.js](https://nodejs.org/) (opcional, caso precise rodar scripts fora do Docker)  

> Observação: O projeto foi desenvolvido em **Windows** com Git Bash, mas pode ser executado em **Ubuntu/Linux**.

---

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/SEU_USUARIO/projeto_onfly.git
cd "projeto_onfly/projeto_onflay"
Configure o arquivo .env (opcional) caso queira sobrescrever variáveis padrão:

text
Copiar código
# Exemplo de variáveis de ambiente
DB_HOST=postgres
DB_PORT=5432
DB_USER=n8n
DB_PASSWORD=n8npassword
DB_NAME=n8n
Executando o serviço localmente com Docker
Subir os containers do Docker:

bash
Copiar código
docker-compose up -d
Verificar se os containers estão rodando:

bash
Copiar código
docker-compose ps
Acessar o serviço:

n8n: http://localhost:5678

Instalar dependências (Node.js)
Se você for rodar scripts Node.js fora do Docker:

bash
Copiar código
cd node_development
npm install
Isso instala pacotes necessários para desenvolvimento dos nós customizados.

Nó Customizado: RandomGenerator
O nó RandomGenerator está localizado em:

bash
Copiar código
custom_nodes/randomGenerator/Random.node.js
Permite gerar números aleatórios para fluxos do n8n.

Para adicionar o nó ao n8n local, certifique-se de que a pasta custom_nodes esteja mapeada em n8n_data/custom.

Arquivo SVG de ícone: custom_nodes/randomGenerator/random.svg.

Configuração do ambiente
Banco de dados PostgreSQL já está configurado via Docker Compose.

Caminhos de armazenamento e dados do n8n estão mapeados para:

Copiar código
n8n_data/
Variáveis de ambiente podem ser definidas no .env ou no próprio Docker Compose.

Executando testes
Se houver testes configurados no projeto:

bash
Copiar código
npm test
ou, se usando Docker:

bash
Copiar código
docker exec -it <nome_do_container> npm test
Estrutura do projeto
bash
Copiar código
projeto_onflay/
├── custom_nodes/         # Nós customizados do n8n
│   └── randomGenerator/  # Nó RandomGenerator
├── node_development/     # Scripts Node.js
├── n8n_data/             # Dados e logs do n8n
├── docker-compose.yml    # Configuração dos containers
├── .gitignore
└── README.md
Informações adicionais
Todos os arquivos binários e dependências externas estão ignorados via .gitignore.

Evite commitar node_modules ou dados sensíveis.

Desenvolvido usando Windows/Ubuntu com Docker e Git Bash.

Para dúvidas ou suporte, entre em contato com a equipe pelo e-mail do projeto.

Autor: Seu Nome
Data: 2025
