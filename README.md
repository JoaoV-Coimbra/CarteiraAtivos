# Projeto Árvore

Aplicação React/Vite para acompanhar a vida dos ativos de uma carteira: lista de ativos, detalhe por ativo, curva de P&L, histórico diário e cadastro manual ou por planilha.

Esta versão do repositório está preparada para ser publicada no GitHub usando apenas dados demonstrativos em `src/data.ts`.

## Funcionalidades

- Visão **Vida dos Ativos** com seletor de ativo, cards de valor aplicado, valor atual, maior ganho e maior perda.
- Gráfico de ciclo de vida do P&L bruto por ativo.
- Linha do tempo com histórico diário do ativo selecionado.
- Aba **Lista de Ativos** com busca, filtro por status e tabela geral.
- Aba **Histórico** com registros completos do ativo selecionado.
- Aba **Cadastro de Ativos** para inserir ativos manualmente ou importar uma planilha CSV/TSV/TXT.
- Download da planilha modelo de cadastro.
- Exportação dos cadastros feitos pelo usuário em CSV.
- Persistência local dos cadastros no navegador.

## Cadastro de ativos

O cadastro aceita dois caminhos:

1. **Formulário manual**
   - Código
   - Emitente
   - Valor aplicado
   - Valor líquido
   - Data

2. **Entrada por planilha**
   - Colar os dados em texto na caixa de importação.
   - Importar arquivo `.csv`, `.tsv` ou `.txt`.
   - Baixar um modelo pelo botão **Baixar modelo**.

### Layout da planilha modelo

Use preferencialmente `;` como separador, porque funciona melhor com valores brasileiros usando vírgula decimal.

```csv
Código;Emitente;Valor Aplicado;Valor Líquido;Data
C285318;Banco Exemplo;100000,00;104250,50;2026-09-27
```

Colunas aceitas:

- `Código`: identificador do ativo. O sistema normaliza para maiúsculo.
- `Emitente`: banco, fundo, empresa ou emissor.
- `Valor Aplicado`: valor original aplicado.
- `Valor Líquido`: valor atual/líquido do ativo.
- `Data`: data no formato `YYYY-MM-DD`. Também aceita `DD/MM/YYYY` na importação.

O sistema também reconhece alguns nomes equivalentes de coluna, como `Cod`, `Code`, `Emissor`, `Valor Atual` e `Valor Bruto`.

## Onde os dados ficam salvos

### Base pública do projeto

Arquivo:

```text
src/data.ts
```

Este arquivo contém somente tipos TypeScript e uma base pequena de exemplo. Ele pode ir para o GitHub.

### Cadastros feitos na tela

Os ativos cadastrados pelo usuário ficam no `localStorage` do navegador em formato CSV, na chave:

```text
projeto-arvore.registered-assets.csv
```

Esse armazenamento é local por navegador/dispositivo. Ele não sobe para GitHub e não grava automaticamente um arquivo físico dentro do projeto.

Para manipular esses dados fora do app, use o botão:

```text
Baixar cadastros CSV
```

O arquivo baixado se chama:

```text
cadastro-ativos.csv
```

### Módulo responsável pelo CSV

Arquivo:

```text
src/lib/registeredAssetsCsv.ts
```

Responsabilidades:

- definir o tipo `RegisteredAssetRow`;
- converter os cadastros para CSV;
- ler cadastros salvos em CSV;
- salvar no `localStorage`;
- migrar automaticamente o formato antigo em JSON, caso exista;
- baixar arquivos CSV pelo navegador.

## Estrutura principal

```text
src/
  PortfolioApp.tsx              Tela principal e fluxos da aplicação
  data.ts                       Dados públicos/demonstrativos
  components/
    PnlChart.tsx                Gráfico de P&L
  lib/
    format.ts                   Formatação de moeda, data e texto
    registeredAssetsCsv.ts      Persistência/exportação CSV dos cadastros
```

Arquivos importantes na raiz:

```text
package.json                    Scripts e dependências
styles.css                      Estilos globais
.gitignore                      Arquivos ignorados no Git
README.md                       Esta documentação
```

## GitHub e dados sensíveis

O `.gitignore` atual ignora:

```text
node_modules/
dist/
*.log
vite-*.log
.env
.env.*
*.local
*.pem
*.key
*.p12
*.pfx
*.csv
*.tsv
*.xls
*.xlsx
src/app.ts
```

Antes de publicar no GitHub, confira:

```bash
git status --short
```

O `git status` deve mostrar somente arquivos de código, configuração e documentação que você realmente quer publicar.

Fluxo sugerido para primeiro envio:

```bash
git init
git add .
git status --short
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git push -u origin main
```

## Rodar localmente

Instalar dependências:

```bash
npm install
```

Rodar em desenvolvimento:

```bash
npm run dev
```

Por padrão, o Vite sobe em:

```text
http://127.0.0.1:5173/
```

Se a porta estiver ocupada, ele usa outra, como `5174`.

Gerar build:

```bash
npm run build
```

Visualizar build:

```bash
npm run preview
```

## Observações técnicas

- O app é frontend-only. Sem backend, ele não consegue gravar automaticamente um CSV dentro da pasta do projeto.
- Os cadastros do usuário ficam no navegador até serem limpos ou até o armazenamento local ser apagado.
- Para persistência compartilhada entre usuários/dispositivos, o próximo passo seria adicionar backend, banco de dados ou serviço como Supabase.
- A exportação CSV foi mantida para facilitar análise posterior em Excel, Google Sheets ou scripts.
