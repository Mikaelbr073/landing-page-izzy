const imgSpeechIcon =
  "https://www.figma.com/api/mcp/asset/aad712f4-f9d3-46e9-889d-2f435a88dbeb";

const row1Testimonials = [
  {
    initials: "AS",
    name: "Ana Souza",
    handle: "@ana_estuda",
    text: "Finalmente um app onde meu filho pede pra estudar sozinho. A ideia de acompanhar o progresso em tempo real é exatamente o que eu precisava.",
    color: "#f055a5",
  },
  {
    initials: "CL",
    name: "Carlos Lima",
    handle: "@carloslima",
    text: "Meu filho tem muitas dúvidas fora do horário de aula e eu não consigo ajudar em tudo. O Izzy vai resolver isso de vez!",
    color: "#7a88fe",
  },
  {
    initials: "PM",
    name: "Priya Mendes",
    handle: "@priya.m",
    text: "Adoro a ideia do sistema de pontos. Gamificação no aprendizado é o que motiva as crianças de hoje. Mal posso esperar!",
    color: "#ccd537",
  },
  {
    initials: "MC",
    name: "Marina Costa",
    handle: "@marinacosta",
    text: "Minha filha se empolgou quando viu as explicações com exemplos. Parece aula particular na palma da mão.",
    color: "#fcd34d",
  },
];

const row2Testimonials = [
  {
    initials: "PR",
    name: "Paulo Ribeiro",
    handle: "@pauloribeiro",
    text: "Uso o dashboard pra acompanhar o que meu filho mais tem dúvida. É um alívio saber exatamente onde ele precisa focar.",
    color: "#7a88fe",
  },
  {
    initials: "JS",
    name: "Juliana Santos",
    handle: "@prof.ju",
    text: "Como professora, recomendo. As respostas são didáticas e ajudam a consolidar o que ensino em sala de aula.",
    color: "#ccd537",
  },
  {
    initials: "RO",
    name: "Rafael Oliveira",
    handle: "@raf_ol",
    text: "Cadastrei em 2 minutos, meu filho começou a usar sozinho. Interface simples, sem tutoriais chatos.",
    color: "#f055a5",
  },
  {
    initials: "BA",
    name: "Beatriz Alves",
    handle: "@biaalves_",
    text: "Os relatórios que chegam pra mim são super claros. Sei exatamente onde minha filha está evoluindo.",
    color: "#fcd34d",
  },
];

function TweetCard({
  initials,
  name,
  handle,
  text,
  color,
}: {
  initials: string;
  name: string;
  handle: string;
  text: string;
  color: string;
}) {
  return (
    <div className="bg-white border border-[#e3dacc] flex flex-col gap-[14px] pb-[22px] pt-5 px-[22px] rounded-2xl shadow-[0px_8px_20px_0px_rgba(15,23,41,0.03),0px_2px_6px_0px_rgba(15,23,41,0.04)] w-[300px] sm:w-[340px] lg:w-[380px] shrink-0">
      <div className="flex gap-3 items-center">
        <div
          className="flex items-center justify-center rounded-2xl size-10 shrink-0"
          style={{ backgroundColor: color }}
        >
          <span className="font-bold text-[14px] text-white">{initials}</span>
        </div>
        <div className="flex flex-col gap-0.5 min-w-0">
          <p className="font-bold text-[14px] sm:text-[15px] text-[#383733] truncate">{name}</p>
          <p className="font-normal text-[12px] sm:text-[13px] text-[#817e79] truncate">{handle}</p>
        </div>
        <img alt="" className="size-5 shrink-0 ml-auto" src={imgSpeechIcon} />
      </div>
      <p className="font-normal text-[13px] sm:text-[15px] text-[#383733] leading-[22px]">
        {text}
      </p>
    </div>
  );
}

function MarqueeRow({
  testimonials,
  direction,
}: {
  testimonials: typeof row1Testimonials;
  direction: "left" | "right";
}) {
  const animationName = direction === "left" ? "marquee-left" : "marquee-right";
  const doubled = [...testimonials, ...testimonials];

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-4 sm:gap-5"
        style={{
          animation: `${animationName} 30s linear infinite`,
          width: "max-content",
        }}
      >
        {doubled.map((t, i) => (
          <TweetCard key={`${t.initials}-${i}`} {...t} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-[#f5edd8] flex flex-col items-center py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col gap-4 items-center text-center px-5 sm:px-10 max-w-[1200px]">
        <h2 className="font-bold text-[28px] sm:text-[34px] lg:text-[40px] text-[#383733] leading-tight lg:leading-[48px]">
          Histórias reais de quem
          <br />
          usa o Izzy no dia a dia
        </h2>
        <p className="font-normal text-sm sm:text-base text-[#817e79] max-w-[520px]">
          Veja relatos de famílias que usam o Izzy para deixar o estudo mais leve.
        </p>
      </div>

      <div className="mt-10 lg:mt-12 flex flex-col gap-4 sm:gap-5 w-full">
        <MarqueeRow testimonials={row1Testimonials} direction="left" />
        <MarqueeRow testimonials={row2Testimonials} direction="right" />
      </div>
    </section>
  );
}
