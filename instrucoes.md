# Instruções para Implementação do Portfólio

## Estrutura de Arquivos

```
portfolio_bernard/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    ├── img/
    │   ├── logo.png
    │   ├── bernard-profile.jpg
    │   ├── sobre_o_tempo.png
    │   ├── Perfil_desativado.png
    │   ├── kick_off.png
    │   ├── 300k.png
    │   ├── cliente1.jpg
    │   ├── cliente2.jpg
    │   ├── cliente3.jpg
    │   ├── logo-cliente1.png
    │   ├── logo-cliente2.png
    │   ├── logo-cliente3.png
    │   ├── logo-cliente4.png
    │   └── ... (imagens adicionais para galeria)
    └── videos/
        └── header-background.mp4
```

## Passos para Implementação

1. **Preparação de Recursos**
   - Substitua todas as imagens de exemplo pelos seus arquivos reais
   - Crie versões de diferentes tamanhos para imagens de perfil (small, medium, large)
   - Prepare um vídeo curto para o background do header (opcional)
   - Atualize o ID do seu showreel no YouTube

2. **Personalização do Conteúdo**
   - Atualize textos e descrições para refletir seu trabalho e experiência
   - Adicione seus projetos reais com descrições detalhadas
   - Inclua depoimentos reais de clientes
   - Verifique e atualize links para redes sociais e WhatsApp

3. **Configuração do Formulário**
   - Para funcionalidade real de envio de e-mail, você precisará:
     - Substituir o action do formulário para seu serviço de e-mail preferido
     - Ou implementar um backend para processar o formulário
     - Ou usar serviços como Formspree, Netlify Forms, etc.

4. **Hospedagem**
   - Faça upload de todos os arquivos para seu serviço de hospedagem
   - Certifique-se de manter a estrutura de diretórios intacta
   - Verifique se todos os recursos (imagens, vídeos, fontes) estão carregando corretamente

## Personalizações Adicionais

1. **Cores e Estilo**
   - Para alterar a paleta de cores, edite as variáveis CSS no início do arquivo styles.css:
   ```css
   :root {
     --cor-fundo: #1a1a1a;         /* Fundo geral */
     --cor-texto: #f5f5f5;         /* Texto principal */
     --cor-destaque: #ffc847;      /* Ouro suave */
     /* outras variáveis... */
   }
   ```

2. **Fontes**
   - Para alterar as fontes, edite as variáveis de fonte no CSS e atualize o link do Google Fonts no HTML

3. **Seções**
   - Você pode adicionar ou remover seções conforme necessário
   - Para adicionar uma nova seção, siga o padrão de estrutura HTML das seções existentes

4. **Projetos**
   - Para adicionar novos projetos, duplique o código HTML de um card de projeto existente
   - Atualize o objeto `projetosData` no arquivo main.js para incluir detalhes do novo projeto

## Dicas de Otimização

1. **Imagens**
   - Otimize todas as imagens para web usando ferramentas como TinyPNG
   - Use formatos modernos como WebP quando possível
   - Mantenha as dimensões adequadas para cada uso

2. **Vídeos**
   - Comprima o vídeo de background para um tamanho razoável
   - Considere usar um placeholder estático para dispositivos móveis

3. **Performance**
   - Considere minificar os arquivos CSS e JavaScript para produção
   - Implemente lazy loading para mais recursos além das imagens
   - Teste a performance usando ferramentas como Google Lighthouse

## Suporte e Manutenção

- Verifique regularmente se os links para vídeos externos ainda funcionam
- Atualize seu portfólio com novos projetos periodicamente
- Considere implementar analytics para monitorar o desempenho do site
