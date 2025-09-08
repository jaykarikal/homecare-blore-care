import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Heart } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-primary-light/20 to-secondary-light/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-primary">Care with Grace</span>
                <br />
                <span className="text-secondary">Comfort with Heart</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                JunoNest provides compassionate home care services in Bangalore, offering personalized medical care, 
                companionship, and support for your loved ones in the comfort and familiarity of their own home.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">24/7 Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">5+ Years Experience</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-accent border-0 hover:opacity-90 transition-all duration-300 text-lg px-8 py-6 group"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6"
              >
                Call Now: +91 9876543210
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">24/7</div>
                <div className="text-sm text-muted-foreground">Care Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-large">
              <img 
                src={heroImage} 
                alt="Professional caregiver providing compassionate home care" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-xl shadow-medium border border-border">
              <div className="flex items-center space-x-4">
                <img 
                  src="/lovable-uploads/6f2622de-88fa-4a22-ad10-f2c22964c459.png" 
                  alt="JunoNest Logo" 
                  className="h-10 w-auto"
                />
                <div>
                  <div className="font-semibold text-foreground">Trusted Care</div>
                  <div className="text-sm text-muted-foreground">Since 2019</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;