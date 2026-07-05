import { useState } from 'react';

function ContactForm() {
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = () => {
    setFormMessage('Enviando sua mensagem...');
  };

  return (
    <form action="https://formsubmit.co/el/tegami" method="POST" onSubmit={handleSubmit}>
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="Nova simulação recebida pelo site" />
      <input type="hidden" name="_next" value="/thanks.html" />
      <input type="text" name="nome" placeholder="Seu nome" required />
      <input type="email" name="email" placeholder="Seu e-mail" required />
      <input type="tel" name="telefone" placeholder="Seu telefone" />
      <textarea name="mensagem" placeholder="Conte um pouco sobre o veículo que você deseja" required></textarea>
      <button type="submit" className="btn btn-primary">
        Enviar mensagem
      </button>
      <p className="form-feedback" aria-live="polite">{formMessage}</p>
    </form>
  );
}

export default ContactForm;
