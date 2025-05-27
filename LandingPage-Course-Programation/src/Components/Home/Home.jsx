import "./home.css";
function Home() {
  return (
    <main>
    <section className="hero">
      <div className="hero-content">
        <h1>
          Domine a <span className="italic font-normal">informática</span> e
          abra <br /> as portas do seu
          <span className="italic font-normal">futuro</span>!
        </h1>
        <p>
          CONHECE O NOSSO CURSO DE PROGRAMAÇÃO, ONDE VOCÊ APRENDERA COMO CRIAR,
          PERSONALIZAR E GANHAR DINHEIRO NO <br />
          MUNDO DA PROGRAMAÇÃO.
        </p>
        <div className="content-btn-hero">
          <a href="#contato" className="btn-hero" id="btn-hero-ctc">
            Contate-nos
          </a>
          <a href="preços" className="btn-hero" id="btn-hero-cp">
            Compre agora →
          </a>
        </div>
      </div>
    </section>
    </main>
  );
}

export default Home;
