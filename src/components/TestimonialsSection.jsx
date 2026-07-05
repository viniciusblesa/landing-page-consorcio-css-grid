import SectionHeading from './SectionHeading';

function TestimonialsSection() {
  return (
    <section id="clientes" className="section testimonials">
      <SectionHeading eyebrow="Clientes" title="Histórias reais de quem transformou o sonho em carro" />
      <div className="testimonial-grid">
        <article className="testimonial-card">
          <div className="stars" aria-label="5 estrelas">★★★★★</div>
          <p>“Consegui meu primeiro carro em menos de um ano, com uma estratégia impecável e parcelas que cabiam no bolso.”</p>
          <div><strong>Carlos Silva</strong><span>Cliente há 2 anos</span></div>
        </article>
        <article className="testimonial-card">
          <div className="stars" aria-label="5 estrelas">★★★★★</div>
          <p>“O atendimento foi excelente desde o início. Sentia segurança e clareza em cada passo.”</p>
          <div><strong>Ana Paula</strong><span>Cliente há 3 anos</span></div>
        </article>
      </div>
    </section>
  );
}

export default TestimonialsSection;
