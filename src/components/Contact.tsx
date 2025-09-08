import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Calendar,
  Shield
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Thank you for your inquiry!",
      description: "We'll contact you within 24 hours to discuss your care needs.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 9876543210",
      subDetails: "24/7 Emergency Line",
      action: "tel:+919876543210"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@junonest.com",
      subDetails: "We respond within 4 hours",
      action: "mailto:info@junonest.com"
    },
    {
      icon: MapPin,
      title: "Service Areas",
      details: "All of Bangalore",
      subDetails: "Including surrounding areas",
      action: null
    },
    {
      icon: Clock,
      title: "Hours",
      details: "24/7 Care Available",
      subDetails: "Office: Mon-Fri 9AM-6PM",
      action: null
    }
  ];

  const services = [
    "Medical Care",
    "Personal Care",
    "Companionship",
    "Homemaking",
    "Rehabilitation",
    "24/7 Care",
    "Other"
  ];

  return (
    <section id="contact" className="py-20 bg-soft-gray/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Get In</span>{" "}
            <span className="text-secondary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start caring for your loved one? Contact us today for a free consultation and personalized care plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      {info.action ? (
                        <a 
                          href={info.action}
                          className="text-primary hover:text-primary/80 transition-colors font-medium"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <div className="text-primary font-medium">{info.details}</div>
                      )}
                      <div className="text-sm text-muted-foreground">{info.subDetails}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-soft bg-gradient-hero text-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Need Immediate Care?
                </h3>
                <p className="text-white/90 mb-4 text-sm">
                  Call us now for same-day assessment and care coordination.
                </p>
                <Button 
                  variant="secondary" 
                  className="w-full bg-white text-primary hover:bg-gray-50"
                  onClick={() => window.open('tel:+919876543210')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Shield className="w-6 h-6 text-secondary" />
                  <h4 className="font-semibold text-foreground">Licensed & Insured</h4>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>✓ State Licensed Healthcare Professionals</div>
                  <div>✓ Background Checked Caregivers</div>
                  <div>✓ Fully Insured and Bonded</div>
                  <div>✓ HIPAA Compliant</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <Send className="w-5 h-5 mr-2" />
                  Request Free Consultation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="border-border focus:border-primary focus:ring-primary/20"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-border focus:border-primary focus:ring-primary/20"
                        placeholder="+91 9876543210"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="border-border focus:border-primary focus:ring-primary/20"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-border rounded-md focus:border-primary focus:ring-primary/20 focus:outline-none"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="border-border focus:border-primary focus:ring-primary/20 min-h-[120px]"
                      placeholder="Tell us about your specific care needs, preferred schedule, or any questions you have..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-accent border-0 hover:opacity-90 transition-opacity text-lg py-6"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We'll respond to your inquiry within 24 hours and schedule your free consultation.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center">
          <h3 className="font-bold text-destructive mb-2">Medical Emergency?</h3>
          <p className="text-muted-foreground mb-4">
            For medical emergencies, please call emergency services immediately or contact your physician.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="destructive" onClick={() => window.open('tel:108')}>
              Emergency Services: 108
            </Button>
            <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive hover:text-white">
              Contact Your Doctor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;