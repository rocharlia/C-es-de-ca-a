(nico) Anotar por aqui a lista de coisas que precisamos fazer (escopo do projeto) pra todo mundo poder ver, se possível, quebrem elas em coisas menores e coloquem explicação pq vai ajudar bastante na documentação depois

Front-end:
  dashboard com funções para adm
    editar/criar vagas (gerência de vagas)
    histórico/log de acesso/ações
    login que diferencia entre adm e usuário
  página com lista de aplicantes (pessoas que se aplicaram para uma vaga)
    desenhar o layout dessa página, como vai ser mostrada etc
    programar função de filtrar pessoas listadas conforme tags pré-definidas
      pré-definir essas tags que vão filtrar usuários
  página de testes
    definir o que vai ser testado nas provas oferecidas na plataforma
    definir como vai ser testado e mostrado na página
    definir a lógica que guia a criação dessa página
  página para envio de documentos
    definir a estética da página
    definir como os documentos vão ser pedidos e aparecerem na página
  página que lista as vagas
    programar um formato simples e replicável da página para funcionar com o banco de dados
    programar uma função de mostrar/esconder vagas dependendo de palavras-chave pré-definidas
  página de vaga
    programar o formato dessa página para funcionar com o banco de dados
    aplicar alguma forma de mostrar/linkar vagas similares à mostrada
  feedback de ações
    como o ponteiro se comporta quando em cima de um link importante
    como os botões reagem ao ponteiro
    como o usuário percebe o progresso de candidatar-se à vaga
    como o gerente percebe o progresso de criar uma vaga
    como o usuário percebe seu progresso em um teste
    como impedir um usuário testando de trapacear em testes
  ícones
    variação da logomarca para páginas de erro
  marca
    identidade visual da marca
    forma que essa identidade visual é comunicada na página
      valores: eco-amigável, projetos sociais, profissionalismo e tradição

Back-end:
  criar um DB para usuários
  criar um DB para gerentes
  definir alguma função ou coluna capaz de separar entre esses dois
  definir uma forma de listar palavras-chave que possam diferenciar as vagas
  definir uma forma de listar palavras-chave que possam diferenciar os usuários
  criar um DB para as vagas
