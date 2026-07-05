import SectionHeading from './SectionHeading';

function PlansSection() {
  return (
    <section id="planos" className="section">
      <SectionHeading eyebrow="Planos" title="Escolha o plano ideal para o seu estilo de vida" />
      <div className="cards">
        <article className="card">
          <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop" alt="Plano Popular" />
          <h3>Plano Popular</h3>
          <p>Ideal para quem busca começar com parcelas acessíveis e entrar no mercado automotivo com segurança.</p>
          <ul>
            <li>Entrada reduzida</li>
            <li>Parcelas a partir de R$499</li>
            <li>Flexibilidade de prazo</li>
          </ul>
        </article>
        <article className="card card-featured">
          <span className="card-badge">Mais procurado</span>
          <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1200&auto=format&fit=crop" alt="Plano SUV" />
          <h3>Plano SUV</h3>
          <p>Perfeito para famílias que querem conforto, espaço e mais segurança nas viagens do dia a dia.</p>
          <ul>
            <li>Conforto premium</li>
            <li>Mais espaço para a família</li>
            <li>Parcela previsível</li>
          </ul>
        </article>
        <article className="card">
          <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop" alt="Plano Utilitário" />
          <h3>Plano Utilitário</h3>
          <p>Solução prática para trabalho, logística e mobilidade com economia e planejamento.</p>
          <ul>
            <li>Excelente para frota</li>
            <li>Mais produtividade</li>
            <li>Estrutura sob medida</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default PlansSection;
