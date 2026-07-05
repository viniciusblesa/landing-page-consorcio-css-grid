import SectionHeading from './SectionHeading';

function AboutSection() {
  return (
    <section id="sobre" className="section">
      <SectionHeading eyebrow="Sobre nós" title="Por que milhares de clientes confiam na Car Consórcios" />
      <div className="about-grid">
        <article className="info-card">
          <i className="fa-solid fa-shield-halved"></i>
          <h3>Segurança e transparência</h3>
          <p>Processo claro, sem pegadinhas e com orientação completa em todas as etapas.</p>
        </article>
        <article className="info-card">
          <i className="fa-solid fa-chart-line"></i>
          <h3>Planejamento financeiro</h3>
          <p>Estruturamos o consórcio para que a sua realidade financeira fique sempre em equilíbrio.</p>
        </article>
        <article className="info-card">
          <i className="fa-solid fa-headset"></i>
          <h3>Atendimento próximo</h3>
          <p>Uma equipe dedicada acompanha sua jornada até a contemplação e a assinatura do veículo.</p>
        </article>
      </div>
    </section>
  );
}

export default AboutSection;
