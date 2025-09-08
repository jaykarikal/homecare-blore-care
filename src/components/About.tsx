import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  Users, 
  Clock, 
  Heart, 
  MapPin, 
  Phone,
  CheckCircle,
  Star
} from "lucide-react";
import servicesImage from "@/assets/services-image.jpg";

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Families Served", color: "text-primary" },
    { icon: Clock, number: "24/7", label: "Availability", color: "text-secondary" },
    { icon: Award, number: "5+", label: "Years Experience", color: "text-accent" },
    { icon: Star, number: "98%", label: "Satisfaction Rate", color: "text-primary" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every client with the love and respect they deserve, as if they were our own family members."
    },
    {
      icon: Award,
      title: "Professional Excellence",
      description: "Our certified caregivers undergo rigorous training and continuous education to provide the highest quality care."
    },
    {
      icon: Users,
      title: "Family-Centered Approach",
      description: "We work closely with families to create personalized care plans that meet individual needs and preferences."
    },
    {
      icon: CheckCircle,
      title: "Reliable Service",
      description: "Count on us for consistent, dependable care that gives you peace of mind knowing your loved one is in good hands."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Koramangala, Bangalore",
      text: "JunoNest has been a blessing for our family. Their caregiver helped my mother regain her independence after her hip surgery. The professionalism and kindness shown was exceptional - truly care with grace.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      location: "Indiranagar, Bangalore",
      text: "We couldn't have asked for better care for my father with Alzheimer's. The team is incredibly patient and skilled in handling his condition. Highly recommended!",
      rating: 5
    },
    {
      name: "Anjali Reddy",
      location: "Whitefield, Bangalore",
      text: "Professional, reliable, and caring. They helped us through a difficult time when my grandmother needed 24/7 care. The peace of mind they provided was invaluable.",
      rating: 5
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">About</span>{" "}
            <span className="text-secondary">JunoNest</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicated to providing exceptional home care services with grace and heart, enabling your loved ones to live comfortably and safely in their own homes.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Your Trusted Home Care Partner in Bangalore
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2019, JunoNest has been serving families across Bangalore with 
                compassionate, professional home care services rooted in grace and heart. We understand that there's no place 
                like home, and we're committed to helping your loved ones maintain their independence, 
                dignity, and quality of life in familiar surroundings.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of licensed nurses, certified caregivers, and support staff work together 
                to provide personalized care plans that address the unique needs of each client. 
                From medical care to companionship, we're here to support your family every step of the way with grace and compassion.
              </p>
            </div>

            {/* Service Areas */}
            <div className="bg-soft-gray/50 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                <MapPin className="w-5 h-5 text-primary mr-2" />
                Service Areas in Bangalore
              </h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                <div>• Koramangala</div>
                <div>• Indiranagar</div>
                <div>• Whitefield</div>
                <div>• HSR Layout</div>
                <div>• Jayanagar</div>
                <div>• Malleswaram</div>
                <div>• BTM Layout</div>
                <div>• Electronic City</div>
              </div>
            </div>

            <Button className="bg-gradient-accent border-0 hover:opacity-90 transition-opacity">
              <Phone className="w-4 h-4 mr-2" />
              Schedule Free Consultation
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-large">
              <img 
                src={servicesImage} 
                alt="Professional healthcare team providing quality home care services" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 border-0 shadow-soft hover:shadow-medium transition-shadow duration-300">
              <CardContent className="p-0">
                <div className={`w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">Our Core Values</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gradient-card rounded-2xl p-8 shadow-medium">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">What Families Say About JunoNest</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;