import "./about.css";

function About() {
  return (
    <section id="about">
      <div className="container-about">
        <h2>Sobre o curso</h2>
        <h6>Um pequeno resumo do que você aprendera<br /> por meio deste curso</h6>
        <div className="content-box">
          <div className="box-about">
            <h3>Aprenda do Zero ao Avançado</h3>
            <p>
              Nosso curso foi desenvolvido para iniciantes que querem dominar a
              programação, mesmo sem nenhuma experiência prévia. Você vai
              começar com o básico e evoluir até criar seus próprios projetos
              profissionais.
            </p>
          </div>
          <div className="box-about box-2 bg-white">
            <h3 className="text-black">Prática e Projeto Real</h3>
            <p className="text-black">
              Nada de teoria sem sentido! Aqui você aprende praticando. Cada
              módulo traz desafios reais para você aplicar o que aprendeu e
              criar sites, sistemas e funcionalidades de verdade.
            </p>
          </div>
          <div className="box-about box-2 bg-white">
            <h3 className="text-black">Transforme Conhecimento em Renda</h3>
            <p className="text-black">
              Aprender a programar é o primeiro passo. O nosso curso também te
              mostra como transformar esse conhecimento em uma fonte de renda,
              seja com freelas, empregos ou criação de seus próprios projetos.
            </p>
          </div>
          <div className="box-about">
            <h3>Suporte e Comunidade Exclusiva</h3>
            <p>
              Você não estará sozinho nessa jornada. Ao se inscrever, você ganha
              acesso a uma comunidade de alunos e suporte direto com quem já
              trilhou o mesmo caminho. Tire dúvidas, compartilhe projetos e
              evolua junto com outros futuros programadores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
