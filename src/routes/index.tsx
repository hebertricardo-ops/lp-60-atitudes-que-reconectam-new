import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  X,
  HelpCircle,
  ShieldCheck,
  Smartphone,
  BookOpen,
  Gift,
  Heart,
  Quote,
  Clock,
  MessageCircle,
  Lock,
} from "lucide-react";
import { Placeholder } from "@/components/landing/Placeholder";
import { CTAButton } from "@/components/landing/CTAButton";
import { Faq } from "@/components/landing/Faq";
import mockupHero from "@/assets/mockup-hero.jpeg";
import materialBundle from "@/assets/material-bundle.jpeg";
import depoimento1 from "@/assets/depoimento-1.png";
import depoimento2 from "@/assets/depoimento-2.png";
import depoimento3 from "@/assets/depoimento-3.png";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "60 Atitudes Simples — Reconecte seu casamento em 30 min/dia" },
      {
        name: "description",
        content:
          "Método silencioso para resgatar carinho, atenção e desejo no casamento aplicando uma atitude rápida por dia. Acesso imediato pelo celular.",
      },
      { property: "og:title", content: "60 Atitudes Simples — Reconecte seu casamento" },
      {
        property: "og:description",
        content:
          "MiniApp com 60 missões diárias para sair do modo 'colega de quarto' sem D.R., sem brigas e sem parecer carente.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

const heroBenefits = [
  {
    title: "Sem conversas difíceis (D.R.)",
    desc: "Técnicas para gerar aproximação sem que ele perceba que você está usando um método.",
  },
  {
    title: "Ação imediata",
    desc: "Não é um livro chato. São missões diárias de 5 a 30 minutos.",
  },
  {
    title: "Na palma da mão",
    desc: "Acesso imediato pelo celular, num formato de MiniApp discreto para você ler onde quiser.",
  },
  {
    title: "Scripts prontos",
    desc: "Frases exatas para copiar e colar no WhatsApp dele hoje mesmo.",
  },
];

const testimonials = [
  {
    name: "Jamila Martins, 39 anos",
    role: "Professora",
    text: "Mandei a mensagem número 12 do bônus no meio do expediente dele. Ele me respondeu na hora perguntando se eu queria jantar fora. Fazia meses que a gente não saía da rotina!",
    avatar: depoimento1 as string | null,
  },
  {
    name: "Carolina Araujo, 36 anos",
    role: "Dona de Casa",
    text: "Sempre dava briga quando eu reclamava do celular na mesa. Usei a técnica da substituição do Módulo 2 e, pela primeira vez, ele me ouviu, pediu desculpas e guardou o aparelho.",
    avatar: depoimento2 as string | null,
  },
  {
    name: "Mariana Salles, 41 anos",
    role: "Empresária",
    text: "Não acredito que custou tão barato. O Checklist de preparação me salvou de uma discussão terrível neste fim de semana. Estamos mais leves.",
    avatar: depoimento3 as string | null,
  },
];

const painThoughts = [
  "Por que ele não me procura mais como antes?",
  "Será que ele não sente mais atração por mim, ou o problema sou eu?",
  "Eu queria pedir um abraço, mas se eu falar, vou parecer carente.",
  "Se eu perguntar o que está acontecendo, ele vai dizer que estou exagerando e vamos acabar brigando.",
];

const villains = [
  {
    title: "A Sobrecarga da Rotina",
    desc: "O acúmulo de responsabilidades drena a energia que deveria ir para o relacionamento.",
  },
  {
    title: "O Excesso de Telas",
    desc: "O celular virou o refúgio do cansaço, criando um muro invisível entre vocês dois na cama.",
  },
  {
    title: "O Medo do Conflito",
    desc: "Vocês param de falar o que sentem para evitar brigas, e o silêncio vira um abismo.",
  },
  {
    title: "A Falta de Ferramentas",
    desc: 'Ninguém nos ensina como iniciar uma conversa delicada sem que o homem se sinta "atacado".',
  },
  {
    title: "A Falta de Novidade",
    desc: "O cérebro humano se acostuma com o que é previsível. Sem estímulos simples, a atração adormece.",
  },
];

const steps = [
  {
    title: "Acesse o seu MiniApp Secreto",
    desc: "Após a compra, você acessa seu guia interativo direto do navegador do celular. Discreto e elegante. Ninguém precisa saber que você está usando.",
  },
  {
    title: "Escolha a Missão do Dia",
    desc: "Abra o Módulo 3 e escolha UMA atitude simples (ex: enviar um script de WhatsApp ou fazer uma pergunta de quebra-gelo).",
  },
  {
    title: "Aplique em menos de 30 minutos",
    desc: "Copie, cole ou execute a pequena atitude. Depois, apenas observe como a guarda dele baixa e a dinâmica entre vocês muda naturalmente.",
  },
];

const modules = [
  {
    icon: Smartphone,
    title: "Módulo 1 — O Diagnóstico Silencioso",
    desc: "Identifique em qual estágio de distância vocês estão através do nosso checklist interativo de 7 Sinais de Desconexão.",
  },
  {
    icon: MessageCircle,
    title: 'Módulo 2 — O Método "Falar sem Brigar"',
    desc: 'O segredo de trocar frases que geram defesa ("Você nunca me dá atenção") por frases que abrem o coração dele ("Eu sinto falta de...").',
  },
  {
    icon: Heart,
    title: "Módulo 3 — O Plano de 60 Atitudes",
    desc: 'O coração do método: 60 missões rápidas (Emocional, Carinho, Desejo e Rotina). Basta arrastar os "Cards" e marcar a atitude do dia como concluída.',
  },
  {
    icon: BookOpen,
    title: "Módulos 4 e 5 — A Ponte e a Manutenção",
    desc: "Gerador de perguntas diárias que rendem conversas profundas e atitudes de segurança para que o relacionamento nunca mais volte a esfriar.",
  },
];

const bonuses = [
  {
    title: 'Bônus 1 — Guia da "Paz Armada"',
    desc: "Como iniciar conversas delicadas sem parecer cobrança.",
    price: "R$ 47,00",
  },
  {
    title: "Bônus 2 — Checklist da Conversa Importante",
    desc: "O que falar, como preparar o clima e as palavras proibidas que você jamais deve usar.",
    price: "R$ 37,00",
  },
  {
    title: 'Bônus 3 — Pack 50 Mensagens "Conexão no Bolso"',
    desc: 'Scripts prontos por categorias (Carinho, Saudade, Desejo) com botão "Copiar e Colar" direto para o WhatsApp dele.',
    price: "R$ 67,00",
  },
];

const forYou = [
  'Você sente que o seu parceiro virou apenas um "colega de quarto".',
  "Você tem medo de falar o que sente e acabar começando uma briga.",
  "Você está cansada da rotina, mas ainda ama o seu marido e quer resgatar o brilho no olhar de vocês.",
  "Você tem pouco tempo e precisa de atitudes práticas que funcionem rápido.",
];

const notForYou = [
  "Você está em um relacionamento com histórico de abusos físicos ou psicológicos severos (nestes casos, procure ajuda profissional imediata).",
  "Você já desistiu completamente da relação e não quer aplicar nem 5 minutos do seu dia para tentar salvá-la.",
  "Você espera que o parceiro mude sozinho em um passe de mágica, sem que você faça o primeiro movimento.",
];

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-5 py-20 sm:px-8 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Landing() {
  return (
    <main className="overflow-hidden">
      {/* ============== 1. HERO ============== */}
      <Section className="pt-14 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-up">
            <span className="inline-block rounded-full bg-sage px-4 py-2 text-xs font-medium tracking-wide text-sage-foreground sm:text-sm">
              O guia prático para sair da zona de "colega de quarto"
            </span>

            <h1 className="mt-6 font-serif text-4xl leading-[1.1] text-charcoal sm:text-5xl lg:text-6xl">
              60 Atitudes Simples:{" "}
              <span className="italic text-rose-deep">Reconecte seu casamento</span> com 30 minutos por dia
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Um método silencioso e validado para quebrar o gelo da rotina, resgatar o carinho e voltar a ter o
              parceiro que você conheceu no início do relacionamento — aplicando apenas{" "}
              <strong className="text-charcoal">uma atitude rápida por dia</strong>.
            </p>

            <ul className="mt-8 space-y-4">
              {heroBenefits.map((b) => (
                <li key={b.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-4 w-4 text-primary-foreground" strokeWidth={3} />
                  </span>
                  <span className="text-base leading-snug">
                    <strong className="text-charcoal">{b.title}:</strong>{" "}
                    <span className="text-muted-foreground">{b.desc}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <CTAButton size="xl" pulse>
                Quero reconectar meu casamento agora
              </CTAButton>
              <p className="mt-3 text-sm text-muted-foreground">
                Acesso imediato · Garantia de 7 dias
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-rose/40 blur-3xl" />
            <img
              src={mockupHero}
              alt="Mulher segurando o celular com o MiniApp 60 Atitudes Simples aberto, mostrando módulos e progresso da jornada"
              loading="eager"
              className="w-full rounded-[2.5rem] shadow-soft object-cover aspect-[9/16]"
            />
          </div>
        </div>
      </Section>

      {/* ============== 2. PROVA SOCIAL ============== */}
      <Section className="bg-sage-soft">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-charcoal sm:text-4xl">
            Elas deram o primeiro passo e <em className="text-rose-deep">o silêncio acabou.</em>
          </h2>
          <p className="mt-4 text-muted-foreground">Resultados reais de Beta Testers do método.</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex flex-col rounded-3xl bg-card p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1"
            >
              <Quote className="h-8 w-8 text-rose-deep opacity-60" />
              <p className="mt-4 flex-1 italic leading-relaxed text-charcoal">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="h-12 w-12 shrink-0">
                  {t.avatar ? (
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  ) : (
                    <Placeholder ratio="1/1" label="" rounded="rounded-full" />
                  )}
                </div>
                <div>
                  <p className="font-semibold text-charcoal">{t.name}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ============== 3. DOR ============== */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl text-charcoal sm:text-4xl">
            Responda com sinceridade: alguma dessas vozes já ecoou na sua cabeça antes de dormir?
          </h2>

          <ul className="mt-10 space-y-4">
            {painThoughts.map((thought) => (
              <li
                key={thought}
                className="flex gap-4 rounded-2xl border border-border bg-card/60 p-5 shadow-soft"
              >
                <HelpCircle className="mt-0.5 h-6 w-6 shrink-0 text-rose-deep" strokeWidth={1.8} />
                <p className="italic leading-relaxed text-charcoal">"{thought}"</p>
              </li>
            ))}
          </ul>

          <div className="mt-12 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Você deita na mesma cama, divide as mesmas contas, os mesmos problemas da casa e dos filhos…
              mas, no fundo, <strong className="text-charcoal">você se sente invisível</strong>.
            </p>
            <p>
              Parece que vocês deixaram de ser marido e mulher e viraram apenas dois{" "}
              <strong className="text-charcoal">"colegas de quarto"</strong> dividindo a mesma rotina exaustiva.
              Ele chega cansado, vai direto para o celular ou para a TV. As conversas que antes duravam horas,
              hoje se resumem a: <em>"pagou a conta?"</em> ou <em>"o que tem pro jantar?"</em>.
            </p>
            <p>
              Dói amar alguém e sentir que você não é mais a prioridade.{" "}
              <strong className="text-charcoal">
                Dói sentir saudade de um homem que está sentado bem ali, do seu lado no sofá.
              </strong>
            </p>
          </div>
        </div>
      </Section>

      {/* ============== 4. TRANSIÇÃO ============== */}
      <Section className="bg-sand">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl text-charcoal sm:text-4xl">
            Respire fundo. <em className="text-rose-deep">A culpa da distância não é sua.</em>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Quando o relacionamento esfria, a primeira coisa que a mulher faz é olhar para o espelho e procurar
            um defeito. Mas a verdade é que o seu casamento não esfriou por falta de amor, ou porque você não é
            mais atraente.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Ele esfriou porque vocês entraram no <strong className="text-charcoal">"Modo Automático"</strong>.
            Existem 5 grandes vilões externos que roubam a conexão de qualquer casal:
          </p>

          <ol className="mt-10 space-y-5">
            {villains.map((v, i) => (
              <li
                key={v.title}
                className="flex gap-5 rounded-2xl bg-card p-6 shadow-soft"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose font-serif text-xl font-semibold text-rose-deep">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-charcoal">{v.title}</h3>
                  <p className="mt-1 text-muted-foreground">{v.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-10 text-center font-serif text-2xl italic text-charcoal">
            Você só precisa da ferramenta certa para "acordar" o seu parceiro.
          </p>
        </div>
      </Section>

      {/* ============== 5. PASSO A PASSO ============== */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-charcoal sm:text-4xl">
            Como reconectar a relação em apenas <em className="text-rose-deep">3 passos práticos</em>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sem aulas chatas de 2 horas. Tudo acontece direto no seu celular.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="rounded-3xl bg-card p-8 shadow-soft transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary font-serif text-2xl font-semibold text-primary-foreground">
                {i + 1}
              </div>
              <h3 className="mt-5 font-serif text-xl text-charcoal">
                Passo {i + 1}: {s.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ============== 6. ENTREGÁVEIS + BÔNUS ============== */}
      <Section className="bg-sage-soft">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-charcoal sm:text-4xl">
            O Mapa Completo para resgatar o seu casamento
          </h2>
          <p className="mt-4 text-muted-foreground">
            Acesso imediato ao App Interativo com todo este arsenal:
          </p>
        </div>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-2">
          <div className="grid gap-5">
            {modules.map((m) => (
              <div key={m.title} className="flex gap-5 rounded-2xl bg-card p-6 shadow-soft">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary">
                  <m.icon className="h-6 w-6 text-primary-foreground" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-charcoal">{m.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <img
              src={materialBundle}
              alt="Pacote completo: livro 60 Atitudes Simples e bônus"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-soft"
            />
          </div>
        </div>

        {/* Bonus highlighted box */}
        <div className="mt-16 rounded-3xl border-2 border-rose-deep/30 bg-card p-8 shadow-cta sm:p-10">
          <div className="flex items-center gap-3">
            <Gift className="h-7 w-7 text-rose-deep" />
            <h3 className="font-serif text-2xl text-charcoal sm:text-3xl">
              Bônus especiais inclusos no Pacote Completo
            </h3>
          </div>

          <div className="mt-8 space-y-5">
            {bonuses.map((b) => (
              <div
                key={b.title}
                className="flex flex-col gap-2 rounded-2xl bg-background p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <div className="flex-1">
                  <h4 className="font-serif text-lg text-charcoal">{b.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <span className="text-sm text-muted-foreground line-through">{b.price}</span>
                  <span className="rounded-full bg-rose-deep px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Grátis hoje
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ============== 7. QUALIFICAÇÃO ============== */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-charcoal sm:text-4xl">
            Será que o "60 Atitudes" vai funcionar para você?
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-success/30 bg-sage-soft p-8 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-success/20">
                <Check className="h-5 w-5 text-success" strokeWidth={3} />
              </span>
              <h3 className="font-serif text-xl text-charcoal">É para você se…</h3>
            </div>
            <ul className="mt-6 space-y-4">
              {forYou.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-success" strokeWidth={2.5} />
                  <span className="text-charcoal">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-destructive/30 bg-card p-8 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/15">
                <X className="h-5 w-5 text-destructive" strokeWidth={3} />
              </span>
              <h3 className="font-serif text-xl text-charcoal">Não é para você se…</h3>
            </div>
            <ul className="mt-6 space-y-4">
              {notForYou.map((item) => (
                <li key={item} className="flex gap-3">
                  <X className="mt-1 h-5 w-5 shrink-0 text-destructive" strokeWidth={2.5} />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ============== 8. OFERTA + COMPRA ============== */}
      <Section id="oferta" className="bg-sand">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-charcoal sm:text-4xl">
            Escolha o melhor pacote para resgatar a sua família hoje
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Se você fosse contratar uma terapia de casal, pagaria no mínimo{" "}
            <strong className="text-charcoal">R$ 250 por sessão</strong> — e o seu marido provavelmente se
            recusaria a ir.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Card 1 — Básico */}
          <div className="flex flex-col rounded-3xl bg-card p-8 shadow-soft sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Opção 1</p>
            <h3 className="mt-2 font-serif text-2xl text-charcoal">Pacote Básico</h3>
            <p className="mt-2 text-sm text-muted-foreground">O essencial para dar o primeiro passo.</p>

            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-serif text-5xl text-charcoal">R$ 17,90</span>
              <span className="text-sm text-muted-foreground">único</span>
            </div>

            <ul className="mt-8 flex-1 space-y-3 text-sm">
              <li className="flex gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" strokeWidth={2.5} />
                <span>Acesso vitalício ao MiniApp "60 Atitudes Simples"</span>
              </li>
              <li className="flex gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" strokeWidth={2.5} />
                <span>Os 5 Módulos de Conteúdo (Diagnóstico, Método, Plano Prático, Ponte e Manutenção)</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" strokeWidth={2.5} />
                <span>Não inclui os Bônus Especiais</span>
              </li>
            </ul>

            <a
              href="#"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-charcoal/30 bg-transparent px-6 py-4 text-sm font-semibold text-charcoal transition hover:bg-charcoal hover:text-white"
            >
              Quero o pacote básico
            </a>
          </div>

          {/* Card 2 — Completo (destaque) */}
          <div className="relative flex flex-col rounded-3xl border-2 border-rose-deep bg-card p-8 shadow-cta sm:p-10">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-rose-deep px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-cta">
              ⭐ Mais escolhido
            </span>

            <p className="text-xs font-semibold uppercase tracking-wider text-rose-deep">Opção 2</p>
            <h3 className="mt-2 font-serif text-2xl text-charcoal">Pacote Completo</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A estrutura completa para resultados mais rápidos e sem esforço.
            </p>

            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-serif text-5xl text-rose-deep">R$ 27,90</span>
              <span className="text-sm text-muted-foreground">único</span>
            </div>

            <ul className="mt-8 flex-1 space-y-3 text-sm">
              <li className="flex gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" strokeWidth={2.5} />
                <span>Acesso vitalício ao MiniApp "60 Atitudes Simples"</span>
              </li>
              <li className="flex gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" strokeWidth={2.5} />
                <span>Os 5 Módulos completos de Conteúdo</span>
              </li>
              <li className="flex gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" strokeWidth={2.5} />
                <span>
                  <strong>Bônus 1:</strong> Guia da "Paz Armada"
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" strokeWidth={2.5} />
                <span>
                  <strong>Bônus 2:</strong> Checklist da Conversa Importante
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" strokeWidth={2.5} />
                <span>
                  <strong>Bônus 3:</strong> Pack 50 Mensagens Prontas para WhatsApp
                </span>
              </li>
            </ul>

            <div className="mt-8">
              <CTAButton size="xl" pulse>
                Sim! Quero o pacote completo
              </CTAButton>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Ou{" "}
                <a href="#" className="underline hover:text-charcoal">
                  clique aqui
                </a>{" "}
                para levar apenas o pacote básico por R$ 17,90
              </p>
            </div>
          </div>
        </div>

        {/* Selo de garantia */}
        <div className="mx-auto mt-12 flex max-w-xl flex-col items-center gap-4 rounded-3xl bg-card p-8 text-center shadow-soft sm:flex-row sm:text-left">
          <ShieldCheck className="h-14 w-14 shrink-0 text-success" strokeWidth={1.5} />
          <div>
            <h4 className="font-serif text-xl text-charcoal">Garantia incondicional de 7 dias</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Risco zero. Acesse o método, aplique as primeiras mensagens. Se o comportamento dele não começar
              a mudar, a garantia te protege.
            </p>
          </div>
        </div>
      </Section>

      {/* ============== 9. URGÊNCIA ============== */}
      <Section className="bg-charcoal text-white">
        <div className="mx-auto max-w-3xl text-center">
          <Clock className="mx-auto h-12 w-12 text-rose opacity-90" strokeWidth={1.5} />
          <h2 className="mt-6 font-serif text-3xl text-white sm:text-4xl lg:text-5xl">
            O que acontece se você fechar esta página agora?
          </h2>

          <div className="mt-10 space-y-6 text-left text-lg leading-relaxed text-white/80 sm:text-center">
            <p>
              Sinceramente? <strong className="text-white">Nada.</strong> Tudo continuará exatamente como está.
              Amanhã você vai acordar, preparar o café, ele vai pegar o celular e mal vai olhar no seu rosto.
              Vocês vão passar mais uma noite no mesmo quarto, mas há quilômetros de distância emocional.
            </p>
            <p>
              A distância no casamento <strong className="text-white">não estaciona</strong>; ela só aumenta com
              o tempo. Hoje são só conversas curtas. Amanhã é a falta total de intimidade. Em um ano, pode ser o
              fim de uma família que poderia ter sido salva.
            </p>
            <p className="font-serif text-2xl italic text-white">
              O custo do divórcio financeiro e emocional é gigante. O custo para dar o primeiro passo e mudar
              essa história hoje é de apenas <span className="text-rose">R$ 27,90</span>.
            </p>
            <p className="font-semibold text-white">Qual deles você escolhe pagar?</p>
          </div>

          <div className="mt-10 flex justify-center">
            <CTAButton size="xl" pulse>
              Quero mudar essa história agora
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* ============== 10. RECAP + FAQ ============== */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border-2 border-rose-deep/40 bg-card p-8 text-center shadow-cta sm:p-12">
            <BookOpen className="mx-auto h-10 w-10 text-rose-deep" strokeWidth={1.5} />
            <h2 className="mt-4 font-serif text-3xl text-charcoal sm:text-4xl">
              Recapitulando sua oferta completa
            </h2>

            <ul className="mx-auto mt-8 max-w-md space-y-3 text-left">
              {[
                'MiniApp "60 Atitudes Simples"',
                "Bônus 1: Guia da Paz Armada",
                "Bônus 2: Checklist da Conversa Importante",
                "Bônus 3: 50 Mensagens Prontas para WhatsApp",
                "Garantia Incondicional de 7 Dias",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-success" strokeWidth={2.5} />
                  <span className="text-charcoal">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-border pt-8">
              <p className="text-sm uppercase tracking-wider text-muted-foreground">Por apenas</p>
              <p className="mt-2 font-serif text-6xl text-rose-deep sm:text-7xl">R$ 27,90</p>
              <p className="mt-2 text-sm text-muted-foreground">pagamento único · acesso vitalício</p>

              <div className="mt-8">
                <CTAButton size="xl" pulse>
                  Quero acesso imediato ao pacote completo
                </CTAButton>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Lock className="h-4 w-4" /> Pagamento 100% seguro
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4" /> Garantia de 7 dias
                </span>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-center font-serif text-3xl text-charcoal sm:text-4xl">Perguntas frequentes</h2>
            <div className="mt-10">
              <Faq />
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border bg-background px-5 py-10 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} 60 Atitudes Simples. Todos os direitos reservados.</p>
        <p className="mt-2">
          Este produto não substitui acompanhamento psicológico ou terapia de casal profissional.
        </p>
      </footer>
    </main>
  );
}
