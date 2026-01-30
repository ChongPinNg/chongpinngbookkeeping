import { Award, Users, Clock, Heart } from "lucide-react";
import profilePic from "@/assets/profile-pic.png";

const stats = [
  { icon: Clock, value: "10+", label: "Years Experience" },
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Award, value: "100%", label: "Satisfaction Rate" },
];

const About = () => {
  return (
    <section id="about" className="bg-background section-padding">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl -rotate-3" />
              <img
                src={profilePic}
                alt="Chong Pin - Professional Bookkeeper"
                className="relative rounded-2xl shadow-medium w-full max-w-md mx-auto lg:mx-0 object-cover aspect-[3/4]"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-accent font-semibold mb-3">About Me</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Trusted <br />Bookkeeping Partner
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm Chong Pin, a dedicated bookkeeper with over a decade of experience 
                helping small businesses and entrepreneurs maintain accurate financial records.
              </p>
              <p>
                I understand that managing your finances can be overwhelming, especially when 
                you're focused on growing your business. That's why I'm here to take that burden 
                off your shoulders, providing personalized bookkeeping services that give you 
                peace of mind and clarity about your financial health.
              </p>
              <p>
                My approach is simple: I treat every client's business as if it were my own. 
                I'm detail-oriented, reliable, and committed to helping you achieve your financial goals.
              </p>
            </div>

            <div className="flex items-center gap-3 mt-8 p-4 bg-secondary rounded-lg border border-border">
              <Heart className="w-6 h-6 text-accent flex-shrink-0" />
              <p className="text-foreground font-medium">
                "My mission is to empower small business owners with financial clarity and confidence."
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat) => (
                <div 
                  key={stat.label} 
                  className="bg-secondary rounded-xl p-4 text-center border border-border"
                >
                  <stat.icon className="w-5 h-5 text-accent mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Work With Me */}
        <div className="mt-20 bg-secondary rounded-2xl p-8 md:p-12 border border-border">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-8 text-center">
            Why Work With Me?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              "Personalized attention to your unique business needs",
              "Clear communication and regular updates",
              "Accurate and timely financial records",
              "Affordable pricing for small businesses",
              "Confidential and secure handling of your data",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                </span>
                <span className="text-muted-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
