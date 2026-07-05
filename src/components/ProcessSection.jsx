import SectionHeading from './SectionHeading';

function ProcessSection() {
  return (
    <section className="section process">
      <SectionHeading eyebrow="Como funciona" title="Do simulado à contemplação, seguimos com você" />
      <div className="steps-grid">
        <article className="step-card"><span>01</span><h3>Simulação</h3><p>Entendemos seu perfil e montamos uma proposta alinhada ao seu orçamento.</p></article>
        <article className="step-card"><span>02</span><h3>Cadastro</h3><p>Organizamos todos os documentos e deixamos o processo simples e seguro.</p></article>
        <article className="step-card"><span>03</span><h3>Contemplação</h3><p>Você acompanha cada etapa com suporte humano e respostas rápidas.</p></article>
      </div>
    </section>
  );
}

export default ProcessSection;
