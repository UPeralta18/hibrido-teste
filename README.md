# Configuração
## Instalação do Tema
1. Extrair os arquivos na pasta "app/design/frontend".
2. No painel administrativo do Magento 2, ir em Content > Configuration. Na tabela que aparecer, clicar em "Edit" na última opção.
![Captura de tela de 2023-07-15 13-23-37](https://github.com/UPeralta18/hibrido-teste/assets/32331106/a891bb4c-c94d-4861-957a-c78bf8e2d124)
3. Em "Applied Theme", escolher a opção "Hibrido" e clicar em "Save Configuration".

## Configuração dos módulos

### Produtos
1. No painel administrativo do Magento 2, vá em Content > Pages e clique no botão "Select" e "Edit" na linha onde se diz "Home Page"
2. Clique em "Content" e, em seguida, no botão "Edit with page builder".
3. No menu da lateral esquera, abra o submenu "Element" e clique e arraste para o centro da tela o elemento "HTML Code", caso não haja nenhum elemento do tipo na tela.
4. Passe o mouse por cima do elemento criado e, nos ícones que aparecem, clique no botão de engrenagem ("Edit"), para abrir o editor.
5. Clique no botão "Insert Widget".
6. Em "Widget Type", selecione a opção "Catalog Products List".
7. Em "Display Page Control", selecione a opção "No". Em "Number of Products to Display" digite o número desejado.
8. (Opcional) Caso queira que apenas produtos de uma categoria específica apareçam, em "Conditions", clique no botão de mais ("Add") e em "Please choose a condition to add", selecione "Category". Clique na reticencias ao final de "Category is ..." e digite o código da categoria ou clique no primeiro botão após a caixa de texto ("Open Choser") e selecione a categoria desejada.

### Banner rotativo
1. No painel administrativo do Magento 2, vá em Content > Pages e clique no botão "Select" e "Edit" na linha onde se diz "Home Page"
2. Clique em "Content" e, em seguida, no botão "Edit with page builder".
3. No menu da lateral esquera, abra o submenu "Element" e clique e arraste para o centro da tela o elemento "HTML Code", caso não haja nenhum elemento do tipo na tela.
4. Passe o mouse por cima do elemento criado e, nos ícones que aparecem, clique no botão de engrenagem ("Edit"), para abrir o editor.
5. Adicione o seguinte código: <div class="rotate-banner">
6. Pule uma linha e clique no botão "Insert Image".
7. Caso ainda não tenha feito o upload da imagem, clique no botão "Upload Image" e selecione o arquivo no seu computador. Selecione a imagem desejada e clique no botão "Add Selected".
8. Repita os passos 6 e 7 para quantas imagens desejar colocar.
9. Após colocar todas as imagens desejadas, pule uma linha e coloque o código: </div>
#### IMPORTANTE
As imagens serão fixadas com a altura de 600px e largura máxima da página (sem considerar as bordas laterais) no desktop. No mobile a altura da imagem será de 250px.

### Banners com links

### Seção de apelos comerciais

# Concepção
