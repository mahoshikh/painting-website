'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">Get Your Free Quote</h1>
          <p className="text-xl text-blue-100">Contact us today for a professional assessment</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-bold text-lg mb-2">📞 Phone</p>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
                <div>
                  <p className="font-bold text-lg mb-2">📧 Email</p>
                  <p className="text-gray-600">info@artisanpainters.com</p>
                </div>
                <div>
                  <p className="font-bold text-lg mb-2">📍 Address</p>
                  <p className="text-gray-600">123 Main Street<br/>City, State 12345</p>
                </div>
                <div>
                  <p className="font-bold text-lg mb-2">⏰ Hours</p>
                  <p className="text-gray-600">Mon - Fri: 8am - 6pm<br/>Sat: 9am - 4pm<br/>Sun: Closed</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>
              
              <div>
                <label className="block font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>
              
              <div>
                <label className="block font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>
              
              <div>
                <label className="block font-semibold mb-2">Service Interested *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                >
                  <option value="">Select a service</option>
                  <option value="interior">Interior Painting</option>
                  <option value="exterior">Exterior Painting</option>
                  <option value="cabinet">Cabinet Refinishing</option>
                  <option value="commercial">Commercial Painting</option>
                  <option value="specialty">Specialty Finishes</option>
                </select>
              </div>
              
              <div>
                <label className="block font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Send Quote Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
