# Direção de Design — GSFS Mining Landing Page

## Três abordagens consideradas

### 1. Estratigrafia de Precisão

**Tema:** Estratigrafia de Precisão.  
**Introdução:** Uma linguagem editorial-industrial que traduz camadas geológicas e dados espaciais em uma narrativa visual calma, técnica e confiável. A proposta prioriza profundidade, legibilidade e a noção de investigação progressiva.  
**Probabilidade:** 0.07

### 2. Atlas de Campo

**Tema:** Atlas de Campo.  
**Introdução:** Uma direção inspirada em mapas de levantamento e cadernos científicos, equilibrando materiais táteis, pequenas anotações e fotografia abstrata. A emoção é de investigação responsável e colaboração em campo.  
**Probabilidade:** 0.04

### 3. Sinal Contido

**Tema:** Sinal Contido.  
**Introdução:** Um sistema escuro e silencioso no qual sinais ciano aparecem apenas como indícios de informação, sem recorrer a códigos visuais de cyberpunk. A experiência reforça que o GSFS está em desenvolvimento e trabalha para reduzir incerteza, não para prometer certezas.  
**Probabilidade:** 0.08

---

## Abordagem selecionada: Estratigrafia de Precisão

### Movimento de design

**Editorial científico-industrial**, inspirado em cartografia geológica contemporânea, seções estratigráficas e instrumentos de precisão. A página deve ser mais próxima de um relatório visual de tecnologia do que de um site de produto de consumo.

### Princípios centrais

1. **Sinal antes de espetáculo:** cada cor de destaque comunica uma etapa de investigação; não há brilho decorativo excessivo.
2. **Profundidade legível:** superfícies em camadas e linhas topográficas sugerem subsuperfície sem revelar arquitetura proprietária.
3. **Transparência institucional:** o estágio de maturidade é visível, claro e parte da narrativa, não uma nota escondida.
4. **Ritmo de evidência:** o conteúdo caminha de problema a abordagem, evidência disponível, colaboração e contato em blocos assimétricos com leitura fluida.

### Filosofia de cor

O **Deep Navy** sustenta gravidade técnica e segurança institucional. **Deep Blue** e **Steel Blue** criam profundidade geológica e superfícies de leitura. **Technical Cyan** representa sinais, localização e correlação de dados, enquanto o **Controlled Green** aparece apenas em pontos de decisão e priorização. Brancos e cinzas claros reduzem a carga cognitiva nas seções explicativas. A cor não sugere desempenho: ela organiza a informação.

### Paradigma de layout

A página usa uma **espinha vertical de investigação**: a coluna esquerda cria marcos de leitura e a massa de conteúdo alterna entre painéis de evidência, narrativas editoriais e visualizações conceituais. Em telas pequenas, essa espinha se torna uma sequência linear com títulos e CTAs sempre visíveis. Evitam-se blocos genéricos, cartões idênticos e centralização contínua.

### Elementos de assinatura

1. **Régua estratigráfica:** linhas horizontais graduadas, discretas, nas bordas de seções relevantes.
2. **Marcadores de coordenada:** pontos ciano e verdes acompanhados de traços finos, apenas como motivo visual não literal.
3. **Faixas de camada:** recortes suaves e sobreposições de azul profundo que evocam geologia e pesquisa sequencial.

### Filosofia de interação

As interações são instrumentais e discretas: navegação por âncora, foco muito visível, menu mobile fechado por padrão, FAQ expansível e formulário com validação local honesta. Botões respondem de forma curta e física, mas nenhuma interação deve simular dados, uma mensagem enviada ou desempenho técnico.

### Animação

As entradas de seções usam somente opacidade e deslocamento vertical curto, com duração inferior a 300 ms e atraso leve entre itens. Linhas de sinal podem se deslocar sutilmente no hero em dispositivos sem redução de movimento. Todas as transições decorativas são desativadas em `prefers-reduced-motion`.

### Sistema tipográfico

**Exo 2** estabelece uma voz técnica nos títulos, com pesos 500–700, tracking levemente fechado e quebras deliberadas. **Inter** organiza corpo, rótulos e formulários, em 400–600, mantendo contraste alto e entrelinhas generosas. Títulos grandes devem atuar como declarações; microcopy deve ser factual e sem adjetivos inflados.

### Essência da marca

**GSFS é uma deeptech brasileira em desenvolvimento que busca integrar sinais subsuperficiais complementares para apoiar decisões de investigação mineral mais informadas.**  
Personalidade: **precisa, responsável, colaborativa**.

### Voz da marca

Headlines são diretas e prudentes; CTAs convidam colaboração, não conversão agressiva; microcopy declara limites de maneira explícita e profissional. Evitar “revolucionário”, “disruptivo”, “garantido” e qualquer superlativo sem evidência.

Exemplos: “Reduce uncertainty before committing to the next investigation step.”  
“Build the evidence pathway with an industrial validation partner.”

### Wordmark e logo

O símbolo proposto une uma linha de varredura vertical a três camadas geológicas curvas em uma forma geométrica compacta. O wordmark emprega `GSFS` com espaçamento técnico e “Geo-Spectral Fusion Scanner” como descritor, em vez de uma fonte padrão não tratada.

### Cor de assinatura

**GSFS Signal Cyan — #00B6C8.** É o índice visual de sinal, localização e correlação em todos os meios digitais da marca.

## Decisões de conteúdo, integridade e release

A implementação pública deverá manter o conteúdo principal em inglês internacional e usar exclusivamente linguagem compatível com tecnologia em desenvolvimento. A arquitetura ilustrada será declaradamente conceitual e não representará detalhes proprietários.

| Informação | Estado | Tratamento na versão de revisão |
| --- | --- | --- |
| Razão social pública | `PENDING_INFORMATION_NON_BLOCKING` | Não exibida até confirmação. |
| E-mail institucional | `PENDING_INFORMATION_NON_BLOCKING` | Nenhum `mailto:` será mostrado; o formulário permanece como demonstração local. |
| Domínio final | `PENDING_INFORMATION_NON_BLOCKING` | Canonical não será incluído até existir domínio definitivo. |
| LinkedIn público autorizado | `PENDING_INFORMATION_NON_BLOCKING` | Link social omitido. |
| URL de vídeo / GSFS Virtual | `PENDING_INFORMATION_NON_BLOCKING` | Botões e embeds omitidos. |
| Logo e favicon oficiais | `PENDING_INFORMATION_NON_BLOCKING` | Marca conceitual de revisão, claramente substituível por asset oficial. |
| Foto autorizada do fundador | `PENDING_INFORMATION_NON_BLOCKING` | Sem foto; usar monograma visual neutro. |
| Política de privacidade | `PENDING_INFORMATION_NON_BLOCKING` | Nenhum dado é transmitido; exigida antes de ativar qualquer envio real. |

## Style Decisions

- A interface manterá um contraste escuro controlado no hero e fundos claros nas seções de evidência para preservar leitura e sobriedade.
- As imagens serão abstratas, autorais e sem equipamentos reconhecíveis, parceiros, logos ou diagramas de engenharia.
- O produto nunca será descrito como validado em campo, disponível comercialmente ou capaz de substituir sondagem ou métodos existentes.
- A espinha lateral de investigação será tratada como um sistema contínuo de dossiê técnico: marcos numerados, réguas graduadas e etiquetas de evidência, não como tags isoladas.
- Módulos repetidos usarão divisores estratigráficos, marcadores de coordenada, superfícies em camadas e sequenciamento anotado para evitar a aparência de cartões SaaS intercambiáveis.
- O lockup GSFS adotará espaçamento técnico, símbolo de camada/varredura recorrente e tratamento de palavra próprio; ciano significa sinal/localização/correlação e verde permanece exclusivo para priorização, prontidão ou colaboração.
