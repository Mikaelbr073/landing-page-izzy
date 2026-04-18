const imgImage =
  "https://www.figma.com/api/mcp/asset/ef82f061-8051-4fb5-a98c-0005cfe47786";
const imgImage1 =
  "https://www.figma.com/api/mcp/asset/bb463c04-8c99-46f2-909c-20ddecf76696";
const imgImage2 =
  "https://www.figma.com/api/mcp/asset/fcf5f3b4-9914-4c6a-995b-016f39ee7383";
const imgWordUnderline =
  "https://www.figma.com/api/mcp/asset/4bbb22da-00a6-42d0-921b-40ff14533d00";

const cards = [
  {
    image: imgImage,
    title: "Monitor que realmente explica",
    description:
      "Pergunte qualquer dúvida e receba explicações claras, com exemplos e dicas visuais.",
  },
  {
    image: imgImage1,
    title: "Sistema de pontos",
    description:
      "Ganhe pontos estudando, complete desafios e veja seu ranking subir. Aprender virou um jogo!",
  },
  {
    image: imgImage2,
    title: "Revisão personalizada",
    description:
      "O app identifica o que você precisa melhorar e sugere exercícios sob medida para arrasar nas provas.",
  },
];

export default function BenefitsStudents() {
  return (
    <section id="alunos" className="bg-[#fbf5e8] py-16 sm:py-20 lg:py-24 px-5 sm:px-10 lg:px-[120px]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10 lg:gap-14">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex flex-col gap-4 w-full lg:w-[560px]">
            <div className="bg-[#e4e6ff] flex items-center px-[14px] py-[6px] rounded-full self-start">
              <span className="font-semibold text-[13px] text-[#7a88fe]">
                Para estudantes
              </span>
            </div>
            <div className="relative">
              <h2 className="font-extrabold text-[28px] sm:text-[34px] lg:text-[40px] text-[#383733] leading-tight lg:leading-[52px]">
                Estudar ficou{" "}
                <span className="relative inline-block">
                  divertido
                  <img
                    alt=""
                    src={imgWordUnderline}
                    className="absolute left-0 -bottom-1 w-full h-3"
                  />
                </span>
                ,<br />
                rápido e personalizado
              </h2>
            </div>
          </div>
          <p className="font-normal text-[15px] sm:text-[17px] text-[#817e79] leading-7 w-full lg:w-[480px]">
            Monitor de estudos inteligente que responde dúvidas na hora, sistema de pontos que motiva e
            sugestões que reforçam o que você precisa.
          </p>
        </div>

        {/* Student Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-[#d9d9d9] rounded-lg overflow-hidden flex flex-col shadow-[0px_4px_12px_-2px_rgba(15,23,41,0.06),0px_12px_32px_0px_rgba(15,23,41,0.08)]"
            >
              <div className="h-[220px] sm:h-[240px] lg:h-[260px] overflow-hidden">
                <img
                  alt={card.title}
                  className="w-full h-full object-cover"
                  src={card.image}
                />
              </div>
              <div className="flex flex-col gap-2 px-6 pt-5 pb-6">
                <h3 className="font-semibold text-xl sm:text-2xl text-[#1e1e1e] tracking-tight leading-tight">
                  {card.title}
                </h3>
                <p className="font-normal text-sm sm:text-base text-[#757575] leading-snug">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
