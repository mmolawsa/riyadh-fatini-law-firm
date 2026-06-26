import { useState } from 'react'
import './App.css'
import './index.css'

function App() {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar')

  const isArabic = language === 'ar'
  const dir = isArabic ? 'rtl' : 'ltr'

  const content = {
    ar: {
      nav: {
        home: 'الرئيسية',
        about: 'من نحن',
        services: 'الخدمات',
        contact: 'تواصل معنا',
      },
      hero: {
        title: 'مكتب المحامي رياض فتيني',
        subtitle: 'خدمات قانونية احترافية في جدة',
        cta: 'احجز استشارة',
      },
      about: {
        title: 'من نحن',
        description: 'مكتب متخصص في تقديم الخدمات القانونية والاستشارات الشرعية بأعلى مستويات الاحترافية والنزاهة.',
      },
      services: {
        title: 'خدماتنا',
        items: [
          { name: 'القضايا الجنائية', desc: 'الدفاع والمحاماة في القضايا الجنائية' },
          { name: 'قضايا المواريث', desc: 'تسوية المنازعات الإرثية' },
          { name: 'القضايا التجارية', desc: 'استشارات تجارية وعقود' },
        ],
      },
      contact: {
        title: 'تواصل معنا',
        phone: '+966556485000',
        email: 'info@lawyerriyadhfatini.com',
        location: 'جدة، المملكة العربية السعودية',
      },
      footer: 'جميع الحقوق محفوظة © 2024',
    },
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        contact: 'Contact',
      },
      hero: {
        title: 'Riyadh Fatini Law Firm',
        subtitle: 'Professional Legal Services in Jeddah',
        cta: 'Book Consultation',
      },
      about: {
        title: 'About Us',
        description: 'A specialized office providing legal services and consultations with the highest standards of professionalism and integrity.',
      },
      services: {
        title: 'Our Services',
        items: [
          { name: 'Criminal Cases', desc: 'Defense and legal representation in criminal cases' },
          { name: 'Inheritance Cases', desc: 'Settlement of inheritance disputes' },
          { name: 'Commercial Cases', desc: 'Commercial consultations and contracts' },
        ],
      },
      contact: {
        title: 'Contact Us',
        phone: '+966556485000',
        email: 'info@lawyerriyadhfatini.com',
        location: 'Jeddah, Saudi Arabia',
      },
      footer: 'All rights reserved © 2024',
    },
  }

  const t = content[language]

  return (
    <div dir={dir} className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900">{isArabic ? 'رياض فتيني' : 'Riyadh Fatini'}</h1>
          <div className="flex gap-6 items-center">
            <button onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')} className="px-3 py-1 bg-blue-600 text-white rounded">
              {language === 'ar' ? 'EN' : 'AR'}
            </button>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">{t.nav.contact}</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600">{t.nav.services}</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">{t.nav.about}</a>
            <a href="#home" className="text-gray-700 hover:text-blue-600">{t.nav.home}</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4">{t.hero.title}</h2>
          <p className="text-xl mb-8">{t.hero.subtitle}</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-lg text-lg">
            {t.hero.cta}
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-8 text-blue-900">{t.about.title}</h3>
          <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">{t.about.description}</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-blue-900">{t.services.title}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {t.services.items.map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h4 className="text-xl font-bold text-blue-900 mb-3">{service.name}</h4>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-blue-900">{t.contact.title}</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-bold text-lg mb-2">📞</h4>
              <p className="text-gray-700">{t.contact.phone}</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">📧</h4>
              <p className="text-gray-700">{t.contact.email}</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">📍</h4>
              <p className="text-gray-700">{t.contact.location}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 text-center">
        <p>{t.footer}</p>
      </footer>
    </div>
  )
}

export default App
