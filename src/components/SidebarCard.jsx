function SidebarCard({ isFixed = false }) {
  return (
    <aside className="sidebar">
      <div className={`sidebar-card ${isFixed ? 'is-fixed' : ''}`}>
        <p className="eyebrow">Oferta especial</p>
        <h2>Consórcio com entrada a partir de 10%</h2>
        <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop" alt="Promoção especial de consórcio" />
        <ul>
          <li>Parcelas planejadas</li>
          <li>Consultoria especializada</li>
          <li>Maior transparência</li>
          <li>Sem juros abusivos</li>
        </ul>
        <a className="btn btn-primary full" href="#contato">Fazer simulação</a>
      </div>
    </aside>
  );
}

export default SidebarCard;
