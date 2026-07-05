function HeroSection() {
  return (
    <section id="home" className="section hero">
      <div className="hero-copy">
        <p className="eyebrow">Planejamento inteligente para conquistar seu carro</p>
        <h1>Seu próximo veículo com parcelas previsíveis e uma equipe de especialistas ao seu lado.</h1>
        <p>Consórcio automotivo com transparência, contemplação ágil e planos sob medida para carros, SUVs e utilitários.</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#contato">Solicitar simulação</a>
          <a className="btn btn-secondary" href="#planos">Ver planos</a>
        </div>
        <ul className="hero-badges">
          <li><i className="fa-solid fa-circle-check"></i>Entrada facilitada</li>
          <li><i className="fa-solid fa-circle-check"></i>Parcelas planejadas</li>
          <li><i className="fa-solid fa-circle-check"></i>Atendimento humano</li>
        </ul>
      </div>

      <div className="hero-visual">
        <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop" alt="Carro moderno em destaque" />
        <div className="hero-metric-card">
          <div><strong>+20 anos</strong><span>de experiência</span></div>
          <div><strong>98%</strong><span>de satisfação</span></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
