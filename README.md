# Desafios do Curso FullCycle ~ Docker

## Desafio Go Lang 

### Imagem docker

[evandrocustodio/fullcycle-docker-desafio-golang](https://hub.docker.com/repository/docker/evandrocustodio/fullcycle-docker-desafio-golang)

Executar o comando:

```
docker run -ti --rm evandrocustodio/fullcycle-docker-desafio-golang
```


## Desafio NodeJS

Executar o comando:

```
docker-compose up -d
```

Três serviços serão iniciados:

1. Banco de Dados MYSQL (Container: db)
2. Aplicação em NodeJS (Container: App, na porta 3000)
3. Nginx na porta 80, com redirect para a aplicação NodeJs
