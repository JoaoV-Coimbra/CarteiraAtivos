# Projeto Arvore

Aplicacao React/Vite para acompanhar a vida dos ativos de uma carteira: lista de ativos, detalhe por ativo, curva de P&L, historico diario e cadastro manual ou por planilha.

Esta versao do repositorio esta preparada para ser publicada no GitHub usando apenas dados demonstrativos em `src/data.ts`.

## Funcionalidades

- Visao **Vida dos Ativos** com seletor de ativo, cards de valor aplicado, valor atual, maior ganho e maior perda.
- Grafico de ciclo de vida do P&L bruto por ativo.
- Linha do tempo com historico diario do ativo selecionado.
- Aba **Lista de Ativos** com busca, filtro por status e tabela geral.
- Aba **Historico** com registros completos do ativo selecionado.
- Aba **Cadastro de Ativos** para inserir ativos manualmente ou importar uma planilha CSV/TSV/TXT.
- Download da planilha modelo de cadastro.
- Exportacao dos cadastros feitos pelo usuario em CSV.
- Persistencia local dos cadastros no navegador.

## Cadastro de ativos

O cadastro aceita dois caminhos:

1. **Formulario manual**
   - Codigo
   - Emitente
   - Valor aplicado
   - Valor liquido
   - Data

2. **Entrada por planilha**
   - Colar os dados em texto na caixa de importacao.
   - Importar arquivo `.csv`, `.tsv` ou `.txt`.
   - Baixar um modelo pelo botao **Baixar modelo**.

### Layout da planilha modelo

Use preferencialmente `;` como separador, porque funciona melhor com valores brasileiros usando virgula decimal.

```csv
Codigo;Emitente;Valor Aplicado;Valor Liquido;Data
C285318;Banco Exemplo;100000,00;104250,50;2026-09-27
```

Colunas aceitas:

- `Codigo`: identificador do ativo. O sistema normaliza para maiusculo.
- `Emitente`: banco, fundo, empresa ou emissor.
- `Valor Aplicado`: valor original aplicado.
- `Valor Liquido`: valor atual/liquido do ativo.
- `Data`: data no formato `YYYY-MM-DD`. Tambem aceita `DD/MM/YYYY` na importacao.

O sistema tambem reconhece alguns nomes equivalentes de coluna, como `Cod`, `Code`, `Emissor`, `Valor Atual` e `Valor Bruto`.

## Onde os dados ficam salvos

### Base publica do projeto

Arquivo:

```text
src/data.ts
```

Este arquivo contem somente tipos TypeScript e uma base pequena de exemplo. Ele pode ir para o GitHub.

### Cadastros feitos na tela

Os ativos cadastrados pelo usuario ficam no `localStorage` do navegador em formato CSV, na chave:

```text
projeto-arvore.registered-assets.csv
```

Esse armazenamento e local por navegador/dispositivo. Ele nao sobe para GitHub e nao grava automaticamente um arquivo fisico dentro do projeto.

Para manipular esses dados fora do app, use o botao:

```text
Baixar cadastros CSV
```

O arquivo baixado se chama:

```text
cadastro-ativos.csv
```

### Modulo responsavel pelo CSV

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
  PortfolioApp.tsx              Tela principal e fluxos da aplicacao
  data.ts                       Dados publicos/demonstrativos
  components/
    PnlChart.tsx                Grafico de P&L
  lib/
    format.ts                   Formatacao de moeda, data e texto
    registeredAssetsCsv.ts      Persistencia/exportacao CSV dos cadastros
```

Arquivos importantes na raiz:

```text
package.json                    Scripts e dependencias
styles.css                      Estilos globais
.gitignore                      Arquivos ignorados no Git
README.md                       Esta documentacao
```

## GitHub e dados sensiveis

O `.gitignore` atual ignora:

```text
node_modules/
dist/
*.log
vite-*.log
.env
.env.*
```

Antes de publicar no GitHub, confira:

```bash
git status --short
```

O `git status` deve mostrar somente arquivos de codigo, configuracao e documentacao que voce realmente quer publicar.

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

Instalar dependencias:

```bash
npm install
```

Rodar em desenvolvimento:

```bash
npm run dev
```

Por padrao, o Vite sobe em:

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

## Observacoes tecnicas

- O app e frontend-only. Sem backend, ele nao consegue gravar automaticamente um CSV dentro da pasta do projeto.
- Os cadastros do usuario ficam no navegador ate serem limpos ou ate o armazenamento local ser apagado.
- Para persistencia compartilhada entre usuarios/dispositivos, o proximo passo seria adicionar backend, banco de dados ou servico como Supabase.
- A exportacao CSV foi mantida para facilitar analise posterior em Excel, Google Sheets ou scripts.
