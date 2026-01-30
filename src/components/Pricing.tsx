import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    description: "Perfect for freelancers and solopreneurs",
    price: "$150",
    period: "/month",
    features: [
      "Monthly bookkeeping",
      "Bank reconciliation",
      "Up to 50 transactions",
      "Monthly financial summary",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing small businesses",
    price: "$300",
    period: "/month",
    features: [
      "Everything in Basic",
      "Up to 150 transactions",
      "Accounts payable & receivable",
      "Quarterly financial reports",
      "Tax preparation support",
      "Priority email & phone support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For established businesses with complex needs",
    price: "$500",
    period: "/month",
    features: [
      "Everything in Professional",
      "Unlimited transactions",
      "Custom financial reporting",
      "Budget planning & analysis",
      "Dedicated support",
      "Monthly strategy call",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="bg-secondary section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-3">Pricing</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Transparent Fees
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Simple, straightforward pricing with no hidden fees. Choose the plan that fits your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? "bg-navy text-primary-foreground shadow-medium scale-105"
                  : "bg-card border border-border shadow-soft"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-display text-xl font-semibold mb-2 ${
                  plan.highlighted ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${
                  plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className={`font-display text-4xl font-bold ${
                  plan.highlighted ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {plan.price}
                </span>
                <span className={plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? "text-gold" : "text-accent"
                    }`} />
                    <span className={`text-sm ${
                      plan.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "hero" : "outline"}
                className="w-full"
                onClick={scrollToContact}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-10">
          Need a custom plan? <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToContact(); }} className="text-accent hover:underline">Contact me</a> for a personalized quote.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
