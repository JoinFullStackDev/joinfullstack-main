export const ProofBar = () => {
  const clients = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'HealthSync', logo: 'HS' },
    { name: 'FinanceAI', logo: 'FA' },
    { name: 'DataFlow', logo: 'DF' },
    { name: 'CloudScale', logo: 'CS' },
  ];

  return (
    <section className="relative py-24 px-6 border-y border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm font-mono text-muted-foreground uppercase tracking-wider mb-12">
          Trusted by Industry Leaders
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center p-6 rounded-lg border border-border/50 bg-card/50 hover:border-accent/30 transition-colors"
            >
              <div className="text-2xl font-bold font-mono text-muted-foreground">
                {client.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
