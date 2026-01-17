export const ServicesHero = () => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center px-6 pt-28 md:pt-24 pb-12">
      <div className="max-w-5xl mx-auto text-center animate-fade-in">
        <div className="inline-block px-4 py-2 rounded-full border border-accent/20 bg-accent/5 mb-6">
          <span className="text-sm font-mono text-accent uppercase tracking-wider">
            Our Services
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          End-to-End Product
          <br />
          <span className="text-accent">Development Excellence</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 text-balance">
          From initial concept to production launch, we guide your product through every critical phase with precision engineering and strategic thinking.
        </p>
      </div>
    </section>
  );
};
