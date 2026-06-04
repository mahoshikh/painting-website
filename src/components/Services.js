import ServiceCard from './ServiceCard';

const services = [
  {
    id: 1,
    title: 'Interior Painting',
    description: 'Professional interior painting for homes and offices. We handle everything from accent walls to complete room transformations.',
    icon: '🏠',
  },
  {
    id: 2,
    title: 'Exterior Painting',
    description: 'Protect and beautify your property with our exterior painting services. Weather-resistant finishes and expert application.',
    icon: '🏢',
  },
  {
    id: 3,
    title: 'Cabinet Refinishing',
    description: 'Give your kitchen or bathroom a fresh look. We strip, sand, and paint cabinets to perfection.',
    icon: '🛠️',
  },
  {
    id: 4,
    title: 'Commercial Painting',
    description: 'Large-scale painting projects for businesses. Minimal disruption, maximum professionalism.',
    icon: '🏗️',
  },
  {
    id: 5,
    title: 'Specialty Finishes',
    description: 'Faux finishes, murals, textured coatings, and more. Let us bring your creative vision to life.',
    icon: '🎨',
  },
  {
    id: 6,
    title: 'Deck & Stain',
    description: 'Protect and enhance your outdoor spaces with quality staining and sealing services.',
    icon: '🌳',
  },
];

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive painting solutions for every project</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
