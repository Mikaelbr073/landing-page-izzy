const imgInstagram =
  "https://www.figma.com/api/mcp/asset/dbbc6cf2-179b-48ec-b643-aa995d0291f5";

export default function Footer() {
  return (
    <footer className="bg-[#fff6e8] flex items-center justify-between px-5 sm:px-10 lg:px-[120px] py-6 sm:py-8 gap-4">
      <p className="font-normal text-[12px] sm:text-[13px] text-[#817e79]">
        © 2026 Izzy Peazy. Todos os direitos reservados.
      </p>
      <a
        href="https://www.instagram.com/izzypeazyedu/"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0"
      >
        <img alt="Instagram" className="size-[22px]" src={imgInstagram} />
      </a>
    </footer>
  );
}
