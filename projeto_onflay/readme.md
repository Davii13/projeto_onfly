 N8N Custom Node: Random.org True Random Generator
Este repositório contém uma infraestrutura local do n8n (utilizando Docker Compose e PostgreSQL) juntamente com um Custom Node desenvolvido em TypeScript que gera números verdadeiramente aleatórios usando a API do Random.org.

Sumário
Pré-requisitos

Configuração e Instalação

Execução Local (Docker Compose)

Desenvolvimento do Custom Node

Execução de Testes (Simulação)

Informações Adicionais e Melhores Práticas

1. Pré-requisitos
Para rodar o projeto, você precisa ter instalado:

Docker e Docker Compose

Node.js e npm (para compilação do Custom Node)

2. Configuração e Instalação
Siga os passos para preparar o ambiente e o Custom Node.

A. Configuração do Ambiente (.env e docker-compose.yml)
O ambiente é configurado diretamente no arquivo docker-compose.yml, que já inclui a configuração correta para o PostgreSQL e o Custom Node:

Variável de Ambiente	Serviço	Valor	Descrição
DB_TYPE	n8n	postgresdb	Define o n8n para usar o PostgreSQL.
DB_POSTGRESDB_HOST	n8n	postgres	Nome do serviço de banco de dados no Docker.
N8N_BASIC_AUTH_ACTIVE	n8n	true	Ativa o login básico do n8n.
NODE_FUNCTION_ALLOW_EXTERNAL	n8n	randomGenerator	Chave: Permite ao n8n carregar o Custom Node com o nome interno randomGenerator.

Exportar para as Planilhas
Montagem do Volume para o Node:

O volume está configurado para mapear a pasta de deploy local para o local interno do n8n, seguindo as melhores práticas:

YAML

# Trecho do docker-compose.yml:
volumes:
  - ./custom_nodes/randomGenerator:/home/node/.n8n/custom/randomGenerator
B. Instalar Dependências e Compilar o Custom Node
O código-fonte (.ts) do node está localizado em node_development/src/Random.node.ts.

Acesse o diretório de desenvolvimento:

Bash

cd node_development/
Instale as dependências (Node/TypeScript):

Bash

npm install
Compile o código TypeScript para JavaScript:

O script build (definido no package.json) usa o tsc para gerar o arquivo .js.

Bash

npm run build
Volte para o diretório raiz:

Bash

cd ..
3. Execução Local (Docker Compose)
Após a compilação, é necessário copiar o arquivo .js compilado para o local mapeado pelo Docker e iniciar os serviços.

Copie o Node Compilado (.js) para o Volume do Docker:

Isso garante que o arquivo finalizado (.js) esteja na pasta que o Docker mapeia (custom_nodes/randomGenerator).

Bash

mkdir -p custom_nodes/randomGenerator
cp node_development/dist/Random.node.js custom_nodes/randomGenerator/
Inicie os serviços (n8n e Postgres):

Bash

docker-compose up -d
Acesso:

O n8n estará acessível em: http://localhost:5678

Usuário/Senha: admin / admin123

O Custom Node Random (True Random Number Generator) estará disponível na busca por "Random" ou "randomGenerator".

4. Desenvolvimento do Custom Node
Para fazer alterações no Custom Node, siga este ciclo de desenvolvimento rápido:

Edite o arquivo: node_development/src/Random.node.ts.

Execute o build na pasta de desenvolvimento: cd node_development/ && npm run build.

Copie o novo arquivo .js para a pasta de deploy (do diretório raiz):
cp node_development/dist/Random.node.js custom_nodes/randomGenerator/

Reinicie apenas o contêiner do n8n para aplicar as alterações:

Bash

docker-compose restart n8n
5. Execução de Testes (Simulação)
Como este Custom Node interage com uma API externa e não há uma suite de testes unitários configurada (como Jest), os testes são executados através do próprio n8n.

Crie um novo workflow.

Adicione o node Random.

Configure Min e Max.

Execute o workflow.

Critérios de Sucesso do Teste:

O node deve retornar um valor numérico válido entre os limites Min e Max.

Em caso de falha de conexão ou limites inválidos (Min > Max), o node deve retornar um erro amigável na execução do workflow.