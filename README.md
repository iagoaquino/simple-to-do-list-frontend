# Frontend to-do-list

## Instalação sem Docker

Abra o terminal nessa pasta e digite

```bash
npm run install
```

Após concluir a instalação ainda no terminal digite

```bash
npm run dev
```

Após isso basta acessar o site "http://localhost:5173" e a interface estará lá

## Instalação com Docker

Abra o terminal nessa pasta e digite

```bash
docker build -t <nome da imagem> .
```

Após concluir a construção da imagem ainda no terminal digite

```bash
docker run -it -p 5173:5173 <nome da imagem>
```

Obs: Por mais que você consiga acessar a interface o gerenciamento de tarefas é feito pelo backend por isso você também vai precisar executar o codigo que esta no repositorio https://github.com/iagoaquino/simple-to-do-list-backend para poder fazer uso total das funcionalidades dessa aplicação, se irá executar com o docker ou normal fica a seu criterio ambos irão funcionar.

Caso queira uma maneira mais rapida para executar o programa por completo acesse o repositorio https://github.com/iagoaquino/simple-to-do-list-assembler nele é obrigatorio o uso do docker mas com apenas 2 comandos você consegue ter o frontend e backend rodando.
