import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  Receipt, 
  ClipboardCheck, 
  BarChart3 
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "General Bookkeeping",
    description: "Day-to-day recording of financial transactions, maintaining ledgers, and organizing your financial data accurately.",
  },
  {
    icon: Receipt,
    title: "Accounts Payable & Receivable",
    description: "Managing invoices, tracking payments, following up on outstanding balances, and ensuring smooth cash flow.",
  },
  {
    icon: FileText,
    title: "Bank Reconciliation",
    description: "Monthly reconciliation of your bank statements to ensure your records match and identify any discrepancies.",
  },
  {
    icon: TrendingUp,
    title: "Financial Reporting",
    description: "Prepare monthly, quarterly, and annual financial statements including profit & loss and balance sheets.",
  },
  {
    icon: ClipboardCheck,
    title: "Tax Preparation Support",
    description: "Organize and prepare your financial documents for tax season, making filing smooth and stress-free.",
  },
  {
    icon: BarChart3,
    title: "Budget Planning",
    description: "Help you create and monitor budgets to track expenses and achieve your financial goals effectively.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-background section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-3">What I Offer</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Bookkeeping Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive bookkeeping solutions tailored to meet the unique needs of your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
