import React from 'react';
import { Download, ShieldCheck, Mail, CheckCircle, Eye, Pencil, Trash, Ban } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-brand-500 font-bold text-xs uppercase tracking-wider mb-4">
              <ShieldCheck size={16} />
              <span>Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Política de Privacidad
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-8">
              Transparencia y confianza son la base de nuestras celebraciones. Aquí te explicamos cómo cuidamos tus datos.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-slate-100 pt-8">
              <span className="text-sm text-slate-400 font-medium">
                Última actualización: 20 de enero de 2026
              </span>
              <button className="inline-flex items-center gap-2 bg-brand-400 hover:bg-brand-500 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg text-sm">
                <Download size={18} />
                Descargar PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar / Table of Contents */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              <div className="hidden lg:block">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Contenido</h3>
                <nav className="space-y-1">
                  {[
                    { id: 'responsable', label: '1. Responsable' },
                    { id: 'informacion', label: '2. Información' },
                    { id: 'finalidad', label: '3. Finalidad' },
                    { id: 'legitimacion', label: '4. Legitimación' },
                    { id: 'destinatarios', label: '5. Destinatarios' },
                    { id: 'derechos', label: '6. Derechos' },
                  ].map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${index === 0 ? 'bg-orange-50 text-brand-600' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Support Card */}
              <div className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                <h4 className="font-bold text-slate-900 mb-2">¿Tienes dudas?</h4>
                <p className="text-sm text-slate-600 mb-4">
                  Nuestro equipo legal está disponible para ayudarte.
                </p>
                <a href="mailto:info@stylefestejos.com" className="inline-flex items-center text-brand-600 text-sm font-bold hover:text-brand-700">
                  Contactar Soporte &rarr;
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-grow space-y-8">

            {/* Section 1 */}
            <section id="responsable" className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-900 font-bold text-lg">1</span>
                <h2 className="text-2xl font-bold text-slate-900">Responsable del Tratamiento</h2>
              </div>
              <div className="prose prose-slate max-w-none text-slate-600">
                <p className="mb-4">
                  <strong className="text-slate-900">Style Festejos S.L.</strong>, con domicilio social en CARACAS, y NIF B-12345678, es el responsable del tratamiento de sus datos personales. Nos comprometemos a proteger su privacidad y garantizar el cumplimiento de la normativa vigente en materia de protección de datos (RGPD y LOPDGDD).
                </p>
                <p>
                  Para cualquier consulta relacionada con la protección de datos, puede ponerse en contacto con nuestro Delegado de Protección de Datos a través del correo electrónico: <a href="mailto:info@stylefestejos.com" className="text-brand-500 font-medium hover:underline">info@stylefestejos.com</a>.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="informacion" className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-900 font-bold text-lg">2</span>
                <h2 className="text-2xl font-bold text-slate-900">Información que Recopilamos</h2>
              </div>
              <p className="text-slate-600 mb-6">
                Recopilamos la información necesaria para ofrecerle nuestros servicios de planificación de eventos. Esto puede incluir:
              </p>
              <div className="space-y-4">
                {[
                  { title: "Datos identificativos", desc: "Nombre, apellidos, DNI." },
                  { title: "Datos de contacto", desc: "Dirección postal, correo electrónico, número de teléfono." },
                  { title: "Datos del evento", desc: "Fecha, tipo de celebración, número de invitados, preferencias de catering y entretenimiento." },
                  { title: "Datos económicos", desc: "Información necesaria para la facturación y el pago de los servicios contratados." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="mt-1 flex-shrink-0 text-brand-400">
                      <CheckCircle size={20} fill="currentColor" className="text-white" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block">{item.title}:</strong>
                      <span className="text-slate-600">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 */}
            <section id="finalidad" className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-900 font-bold text-lg">3</span>
                <h2 className="text-2xl font-bold text-slate-900">Finalidad del Tratamiento</h2>
              </div>
              <p className="text-slate-600 mb-8">Tratamos sus datos personales con las siguientes finalidades:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Gestión de Servicios", desc: "Para gestionar la planificación y ejecución del evento contratado, incluyendo la coordinación con proveedores." },
                  { title: "Atención al Cliente", desc: "Para atender sus consultas, solicitudes o reclamaciones a través de nuestros canales de contacto." },
                  { title: "Comunicaciones", desc: "Para enviarle información sobre novedades, ofertas o eventos relacionados con Style Festejos, siempre que nos haya dado su consentimiento." },
                  { title: "Cumplimiento Legal", desc: "Para cumplir con nuestras obligaciones legales, fiscales y contables." }
                ].map((card, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-2xl p-6 hover:bg-orange-50 transition-colors duration-300">
                    <h3 className="font-bold text-slate-900 mb-2">{card.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4 */}
            <section id="legitimacion" className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-900 font-bold text-lg">4</span>
                <h2 className="text-2xl font-bold text-slate-900">Legitimación</h2>
              </div>
              <div className="text-slate-600 leading-relaxed">
                <p>
                  La base legal para el tratamiento de sus datos es la ejecución del contrato de prestación de servicios en el que usted es parte. En el caso del envío de comunicaciones comerciales, la base legal es su consentimiento, que puede retirar en cualquier momento. Para el cumplimiento de obligaciones legales, el tratamiento se basa en la normativa aplicable.
                </p>
              </div>
            </section>

             {/* Section 5 */}
             <section id="destinatarios" className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-900 font-bold text-lg">5</span>
                <h2 className="text-2xl font-bold text-slate-900">Destinatarios</h2>
              </div>
              <p className="text-slate-600 mb-6">
                Sus datos pueden ser comunicados a los siguientes destinatarios, siempre que sea necesario para la correcta prestación del servicio:
              </p>
              <div className="flex flex-wrap gap-3">
                {['Proveedores de catering', 'Empresas de animación', 'Servicios de transporte', 'Asesoría fiscal y contable', 'Administraciones públicas'].map((tag, idx) => (
                    <span key={idx} className="px-4 py-2 bg-slate-50 text-slate-700 font-medium rounded-lg border border-slate-200">
                        {tag}
                    </span>
                ))}
              </div>
            </section>

            {/* Section 6 */}
            <section id="derechos" className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-900 font-bold text-lg">6</span>
                <h2 className="text-2xl font-bold text-slate-900">Derechos del Usuario</h2>
              </div>
              <p className="text-slate-600 mb-8">
                Como titular de los datos, usted tiene los siguientes derechos:
              </p>

              <div className="space-y-6">
                {[
                  { icon: Eye, title: "Acceso", desc: "Consultar qué datos personales tenemos sobre usted." },
                  { icon: Pencil, title: "Rectificación", desc: "Modificar datos inexactos o incompletos." },
                  { icon: Trash, title: "Supresión", desc: "Solicitar la eliminación de sus datos cuando ya no sean necesarios." },
                  { icon: Ban, title: "Oposición", desc: "Oponerse al tratamiento de sus datos en determinadas circunstancias." },
                ].map((right, idx) => (
                  <div key={idx} className="flex gap-5 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-brand-500">
                      <right.icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">{right.title}</h3>
                      <p className="text-slate-600 mt-1">{right.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-slate-100">
                <p className="text-sm text-slate-500">
                  Para ejercer estos derechos, envíe una solicitud a <span className="font-bold text-brand-500">info@stylefestejos.com</span> acompañando una copia de su DNI.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;