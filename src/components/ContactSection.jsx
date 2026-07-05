import ContactForm from './ContactForm';

function ContactSection() {
  return (
    <section id="contato" className="section contact">
      <div className="contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">Fale com um especialista</p>
          <h2>Receba uma proposta personalizada em poucos minutos.</h2>
          <p>Preencha o formulário e nossa equipe entrará em contato com você para encontrar a melhor opção.</p>
          <ul>
            <li><i className="fa-solid fa-phone"></i> (99) 9999-9999</li>
            <li><i className="fa-solid fa-envelope"></i> contato@carconsorcios.com.br</li>
            <li><i className="fa-solid fa-location-dot"></i> Atendimento online e presencial</li>
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export default ContactSection;
