export default function ServiceCard({ service }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
      <button className="mt-4 text-blue-600 font-semibold hover:text-blue-800">
        Learn More →
      </button>
    </div>
  );
}
