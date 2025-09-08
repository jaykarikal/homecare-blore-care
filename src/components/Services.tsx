import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Heart, 
  Users, 
  Home, 
  Clock, 
  Shield,
  Activity,
  Pill,
  Bath,
  Utensils
} from "lucide-react";
import servicesImage from "@/assets/services-image.jpg";
import medicalCareImage from "@/assets/medical-care.jpg";
import companionshipImage from "@/assets/companionship.jpg";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Medical Care",
      description: "Professional nursing care, medication management, wound care, and health monitoring by certified healthcare professionals.",
      image: medicalCareImage,
      features: ["Medication Administration", "Wound Care", "Health Monitoring", "Post-Surgery Care"]
    },
    {
      icon: Heart,
      title: "Personal Care",
      description: "Assistance with daily activities including bathing, dressing, grooming, and mobility support with dignity and respect.",
      image: companionshipImage,
      features: ["Bathing & Hygiene", "Dressing Assistance", "Mobility Support", "Grooming Care"]
    },
    {
      icon: Users,
      title: "Companionship",
      description: "Social interaction, emotional support, and engaging activities to enhance quality of life and combat loneliness.",
      image: companionshipImage,
      features: ["Social Interaction", "Emotional Support", "Activity Planning", "Mental Stimulation"]
    },
    {
      icon: Home,
      title: "Homemaking",
      description: "Light housekeeping, meal preparation, laundry, and maintaining a clean, safe living environment.",
      image: servicesImage,
      features: ["Light Housekeeping", "Meal Preparation", "Laundry Services", "Shopping Assistance"]
    },
    {
      icon: Activity,
      title: "Rehabilitation",
      description: "Physical therapy assistance, exercise programs, and recovery support following illness or injury.",
      image: medicalCareImage,
      features: ["Physical Therapy", "Exercise Programs", "Recovery Support", "Strength Building"]
    },
    {
      icon: Clock,
      title: "24/7 Care",
      description: "Round-the-clock care services for clients who need continuous monitoring and assistance.",
      image: servicesImage,
      features: ["Overnight Care", "Emergency Response", "Continuous Monitoring", "Family Peace of Mind"]
    }
  ];

  const specialties = [
    { icon: Shield, title: "Alzheimer's & Dementia Care", description: "Specialized care for memory-related conditions" },
    { icon: Pill, title: "Chronic Disease Management", description: "Support for diabetes, heart disease, and other conditions" },
    { icon: Bath, title: "Post-Hospital Care", description: "Transitional care after hospital discharge" },
    { icon: Utensils, title: "Nutrition Support", description: "Meal planning and dietary assistance" }
  ];

  return (
    <section id="services" className="py-20 bg-soft-gray/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Comprehensive</span>{" "}
            <span className="text-secondary">Care Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide a full range of professional home care services tailored to meet your unique needs and ensure the highest quality of life.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-0 shadow-soft bg-background hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specialties */}
        <div className="bg-gradient-card rounded-2xl p-8 shadow-medium">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">Our Specialties</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-secondary/20 transition-colors duration-300">
                  <specialty.icon className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{specialty.title}</h4>
                <p className="text-sm text-muted-foreground">{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 text-white shadow-large">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-6 opacity-90">
              Let us create a personalized care plan for your loved one
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-50">
                Schedule Assessment
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Call: +91 9876543210
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;