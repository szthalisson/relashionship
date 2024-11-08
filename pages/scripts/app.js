function calcularDiferencaDatas(data1, data2) {
  // Converte as datas de string para objeto Date, no formato 'DD/MM/YYYY'
  const [dia1, mes1, ano1] = data1.split('/').map(num => parseInt(num, 10));
  const [dia2, mes2, ano2] = data2.split('/').map(num => parseInt(num, 10));

  // Cria os objetos Date a partir das datas fornecidas
  const date1 = new Date(ano1, mes1 - 1, dia1); // Meses começam do 0 em JavaScript
  const date2 = new Date(ano2, mes2 - 1, dia2);

  // Calcula a diferença em milissegundos
  const diffTime = Math.abs(date2 - date1);

  // Converte a diferença para dias
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // Calculando a diferença em anos, meses e dias
  let anos = date2.getFullYear() - date1.getFullYear();
  let meses = date2.getMonth() - date1.getMonth();
  let dias = date2.getDate() - date1.getDate();

  if (meses < 0) {
    anos--;
    meses += 12;
  }

  if (dias < 0) {
    meses--;
    dias += new Date(ano2, mes2 - 1, 0).getDate(); // Pega o último dia do mês
  }

  return {
    diasTotais: diffDays, // Diferença em dias
    anos: anos,
    meses: meses,
    dias: dias
  };
}

function mensagemDoDia(dataAtual) {
  data = '10/11/2024';
  const MENSAGENS = [
    "Você é a razão do meu sorriso.",
    "Cada momento ao seu lado é um presente de felicidade.",
    "Te amo mais a cada dia.",
    "Estar com você faz o meu mundo ser mais colorido.",
    "Você ilumina minha vida de uma maneira única.",
    "Eu sou muito sortudo por ter você ao meu lado.",
    "Seu amor é tudo o que eu preciso.",
    "Cada dia contigo é uma nova aventura maravilhosa.",
    "Você é a pessoa que mais me faz feliz.",
    "A vida é mais leve quando você está por perto.",
    "Estar contigo é meu maior sonho realizado.",
    "Meu coração só é completo com você ao meu lado.",
    "Eu nunca imaginei ser tão feliz até te conhecer.",
    "Você é o meu maior amor, minha paz e meu aconchego.",
    "Amo o seu sorriso e o jeito que você faz tudo brilhar.",
    "O seu abraço é meu refúgio e minha segurança.",
    "A cada dia que passa, me apaixono mais por você.",
    "Você é o meu paraíso, meu porto seguro.",
    "Não consigo imaginar minha vida sem você.",
    "Eu te amo com toda a intensidade do meu ser.",
    "Te amo hoje e para sempre, minha linda.",
    "Você é o meu sonho realizado.",
    "Eu me sinto completo ao seu lado.",
    "Você é minha alegria, meu motivo de viver.",
    "A sua felicidade é tudo o que eu desejo.",
    "Você é meu melhor presente.",
    "Com você, a vida tem mais sentido.",
    "Estar com você é um dos maiores privilégios da minha vida.",
    "Você é meu melhor capítulo da vida.",
    "Só você tem a chave do meu coração.",
    "Eu sou grato por cada momento que passamos juntos.",
    "Seu amor me faz ser uma pessoa melhor.",
    "Eu te escolho, todos os dias, de todas as formas.",
    "Nada no mundo é mais valioso para mim do que você.",
    "Você é a minha musa inspiradora.",
    "Meu maior sonho é construir um futuro ao seu lado.",
    "Cada beijo seu é como uma dose de felicidade.",
    "Com você, eu aprendi o verdadeiro significado de amor.",
    "A sua presença é tudo o que eu preciso.",
    "Te amo mais do que as palavras podem expressar.",
    "A cada amanhecer, me apaixono mais por você.",
    "O nosso amor é meu maior tesouro.",
    "Nada no mundo vale mais do que o seu sorriso.",
    "Você é a razão da minha felicidade diária.",
    "Ao seu lado, todos os meus sonhos se tornam reais.",
    "Eu te amo em todos os idiomas e de todas as maneiras possíveis.",
    "Você é a melhor parte do meu dia.",
    "Amo cada detalhe seu, do seu jeito único de ser.",
    "Quando penso em felicidade, penso em você.",
    "Estar com você é o melhor lugar do mundo.",
    "Eu me sinto a pessoa mais sortuda do planeta por te ter.",
    "Se eu pudesse, passaria todas as minhas vidas com você.",
    "Você me faz sentir tão especial, todos os dias.",
    "O meu maior prazer é te fazer feliz.",
    "Te amo mais do que qualquer coisa neste mundo.",
    "Com você, tudo é melhor e mais fácil.",
    "Eu sou mais feliz ao seu lado do que eu jamais imaginei ser.",
    "A minha vida tem mais cor e brilho com você.",
    "Eu amo tudo em você, até suas imperfeições.",
    "Você é a pessoa mais incrível que já conheci.",
    "Fico pensando no quanto sou abençoado por te ter em minha vida.",
    "Meu coração bate por você, e somente por você.",
    "Amo a pessoa maravilhosa que você é.",
    "Você é meu sonho e a realidade mais bonita da minha vida.",
    "Não existe nada melhor do que te ter ao meu lado.",
    "Eu me apaixono por você cada vez mais.",
    "Cada instante com você é um momento inesquecível.",
    "O nosso amor é eterno, assim como você é para mim.",
    "Eu sou mais forte com você ao meu lado.",
    "Com você, a vida é mais doce e cheia de amor.",
    "O seu carinho me completa de uma maneira que ninguém mais consegue.",
    "Você me faz sentir especial todos os dias.",
    "A cada sorriso seu, o meu coração se enche de alegria.",
    "Eu te escolho para sempre.",
    "Você é a razão pela qual eu acordo sorrindo todas as manhãs.",
    "Eu te amo em uma intensidade que mal consigo descrever.",
    "A sua felicidade é a minha felicidade.",
    "Quando estou com você, sinto que posso conquistar o mundo.",
    "Você é meu anjo, meu amor, meu tudo.",
    "Eu nunca pensei que seria capaz de amar alguém tanto assim.",
    "Cada vez que vejo seu rosto, meu coração acelera.",
    "Você é a estrela que ilumina minha noite.",
    "Eu te amo mais do que ontem e menos do que amanhã.",
    "Estar com você é como estar no lugar mais seguro do mundo.",
    "Eu me sinto mais completo ao seu lado.",
    "Você é a melhor parte de mim.",
    "Te amo com uma intensidade que não sei expressar.",
    "Você é a pessoa mais maravilhosa que existe.",
    "Com você, eu não preciso de mais nada.",
    "Você é o melhor de todos os meus dias.",
    "Você me faz mais feliz do que eu imaginava ser possível.",
    "Eu te amo profundamente e incondicionalmente.",
    "Com você, eu aprendi que o amor é muito mais do que eu pensava.",
    "A cada dia que passa, eu me apaixono ainda mais por você.",
    "Eu te admiro, te amo e sou grato por ter você na minha vida.",
    "Eu não consigo parar de pensar em você.",
    "Você me faz sentir que nada no mundo é impossível.",
    "A cada segundo com você é um presente maravilhoso.",
    "Nada no mundo é mais importante para mim do que você.",
    "Eu sou feliz por te ter em minha vida.",
    "Você faz o meu mundo ser mais bonito.",
    "Te amo e estarei sempre aqui para você.",
    "Você é a minha inspiração e razão de viver.",
    "Eu sou grato por cada segundo que passamos juntos.",
    "Você é a razão de eu querer ser a melhor versão de mim mesmo.",
    "Com você, tudo é mais mágico e especial.",
    "Eu te amo mais do que posso expressar com palavras.",
    "Estar ao seu lado é onde me sinto mais feliz.",
    "Você me completa de uma forma única.",
    "Eu sou abençoado por te ter na minha vida.",
    "Eu sou eternamente grato por ter você comigo.",
    "Te amo mais do que qualquer coisa no mundo.",
    "Cada dia ao seu lado é um presente que agradeço sempre.",
    "Você é o amor da minha vida, meu tudo.",
    "Nada se compara ao amor que sinto por você.",
    "Você é o meu melhor capítulo da vida.",
    "Eu não consigo imaginar minha vida sem você.",
    "Você é a razão pela qual meus dias são mais felizes.",
    "Eu sou mais feliz por te ter ao meu lado."
  ];

  dia = calcularDiferencaDatas(data, dataAtual).diasTotais;
  return MENSAGENS[dia - 1];
}