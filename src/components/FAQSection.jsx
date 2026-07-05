import SectionHeading from './SectionHeading';

function FAQSection() {
  return (
    <section className="section faq">
      <SectionHeading eyebrow="Perguntas frequentes" title="As dúvidas mais comuns dos nossos clientes" />
      <div className="faq-list">
        <details className="faq-item" open>
          <summary>Quanto preciso para começar um consórcio?</summary>
          <p>O valor inicial varia conforme o plano, o prazo e o veículo desejado. Em muitos casos, a entrada pode ser bem acessível.</p>
        </details>
        <details className="faq-item">
          <summary>Consórcio é melhor do que financiamento?</summary>
          <p>Depende do seu objetivo. O consórcio é excelente para quem busca planejamento, previsibilidade e ausência de juros abusivos.</p>
        </details>
        <details className="faq-item">
          <summary>Quanto tempo demora para contemplar?</summary>
          <p>O tempo pode variar conforme o plano e o número de participantes, mas nossa equipe ajuda a escolher uma estratégia mais adequada.</p>
        </details>
      </div>
    </section>
  );
}

export default FAQSection;
