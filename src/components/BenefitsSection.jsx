import SectionHeading from './SectionHeading';

function BenefitsSection() {
  return (
    <section id="vantagens" className="section">
      <SectionHeading eyebrow="Vantagens" title="Por que o consórcio pode ser a melhor escolha para você" />
      <div className="benefits-grid">
        <article className="benefit-card">
          <i className="fa-solid fa-money-bill-wave"></i>
          <h3>Parcelas acessíveis</h3>
          <p>Valores compatíveis com o seu orçamento e sem surpresas no fim do mês.</p>
        </article>
        <article className="benefit-card">
          <i className="fa-solid fa-shield-halved"></i>
          <h3>Segurança garantida</h3>
          <p>Operação transparente, com acompanhamento de especialistas em cada etapa.</p>
        </article>
        <article className="benefit-card">
          <i className="fa-solid fa-headset"></i>
          <h3>Atendimento especializado</h3>
          <p>Equipe preparada para explicar, orientar e facilitar a sua decisão.</p>
        </article>
      </div>
    </section>
  );
}

export default BenefitsSection;
