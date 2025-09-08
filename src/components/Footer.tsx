import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Medical Care",
    "Personal Care", 
    "Companionship",
    "Homemaking",
    "Rehabilitation",
    "24/7 Care"
  ];

  const serviceAreas = [
    "Koramangala",
    "Indiranagar", 
    "Whitefield",
    "HSR Layout",
    "Jayanagar",
    "Malleswaram"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/6f2622de-88fa-4a22-ad10-f2c22964c459.png" 
                alt="JunoNest Care Logo" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Providing compassionate, professional home care services across Bangalore with grace and heart. 
              Your loved ones deserve the best care in the comfort of their own home.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>info@junonest.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Bangalore, Karnataka</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#services"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all duration-200"
                >
                  All Services
                </a>
              </li>
              <li>
                <a 
                  href="#contact"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all duration-200"
                >
                  Free Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#services"
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <span className="text-sm opacity-90">{area}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <p className="text-sm opacity-90">And surrounding areas</p>
            </div>
          </div>
        </div>

        {/* Emergency Contact Banner */}
        <div className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h4 className="font-semibold text-accent">24/7 Emergency Care Available</h4>
              <p className="text-sm opacity-90">Call us anytime for urgent care needs</p>
            </div>
            <a 
              href="tel:+919876543210"
              className="mt-2 md:mt-0 bg-accent text-accent-foreground px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Call Now: +91 9876543210
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm opacity-90 mb-4 md:mb-0">
              © {currentYear} JunoNest Care Services. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm opacity-90 mr-2">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-primary-foreground/10">
            <div className="flex flex-col md:flex-row items-center justify-between text-xs opacity-80">
              <div className="flex flex-wrap gap-4 mb-2 md:mb-0">
                <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
                <a href="#" className="hover:opacity-100 transition-opacity">HIPAA Compliance</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Licensing</a>
              </div>
              <div>
                <span>Licensed Healthcare Provider | Registered in Karnataka</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;