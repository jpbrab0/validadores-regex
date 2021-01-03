# Validadores Regex

Esses validadores foram criados para estudo de regex. Com eles você poderá validar cep's e cpf's

## Instalação

### Pré-Requisitos:
* NodeJs

Para instalar o projeto no seu pc rode:
```bash
git clone https://github.com/jpbrab0/validadores-regex
```

## Rodando o projeto localmente

Para rodar o projeto localmente use esse comando com as seguintes flags:

```bash
node index.js --validade <cpf ou cep> --code <número do cep ou do cpf>
```

Exemplo:

```bash
node index.js --validade cep --code 123456-789
```

Vai retornar:

```bash
O cep é valido!
``` 

__Feito para estudo por [João Pedro Resende](https://jpres.dev)__