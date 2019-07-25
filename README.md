# Exemplo de API com NODEJS + EXPRESS + DOCKER + LETS ENCRYPT + CERTBOTS

Este projeto está configurado para subir um container DOCKER que permite realizar chamadas SSL (HTTPS)

# COMO CONFIGURAR

## ARQUIVO ```docker-compose.yml```

- Alterar o nome do volume *certbot-webroot-fourwardutils* para o nome que deseja usar
- Alterar a pasta com o nome do host (fourwardutils.tk) para o nome do host que voce pretende usar
- No meu exemplo estou utilzando a port 80 para chamadas da api, mude para a porta que deseja deixando redirecionamento para 3000

## ARQUIVO ```certbot/Dockerfile```

- Altere na linha **9** o nome da pasta destacada (/webroots/**fourwardutils.tk**/.well-known /scripts) para o nome do seu host

# SUBINDO O CONTAINER NO DOCKER

Para buildar as imagens de uma só vez certifique-se de estar no diretorio ```./https-demo-ssl``` e execute o comando

```docker-compose build```

Após o fim da operação para subir as imagens execute o seguinte comando:

```docker-compose up``` ou ```docker-compose up -d``` sendo o segundo para subir em detached mode ou seja não travando o console.

# CONFIGURANDO CERTIFICADOS DENTRO DO CONTAINER

Quando subir pela primeira vez os container é possivel acessa-los para configurar executando o seguinte comando:

```docker exec -it nome_container bash```


*READ-ME EM DESENVOLVIMENTO*