export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Modern Kitchen Refresh',
      category: 'Interior',
      image: '🎨',
    },
    {
      id: 2,
      title: 'Office Building Exterior',
      category: 'Commercial',
      image: '🏢',
    },
    {
      id: 3,
      title: 'Home Exterior Transformation',
      category: 'Exterior',
      image: '🏠',
    },
    {
      id: 4,
      title: 'Cabinet Refinishing Project',
      category: 'Specialty',
      image: '🛠️',
    },
    {
      id: 5,
      title: 'Living Room Accent Wall',
      category: 'Interior',
      image: '🎨',
    },
    {
      id: 6,
      title: 'Deck Staining & Sealing',
      category: 'Exterior',
      image: '🌳',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Recent Projects</h2>
          <p className="text-xl text-gray-600">See the transformation we can bring to your space</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gray-200 h-48 flex items-center justify-center text-5xl">
                {project.image}
              </div>
              <div className="p-4">
                <p className="text-sm text-blue-600 font-semibold mb-2">{project.category}</p>
                <h3 className="text-lg font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-primary">View Full Portfolio</button>
        </div>
      </div>
    </section>
  );
}
