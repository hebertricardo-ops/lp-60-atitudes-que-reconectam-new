import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "1. O meu parceiro precisa ler o guia junto comigo?",
    a: "Não! Esse é o maior diferencial. O método é aplicado por você de forma silenciosa e invisível. Ele vai perceber a mudança na dinâmica de vocês e vai reagir a isso de forma natural, sem se sentir cobrado ou pressionado.",
  },
  {
    q: "2. Minha rotina é louca, não tenho tempo para ler livros longos.",
    a: "Foi pensado para você. O material não é um e-book gigante, é um MiniApp. Você entra, escolhe a atitude do dia, copia um script ou aplica a dica em menos de 5 minutos, e volta para a sua rotina.",
  },
  {
    q: "3. Como eu acesso o material?",
    a: "Assim que o seu pagamento for aprovado (Pix ou Cartão liberam na hora), você receberá um e-mail com o link de acesso seguro à nossa plataforma. Você pode abrir direto no navegador do seu celular, computador ou tablet.",
  },
  {
    q: "4. E se não funcionar para mim?",
    a: "Você tem 7 dias de garantia incondicional protegidos por lei. O reembolso é feito direto pela Hotmart. Basta acessar a sua conta na plataforma e solicitar o cancelamento, sem dor de cabeça, sem precisar pedir satisfação e sem precisar enviar e-mail para ninguém. Simples e totalmente seguro.",
  },
  {
    q: "5. O pagamento é seguro?",
    a: "Sim, 100%. Todo o pagamento é processado pela Hotmart, a plataforma de pagamentos e venda de infoprodutos mais segura e confiável do Brasil. Seus dados financeiros nunca passam por nós — a Hotmart cuida de tudo com criptografia de ponta a ponta, aceitando Pix, cartão de crédito e boleto bancário.",
  },
];

export function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-3">
      {faqs.map((item, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className="overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-soft"
        >
          <AccordionTrigger className="py-5 text-left font-serif text-lg text-charcoal hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
