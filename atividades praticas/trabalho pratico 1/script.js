//BASE DE DADOS
const dados = {
   categorias: [
    {
        id: 1,
        nome: "Eventos e Cursos",
        descricao: "Conferências, bootcamps e cursos pensados para mulheres que querem crescer na tecnologia.",
        conteudo: "Participar de eventos e cursos é uma das maneiras mais rápidas de aprender, conhecer pessoas da área e descobrir oportunidades que não aparecem aozinhas. Muitos são gratuitos, online e feitos especialmente para mulheres.",
        imagemPrincipal: "https://img.odcdn.com.br/wp-content/uploads/2023/11/Destaque-Web-Summit-Lisboa-2023.jpg",
        publico: "Estudantes e profissionais mulheres em transição de carreira",
        comoAproveitar: "Escolha um evento por semestre e um curso curto por mês. Anote os contatos que fizer!"
    },
    {
        id: 2,
        nome: "Vagas de estágios",
        descricao: "Onde encontrar e como se preparar para as primeiras vagas de estágio em tecnologia.",
        conteudo: "O primeiro estágio abre portas para toda a carreira. Grandes empresas têm programas para estudantes de graduação, e plataformas de vagas permitem acompanhar as oportunidades assim que elas abrem.",
        imagemPrincipal: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=900",
        publico: "Estudantes de graduação em Computação e áreas afins",
        comoAproveitar: "Mantenha currículo, LinkedIn e GitHub atualizados antes das vagas abrirem."
    },
    {
        id: 3,
        nome: "Ferramentas",
        descricao: "Ferramentas profissionais que estudantes podem usar de graça.",
        conteudo: "Muitas ferramentas pagas usadas no mercado têm planos gratuitos para estudantes. Aprender a usá-las cedo deixa seu portfólio mais forte e te prepara para o dia a dia de uma empresa.",
        imagemPrincipal: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900",
        publico: "Qualquer estudante com e-mail da universidade",
        comoAproveitar: "Use seu e-mail institucional para pedir os benefícios de estudante."
    },
    {
        id: 4,
        nome: "Comunidades e newsletters",
        descricao: "Grupos de mulheres na tech e newsletters para se manter atualizada.",
        conteudo: "Fazer parte de uma comunidade ajuda a encontrar mentoras, tirar dúvidas e não se sentir sozinha na área. Já as newsletters trazem as novidades da tecnologia direto no seu e-mail.",
        imagemPrincipal: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=900",
        publico: "Mulheres em qualquer fase da carreira em tecnologia que desejam se manter atualizadas no mundo TECH",
        comoAproveitar: "Entre em pelo menos uma comunidade e reserve 5 minutos por dia para ler uma newsletter."
    }
],
    dicas: [
        // ===== Eventos e Cursos (areaId: 1) =====
        {
            dicaId: 1,
            areaId: 1,
            titulo: "Women in Tech Global Conference",
            descriçao: "Organizada pela WomenTech Network, é uma das maiores conferências internacionais de mulheres em tecnologia. O evento é híbrido, então dá para assistir online de qualquer lugar do mundo, com palestras sobre carreira, IA, desenvolvimento e liderança.",
            imagem:"https://women-in-tech.org/wp-content/uploads/2024/06/womenintech-global-summit-2024-980x551.jpg",
            ref: "https://women-in-tech.org/women-in-tech-global-summit-2024/"
            destaque: true;
        },
        {
            dicaId: 2,
            areaId: 1,
            titulo: "WoMakersCode: eventos e mentorias online",
            descriçao: "A WoMakersCode promove eventos, workshops e programas de capacitação em tecnologia voltados para mulheres. Muitos são online e gratuitos, ótimos para aprender e fazer networking desde o início da faculdade.",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmO8FzHOLz1FRvTy5ncNsatVVI06Z_Ru2CtBxEtmJbHYgW-X-pWmjx7Pk_&s=10", 
            ref: "https://www.womakerscode.org/",
            destaque: false
        },

        // ===== Vagas de estágios (areaId: 2) =====
        {
            dicaId: 3,
            areaId: 2,
            titulo: "Crie alertas de vaga no LinkedIn e na Gupy",
            descriçao: "Muitas empresas brasileiras publicam seus programas de estágio na Gupy e no LinkedIn. Cadastre seu perfil, ative alertas com palavras como 'estágio desenvolvimento' ou 'estágio TI' e candidate-se assim que a vaga abrir — as primeiras inscrições costumam ser vistas antes.",
            imagem: "https://img.odcdn.com.br/wp-content/uploads/2024/09/3.jpg",
            ref: null,
            destaque: false
            
        },
        {
            dicaId: 4,
            areaId: 2,
            titulo: "Google: Software Engineering Intern, BS, Summer 2027",
            descriçao: "O Google abriu a vaga de estágio em Engenharia de Software para estudantes de graduação (BS) no verão de 2027. Quem é aprovada trabalha em projetos reais com mentoria de engenheiros do Google. Procure a vaga em google.com/about/careers e prepare currículo em inglês e treino de estruturas de dados e algoritmos.",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg8Z9GAQE-WGTQLAiisWAg9ZXtlJrnsmi573HEen3iCgPtUrQsaKgxdXs&s=10",
            ref:"https://www.google.com/about/careers/applications/jobs/results/91436104816698054-software-engineering-intern-phd-summer-2027",
            destaque: true
        },

        // ===== Ferramentas (areaId: 3) =====
        {
            dicaId: 5,
            areaId: 3,
            titulo: "GitHub Student Developer Pack",
            descriçao: "Com seu e-mail da universidade você pode solicitar o GitHub Student Developer Pack, que libera o GitHub Copilot, domínios, créditos em nuvem e várias ferramentas pagas de graça enquanto você for estudante.",
            imagem: "https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F5bd1vk5smkab38um9fje.png",
            ref:"https://education.github.com/pack",
            destaque: true
            
        },
        {
            dicaId: 6,
            areaId: 3,
            titulo: "Figma gratuito para estudantes",
            descriçao: "O Figma oferece o plano Education gratuito para estudantes. É ideal para prototipar telas de sites e apps antes de partir para o código, e ainda ajuda a montar um portfólio de UI/UX.",
            imagem: "https://wpdean.com/wp-content/uploads/2024/12/what-is-figma-used-for.jpg",
            ref: "https://www.figma.com/pt-br/",
            destaque: false
        },

        // ===== Comunidades e newsletters (areaId: 4) =====
        {
            dicaId: 7,
            areaId: 4,
            titulo: "Women Techmakers: a comunidade global do Google",
            descriçao: "O Women Techmakers é um programa do Google que conecta mulheres em tecnologia no mundo todo. A comunidade tem embaixadoras em vários países, inclusive no Brasil, e promove eventos (como os do Dia Internacional da Mulher), workshops e oportunidades de networking e liderança.",
            imagem: "https://www.opportunitiesforafricans.com/wp-content/uploads/2023/05/google-women-techmakers.jpg",
            ref: "https://www.technovation.org/women-techmakers",
            destaque: true
        },
        {
            dicaId: 8,
            areaId: 4,
            titulo: "TLDR: a newsletter diária de tecnologia",
            descriçao: "A TLDR é uma das newsletters de tecnologia mais lidas do mundo. Todo dia ela manda um resumo curto, em inglês, das principais notícias de tech, programação e startups — leitura de 5 minutos. Tem também versões temáticas, como TLDR Web Dev e TLDR AI. Assine em tldr.tech.",
            imagem: "https://sponsy.nyc3.cdn.digitaloceanspaces.com/tina/media/case-studies/tldr-website.png",
            ref: "https://tldr.tech/",
            destaque: false
        }
    ]
};



