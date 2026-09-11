/**
 * DADOS ASTROLÓGICOS - CÉU DO DIA (BUSCADORA ASTRAL)
 * Mapeamento das 48 combinações (12 Signos x 4 Fases Lunares)
 * Cada combinação contém:
 * 1. Energia do momento
 * 2. O que aproveitar (Aproveite para)
 * 3. Conselho prático
 */

const ZODIAC_SIGNS_DATA = [
  { id: 'aries', name: 'Áries', symbol: '♈', element: 'Fogo' },
  { id: 'touro', name: 'Touro', symbol: '♉', element: 'Terra' },
  { id: 'gemeos', name: 'Gêmeos', symbol: '♊', element: 'Ar' },
  { id: 'cancer', name: 'Câncer', symbol: '♋', element: 'Água' },
  { id: 'leao', name: 'Leão', symbol: '♌', element: 'Fogo' },
  { id: 'virgem', name: 'Virgem', symbol: '♍', element: 'Terra' },
  { id: 'libra', name: 'Libra', symbol: '♎', element: 'Ar' },
  { id: 'escorpiao', name: 'Escorpião', symbol: '♏', element: 'Água' },
  { id: 'sagitario', name: 'Sagitário', symbol: '♐', element: 'Fogo' },
  { id: 'capricornio', name: 'Capricórnio', symbol: '♑', element: 'Terra' },
  { id: 'aquario', name: 'Aquário', symbol: '♒', element: 'Ar' },
  { id: 'peixes', name: 'Peixes', symbol: '♓', element: 'Água' }
];

const LUNAR_PHASES_DATA = {
  new: { name: 'Lua Nova', icon: '🌑', class: 'moon-new' },
  waxing: { name: 'Lua Crescente', icon: '🌓', class: 'moon-waxing' },
  full: { name: 'Lua Cheia', icon: '🌕', class: 'moon-full' },
  waning: { name: 'Lua Minguante', icon: '🌘', class: 'moon-waning' }
};

// Matriz completa das 48 combinações: [fase]_[signoId]
const CEU_DO_DIA_DATA = {
  // ==================== LUA NOVA (Semear, Recomeçar, Intencionar) ====================
  'new_aries': {
    energy: 'Injeção de coragem, iniciativa e pioneirismo. Momento ideal para definir intenções de liderança, dar o primeiro passo em projetos pessoais e destravar decisões estagnadas.',
    actions: 'Começar algo novo que dependa exclusivamente de você, definir metas com determinação e assumir as rédeas da sua própria vida.',
    advice: 'Não espere que o momento perfeito chegue; dê o primeiro passo mesmo com medo, mas mantenha a paciência com o tempo das coisas.'
  },
  'new_touro': {
    energy: 'Plantio de segurança, paciência e prosperidade material. A energia favorece a construção de bases firmes, estabilidade financeira e valorização do seu bem-estar físico.',
    actions: 'Planejar investimentos, definir metas financeiras realistas, iniciar cuidados com o corpo e organizar sua vida material com constância.',
    advice: 'Construa com calma. As mudanças mais duradouras são aquelas cultivadas dia após dia, sem pressa e com consistência.'
  },
  'new_gemeos': {
    energy: 'Curiosidade mental aguçada e abertura para novas ideias. Favorece a busca por novos aprendizados, diálogo aberto e flexibilidade para enxergar caminhos alternativos.',
    actions: 'Iniciar um curso, ler sobre um assunto novo, trocar ideias enriquecedoras e anotar percepções e projetos que queira desenvolver.',
    advice: 'Escolha um ou dois temas para aprofundar em vez de dispersar sua energia em mil direções ao mesmo tempo.'
  },
  'new_cancer': {
    energy: 'Introspecção acolhedora, conexão com as raízes e renovação emocional. Favorece a criação de um espaço seguro dentro de si e o fortalecimento de laços familiares.',
    actions: 'Cuidar do seu lar, definir limites que protejam sua paz emocional e acolher seus sentimentos com generosidade e carinho.',
    advice: 'Escute a sua intuição antes de tomar qualquer atitude. A sua sensibilidade é sua melhor bússola hoje.'
  },
  'new_leao': {
    energy: 'Despertar da autoexpressão, criatividade e brilho pessoal. Momento propício para reconectar-se com seus talentos, resgatar a alegria de viver e valorizar sua autenticidade.',
    actions: 'Iniciar um projeto autoral ou criativo, comemorar suas conquistas e colocar sua verdade no centro das suas escolhas.',
    advice: 'Permita-se ocupar o seu espaço no mundo sem pedir desculpas por ser quem você é.'
  },
  'new_virgem': {
    energy: 'Momento de recomeçar com mais organização, consciência e praticidade. A Lua Nova favorece novas intenções, enquanto Virgem traz energia voltada para ajustes de rotina, saúde e aperfeiçoamento.',
    actions: 'Organizar sua rotina, colocar pendências em ordem, iniciar um hábito saudável, planejar melhor seu tempo e fazer ajustes de longo prazo.',
    advice: 'Escolha uma coisa que está funcionando mal na sua rotina e faça hoje um pequeno ajuste. Busque melhorar o que já existe em vez de mudanças radicais.'
  },
  'new_libra': {
    energy: 'Balanço harmônico, diplomacia e busca por equilíbrio nas relações. Favorece novas formas de se relacionar com empatia, elegância e justiça.',
    actions: 'Reavaliar acordos em parcerias, buscar a harmonia no ambiente ao seu redor e cultivar diálogos baseados na escuta respeitosa.',
    advice: 'Para agradar aos outros, não anule suas próprias necessidades. O equilíbrio começa quando você também se prioriza.'
  },
  'new_escorpiao': {
    energy: 'Renovação profunda, coragem emocional e transmutação. Excelente para fechar ciclos passados, curar feridas antigas e mergulhar em verdades essenciais.',
    actions: 'Desapegar de dinâmicas tóxicas, praticar o perdão libertador e direcionar sua energia para regenerar áreas da sua vida que precisam de renascimento.',
    advice: 'Não tema olhar para o que incomoda. É encarando o que precisa mudar que você recupera o seu verdadeiro poder.'
  },
  'new_sagitario': {
    energy: 'Expansão de horizontes, otimismo e busca por sentido existencial. Favorece novos estudos, planejamento de viagens e abertura de caminhos com fé e entusiasmo.',
    actions: 'Traçar metas de crescimento pessoal, explorar novas filosofias de vida e permitir-se sonhar com projetos maiores.',
    advice: 'Amplie a sua visão de futuro, mas certifique-se de dar passos práticos no presente para ancorar seus sonhos.'
  },
  'new_capricornio': {
    energy: 'Foco, ambição consciente e compromisso com metas duradouras. Momento ideal para estruturar a vida profissional, traçar estratégias e assumir responsabilidades.',
    actions: 'Elaborar um plano de ação para os próximos meses, revisar prioridades de carreira e fortalecer sua disciplina pessoal.',
    advice: 'A solidez de uma grande conquista está na consistência dos hábitos diários. Foque no processo, não apenas no resultado final.'
  },
  'new_aquario': {
    energy: 'Inovação, quebra de padrões rígidos e visão de futuro. Favorece a originalidade, conexões em grupo e novas formas de agir perante velhos problemas.',
    actions: 'Testar soluções criativas, engajar-se em causas coletivas e libertar-se de expectativas alheias que limitam sua liberdade.',
    advice: 'Questione as regras automáticas do seu dia a dia e encontre uma forma autêntica e inovadora de conduzir sua vida.'
  },
  'new_peixes': {
    energy: 'Sensibilidade sutil, espiritualidade e intuição aguçada. Favorece práticas meditativas, recolhimento inspirador e conexão com a imaginação criativa.',
    actions: 'Silenciar a mente, praticar a escuta interior, anotar sonhos e cultivar a compaixão por si e pelo próximo.',
    advice: 'Reserve momentos de calma para desacelerar o ritmo. As respostas mais claras nascem do silêncio da mente.'
  },

  // ==================== LUA CRESCENTE (Agir, Impulsionar, Superar) ====================
  'waxing_aries': {
    energy: 'Força motriz intensa e dinamismo para vencer barreiras. Momento de transformar planos em ação direta e agir com determinação diante de qualquer obstáculo.',
    actions: 'Tomar iniciativas que exigem posicionamento, acelerar tarefas paradas e encarar desafios de frente com autoconfiança.',
    advice: 'Cuidado com a reatividade impulsiva. Canalize sua energia na direção do objetivo sem entrar em atritos desnecessários.'
  },
  'waxing_touro': {
    energy: 'Constância prática, persistência e foco nos resultados palpáveis. Momento propício para consolidar projetos iniciados e dar passos firmes sem desistir.',
    actions: 'Manter a disciplina no trabalho e nas finanças, cuidar da nutrição do corpo e garantir que cada detalhe seja bem executado.',
    advice: 'Valorize o progresso gradual. A perseverança silenciosa supera qualquer pressa vazia.'
  },
  'waxing_gemeos': {
    energy: 'Agilidade mental, networking e dinamismo nas trocas de informação. Favorece contatos comerciais, estudos rápidos e comunicação estratégica.',
    actions: 'Divulgar ideias, agendar conversas importantes, negociar e articular novas conexões com pessoas afins.',
    advice: 'Evite acumular abas mentais abertas. Conclua uma tarefa antes de pular para o próximo estímulo.'
  },
  'waxing_cancer': {
    energy: 'Nutrição emocional dos seus projetos e fortalecimento das relações próximas. A energia apoia a dedicação a quem você ama e o zelo pelas suas criações.',
    actions: 'Proteger o que você está construindo, fortalecer parcerias baseadas na confiança mútua e agir com acolhimento.',
    advice: 'Não deixe o excesso de sensibilidade frear o seu avanço. Use suas emoções como combustível para proteger seus sonhos.'
  },
  'waxing_leao': {
    energy: 'Confiança magnética, criatividade em expansão e liderança natural. Momento excelente para apresentar propostas e assumir protagonismo.',
    actions: 'Mostrar o seu trabalho com orgulho, liderar com generosidade e defender seus ideais com carisma e entusiasmo.',
    advice: 'A verdadeira liderança inspira os outros em vez de apenas buscar aplausos. Compartilhe o mérito e brilhe junto.'
  },
  'waxing_virgem': {
    energy: 'Eficiência analítica, ajuste de métodos e produtividade com critério. Favorece a execução detalhada e a resolução prática de pendências.',
    actions: 'Refinar processos de trabalho, organizar arquivos e rotinas, e implementar melhorias técnicas no que está em andamento.',
    advice: 'Cuidado com o perfeccionismo paralisante. Feito com cuidado e dedicação é melhor que não concluído por excesso de exigência.'
  },
  'waxing_libra': {
    energy: 'Colaboração eficaz, alinhamento de acordos e mediação diplomática. Momento de buscar cooperação mútua para expandir metas em comum.',
    actions: 'Buscar consensos, fechar parcerias justas e harmonizar divergências de forma madura e construtiva.',
    advice: 'Decida com firmeza. Não perca oportunidades por receio de descontentar terceiros; seja justo com você mesmo.'
  },
  'waxing_escorpiao': {
    energy: 'Foco cirúrgico, determinação inabalável e visão estratégica. A energia apoia a superação de crises e a resolução profunda de desafios complexos.',
    actions: 'Investigar a fundo o que precisa de solução, eliminar desperdícios de energia e agir com perspicácia silenciosa.',
    advice: 'Foque no que você pode transformar diretamente. Direcione a intensidade emocional para construir algo poderoso.'
  },
  'waxing_sagitario': {
    energy: 'Impulso expansivo, entusiasmo e autoconfiança no crescimento. Excelente para dar passos audaciosos e buscar novos patamares de desenvolvimento.',
    actions: 'Apostar em projetos com potencial de expansão, buscar mentorias ou novos conhecimentos e manter o astral elevado.',
    advice: 'Mantenha o foco nos detalhes práticos para que seu otimismo tenha uma base sólida onde aterrissar.'
  },
  'waxing_capricornio': {
    energy: 'Produtividade estruturada, resiliência e foco no longo prazo. Favorece a superação de limites com método, rigor e perseverança.',
    actions: 'Cumprir cronogramas com disciplina, lidar com questões burocráticas e dar passos sólidos na direção dos seus objetivos.',
    advice: 'Lembre-se de fazer pausas estratégicas. A alta performance sustentável exige momentos conscientes de recuperação.'
  },
  'waxing_aquario': {
    energy: 'Dinamismo colaborativo, visão moderna e inovação prática. Favorece o uso de tecnologias, trabalho em equipe e métodos não convencionais.',
    actions: 'Testar novas ferramentas, propor ideias originais em grupo e agir com pioneirismo e espírito comunitário.',
    advice: 'Esteja aberto ao diálogo para que suas ideias inovadoras possam ser compreendidas e aplicadas no mundo real.'
  },
  'waxing_peixes': {
    energy: 'Fluidez intuitiva, imaginação fértil e inspiração artística. Momento de integrar sensibilidade e criatividade na condução de seus projetos.',
    actions: 'Confiar na intuição para tomar decisões, dedicar-se a expressões artísticas e tratar os outros com empatia sincera.',
    advice: 'Ancore suas ideias na realidade prática para que a inspiração se transforme em realizações concretas.'
  },

  // ==================== LUA CHEIA (Celebrar, Iluminar, Colher) ====================
  'full_aries': {
    energy: 'Clareza arrebatadora sobre sua individualidade, desejos e limites. Momento de ápice de energia, magnetismo e visibilidade pessoal.',
    actions: 'Celebrar conquistas individuais, posicionar-se com clareza e expressar sua verdade sem meias-palavras.',
    advice: 'Equilibre sua força com a empatia. A firmeza não precisa ser agressiva para ser ouvida e respeitada.'
  },
  'full_touro': {
    energy: 'Plenitude material, valorização dos sentidos e colheita de esforços. Evidencia a segurança emocional que nasce do conforto e da estabilidade.',
    actions: 'Desfrutar dos frutos do seu trabalho, presentear-se com momentos de prazer sensorial e valorizar o que você já construiu.',
    advice: 'Agradeça pela fartura presente na sua vida. A gratidão consciente atrai ainda mais prosperidade.'
  },
  'full_gemeos': {
    energy: 'Pico de comunicação, clareza mental e revelação de informações importantes. As ideias fluem com facilidade e os diálogos ganham destaque.',
    actions: 'Fazer lançamentos, divulgar trabalhos, conduzir conversas esclarecedoras e trocar percepções valiosas.',
    advice: 'Filtre o excesso de estímulos para não sobrecarregar sua mente. Foque nas conversas que realmente edificam.'
  },
  'full_cancer': {
    energy: 'Intensidade emocional, ápice da intuição e conexão profunda com o coração. Traz à tona sentimentos guardados para serem acolhidos e honrados.',
    actions: 'Reunir pessoas queridas, cuidar do ambiente familiar, honrar sua história e expressar o que sente com sinceridade.',
    advice: 'Acolha suas emoções sem julgamento. Sentir com profundidade é uma força de cura, não uma fraqueza.'
  },
  'full_leao': {
    energy: 'Brilho máximo, magnetismo radiante e reconhecimento dos seus talentos. O momento favorece apresentações, celebrações e autoafirmação luminosa.',
    actions: 'Colocar-se em evidência, celebrar suas vitórias com quem você ama e inspirar as pessoas ao seu redor com sua energia positiva.',
    advice: 'Ilumine o caminho dos outros com a sua luz. A generosidade genuína amplia ainda mais o seu magnetismo pessoal.'
  },
  'full_virgem': {
    energy: 'Clareza cirúrgica sobre resultados, funcionalidade de processos e saúde. Momento em que os frutos do esforço metódico tornam-se visíveis.',
    actions: 'Avaliar os resultados concretos dos seus projetos, celebrar melhorias na rotina e reconhecer o valor do trabalho bem-feito.',
    advice: 'Reconheça o quanto você já avançou antes de procurar defeitos a corrigir. Celebre o progresso alcançado.'
  },
  'full_libra': {
    energy: 'Iluminação das relações interpessoais, harmonia estética e clareza nos vínculos. Revela o verdadeiro estado dos seus relacionamentos e parcerias.',
    actions: 'Celebrar o amor e a amizade, harmonizar conflitos pendentes e cultivar momentos de beleza e afeto.',
    advice: 'Lembre-se de que a harmonia real nasce da verdade mútua, não da omissão de sentimentos para evitar desconforto.'
  },
  'full_escorpiao': {
    energy: 'Magnetismo profundo, intuição visceral e revelação de segredos e emoções ocultas. Uma energia potente de cura, libertação e transformação espiritual.',
    actions: 'Encarar revelações com maturidade, perdoar o passado e canalizar sua força emocional em regeneração total.',
    advice: 'Solte a necessidade de controlar o que está fora de você. Confie na sabedoria das transformações naturais da vida.'
  },
  'full_sagitario': {
    energy: 'Entusiasmo contagiante, clareza sobre seus ideais e celebração de conquistas intelectuais. Momento de colheita em estudos e expansão pessoal.',
    actions: 'Compartilhar conhecimentos, comemorar vitórias com alegria e planejar novos passos guiados pela sabedoria adquirida.',
    advice: 'Viva com entusiasmo, mantendo os pés no chão para desfrutar da beleza do presente sem ansiedade pelo amanhã.'
  },
  'full_capricornio': {
    energy: 'Reconhecimento profissional, consolidação de metas e ápice da maturidade. Evidencia o resultado tangível da sua dedicação e paciência.',
    actions: 'Comemorar conquistas profissionais, colher o retorno de projetos a longo prazo e reafirmar sua autoridade pessoal.',
    advice: 'Permita-se saborear o topo da montanha antes de planejar a próxima escalada. Você merece desfrutar do que construiu.'
  },
  'full_aquario': {
    energy: 'Iluminação de ideias originais, conexão com a comunidade e celebração da liberdade individual. Destaque para projetos coletivos e visões inovadoras.',
    actions: 'Conectar-se com grupos afins, apresentar ideias fora da caixa e valorizar a sua contribuição única para o coletivo.',
    advice: 'Acolha sua singularidade. O mundo precisa da sua perspectiva única para evoluir e criar novas possibilidades.'
  },
  'full_peixes': {
    energy: 'Êxtase espiritual, intuição cristalina, compaixão cósmica e profunda conexão com a alma. Momento místico de revelações interiores e cura sutil.',
    actions: 'Meditar, praticar rituais de agradecimento, conectar-se com a arte e escutar as mensagens dos seus sonhos.',
    advice: 'Entregue as preocupações ao fluxo do universo e confie que você está exatamente onde precisa estar para o seu bem maior.'
  },

  // ==================== LUA MINGUANTE (Desapegar, Limpar, Concluir) ====================
  'waning_aries': {
    energy: 'Momento de desacelerar a impulsividade, filtrar excessos de estresse e recolher a energia de ação para evitar o desgaste físico e mental.',
    actions: 'Finalizar pendências urgentes, praticar atividades físicas leves para descarregar tensões e evitar discussões desnecessárias.',
    advice: 'Escolha quais batalhas realmente valem a sua energia. Saber quando recuar é uma grande demonstração de sabedoria.'
  },
  'waning_touro': {
    energy: 'Desapego de apegos materiais, alívio de teimosias e simplificação da rotina. Favorece a economia de recursos e o descanso do corpo.',
    actions: 'Doar o que não usa mais, cortar gastos supérfluos, fazer uma alimentação leve e relaxar a mente.',
    advice: 'Solte o que você vem segurando por mero hábito ou medo da mudança. Abrir espaço traz leveza e paz.'
  },
  'waning_gemeos': {
    energy: 'Desaceleração do fluxo mental, silenciamento de ruídos e filtragem do excesso de informações. Momento propício para clarear os pensamentos.',
    actions: 'Fazer um detox digital, arquivar mensagens pendentes, organizar anotações e passar momentos de silêncio.',
    advice: 'Filtre o barulho externo. Nem toda opinião precisa da sua atenção ou da sua resposta hoje.'
  },
  'waning_cancer': {
    energy: 'Limpeza de mágoas passadas, acolhimento interior e proteção do campo energético pessoal. Momento de recolhimento no ninho emocional.',
    actions: 'Fazer um banho relaxante, purificar as energias da casa, perdoar ressentimentos e descansar em recolhimento.',
    advice: 'Não carregue o peso emocional que não é seu. Cuide da sua energia com respeito e carinho.'
  },
  'waning_leao': {
    energy: 'Desapego da necessidade de validação externa, fortalecimento do amor-próprio silencioso e descanso da vaidade.',
    actions: 'Reconhecer seu próprio valor sem precisar provar nada a ninguém, descansar a mente criativa e desfrutar da própria companhia.',
    advice: 'Sua luz não diminui quando você opta pelo recolhimento; ela apenas se renova para o próximo ciclo.'
  },
  'waning_virgem': {
    energy: 'Organização prática, eliminação de excessos e triagem criteriosa de pendências. Favorece o autocuidado com a saúde física e mental.',
    actions: 'Limpar gavetas e ambientes, revisar exames e rotinas de bem-estar, e simplificar listas de tarefas sobrecarregadas.',
    advice: 'Livre-se da autocrítica excessiva. Entenda que a perfeição não existe e que o descanso também é uma obrigação produtiva.'
  },
  'waning_libra': {
    energy: 'Avaliação serena de relações, encerramento de acordos desgastados e busca por paz de espírito. Momento de reequilíbrio interior.',
    actions: 'Colocar pontos finais em situações insustentáveis de forma gentil, evitar indecisões prolongadas e harmonizar seu espaço.',
    advice: 'Dizer não quando necessário é um ato de profundo respeito por você mesmo e pela sua paz interior.'
  },
  'waning_escorpiao': {
    energy: 'Purificação profunda, libertação de apegos emocionais e transmutação de sombras em sabedoria. Favorece o descarte do que já perdeu o sentido.',
    actions: 'Fazer rituais de limpeza energética, cortar laços que drenam sua vitalidade e silenciar para regenerar suas forças.',
    advice: 'Deixe ir o que já cumpriu seu papel. O vazio que fica é o solo fértil onde nascerão suas próximas vitórias.'
  },
  'waning_sagitario': {
    energy: 'Reflexão sobre aprendizados, discernimento entre ilusões e verdades, e simplificação de planos grandiosos demais.',
    actions: 'Concluir leituras e estudos pendentes, avaliar com maturidade as lições dos últimos tempos e descansar a mente.',
    advice: 'Valorize o caminho percorrido até aqui. Mais importante que correr para o próximo destino é integrar o que você já aprendeu.'
  },
  'waning_capricornio': {
    energy: 'Finalização de tarefas burocráticas, desapego de cobranças excessivas e alívio do peso das responsabilidades.',
    actions: 'Concluir relatórios e projetos pendentes, delegar o que for possível e desacelerar o ritmo de trabalho no final do dia.',
    advice: 'Não confunda seu valor pessoal com o volume de tarefas que você entrega. Descanse com a consciência tranquila.'
  },
  'waning_aquario': {
    energy: 'Desapego de teorias improdutivas, filtragem de círculos sociais e renovação de perspectivas para os próximos tempos.',
    actions: 'Limpar redes sociais e contatos obsoletos, fazer pausas reflexivas e priorizar conexões com quem compartilha dos mesmos valores.',
    advice: 'Abra mão de tentar convencer quem não quer ouvir. Preserve sua clareza mental para projetos construtivos.'
  },
  'waning_peixes': {
    energy: 'Encerramento de ciclo cósmico, relaxamento profundo, sono reparador e conexão compassiva com o sagrado. Momento de pura rendição e descanso.',
    actions: 'Dormir mais cedo, tomar um banho de ervas ou sais, ouvir músicas suaves e deixar o coração em paz.',
    advice: 'Confie que o universo já está preparando os novos caminhos. Entregue, confie, agradeça e descanse.'
  }
};

/**
 * Função utilitária para obter a combinação do Céu do Dia
 * @param {string} phaseKey - 'new' | 'waxing' | 'full' | 'waning'
 * @param {number} signIndex - 0 a 11
 * @returns {object} Dados formatados da Lua e descrição em 3 partes
 */
function getCelestialDayData(phaseKey, signIndex) {
  const phase = LUNAR_PHASES_DATA[phaseKey] || LUNAR_PHASES_DATA['new'];
  const sign = ZODIAC_SIGNS_DATA[signIndex] || ZODIAC_SIGNS_DATA[0];
  const comboKey = `${phaseKey}_${sign.id}`;
  
  const textData = CEU_DO_DIA_DATA[comboKey] || {
    energy: `Momento de sintonia entre a energia de ${phase.name} e as qualidades de ${sign.name}.`,
    actions: `Aproveite para focar nas suas prioridades e agir com equilíbrio e consciência.`,
    advice: `Dê um passo de cada vez com serenidade e confie no seu processo pessoal.`
  };

  return {
    phaseName: phase.name,
    phaseIcon: phase.icon,
    phaseClass: phase.class,
    signName: sign.name,
    signSymbol: sign.symbol,
    signElement: sign.element,
    title: `${phase.icon} ${phase.name} em ${sign.name}`,
    energy: textData.energy,
    actions: textData.actions,
    advice: textData.advice
  };
}
