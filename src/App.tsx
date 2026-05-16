/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { 
  Phone, 
  Instagram, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  ChevronRight, 
  CheckCircle2, 
  Star,
  Users,
  Shield,
  Zap,
  Stethoscope,
  Activity,
  Smile,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const clinicalTeam = [
  {
    name: "Dra. Luara Gomes",
    role: "Cirurgiã-Dentista",
    cr: "CRO-RN 6185",
    specialties: ["Estética Dental", "Reabilitação Oral"],
    image: "https://i.postimg.cc/g2jWcZtC/Whats-App-Image-2026-05-14-at-18-40-26-(7).jpg"
  },
  {
    name: "Dr. Lucas Magalhães",
    role: "Cirurgiã-Dentista",
    cr: "CRO-RN 7140",
    specialties: ["Implantes", "Cirurgia Oral"],
    image: "https://i.postimg.cc/T1KVYQmt/Whats-App-Image-2026-05-14-at-18-40-26-(8).jpg"
  },
  {
    name: "Dra. Lele (Tia Lele)",
    role: "Odontopediatra",
    specialties: ["Odontopediatria", "Cuidado Infantil"],
    image: "https://i.postimg.cc/8PQhRdgx/Whats-App-Image-2026-05-16-at-10-40-29.jpg"
  }
];

const multidisciplinaryTeam = [
  {
    name: "Geyza Brito",
    role: "Nutricionista",
    cr: "CRN/46858/P",
    specialties: ["Nutrição Comportamental", "Abordagem para Jovens e Adultos"],
    image: "https://i.postimg.cc/5NftWpc5/Whats-App-Image-2026-05-16-at-10-55-53.jpg"
  },
  {
    name: "Jessé Figueirêdo",
    role: "Nutricionista",
    cr: "CRN: 20120, 6ª região",
    specialties: ["Nutrição Esportiva", "Hipertrofia", "Emagrecimento"],
    image: "https://i.postimg.cc/HLNfBWmK/Whats-App-Image-2026-05-16-at-11-09-58.jpg"
  },
  {
    name: "Verônica Dantas",
    role: "Enfermeira",
    cr: "COREN-RN 472524",
    specialties: ["Enfermagem Dermatológica", "Laserterapia", "Tratamento de Feridas"],
    image: "https://i.postimg.cc/JhsFDwXp/Whats-App-Image-2026-05-16-at-11-11-18.jpg"
  },
  {
    name: "Letícia Aciole",
    role: "Fisioterapeuta",
    cr: "CREFITO 428701-F",
    specialties: ["Reabilitação Ortopédica", "Disfunções da Coluna", "Fisioterapia Geriátrica", "Liberação Miofascial"],
    image: "https://i.postimg.cc/qqpqMxFC/Whats-App-Image-2026-05-16-at-11-09-59-(1).jpg"
  },
  {
    name: "Ana Luísa",
    role: "Enfermeira",
    specialties: ["Estética Facial e Corporal", "Furo Humanizado"],
    image: "https://i.postimg.cc/G3vgWxrS/Whats-App-Image-2026-05-16-at-11-37-22.jpg"
  }
];

const services = [
  { title: "Limpeza", icon: <Smile className="w-6 h-6" /> },
  { title: "Extração", icon: <Activity className="w-6 h-6" /> },
  { title: "Ortodontia", icon: <CheckCircle2 className="w-6 h-6" /> },
  { title: "Prótese Dentária", icon: <Zap className="w-6 h-6" /> },
  { title: "Clareamento", icon: <Star className="w-6 h-6" /> },
  { title: "Tratamento de Canal", icon: <Stethoscope className="w-6 h-6" /> },
  { title: "Gengivoplastia", icon: <Heart className="w-6 h-6" /> },
  { title: "Restauração", icon: <Shield className="w-6 h-6" /> },
  { title: "Facetas", icon: <Users className="w-6 h-6" /> }
];

const instagramHandle = "elloodontologia"; // Handle placeholder based on clinic name

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Selecione um serviço'
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de solicitar um agendamento.%0A%0A*Nome:* ${formData.name}%0A*WhatsApp:* ${formData.phone}%0A*Serviço:* ${formData.service}`;
    const whatsappUrl = `https://wa.me/5584999649394?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-primary selection:text-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-gray-100 text-primary' : 'bg-transparent py-8 text-white'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between lg:justify-center items-center relative">
          {/* Menu Esquerda */}
          <div className="hidden lg:flex items-center gap-8 flex-1">
            <a href="#inicio" className="nav-link">Início</a>
            <a href="#sobre" className="nav-link">Sobre</a>
          </div>

          {/* Logo Centralizado */}
          <div className="flex-shrink-0 flex justify-center items-center gap-4 group cursor-pointer lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <div className="h-[1px] w-4 md:w-12 bg-current opacity-30 transition-all group-hover:w-16"></div>
            <div className="text-xl md:text-3xl font-display font-black tracking-[-0.05em] uppercase whitespace-nowrap">
              ELLO<span className="text-accent">.</span>
            </div>
            <div className="h-[1px] w-4 md:w-12 bg-current opacity-30 transition-all group-hover:w-16"></div>
          </div>
          
          {/* Menu Direita */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-end">
            <a href="#servicos" className="nav-link">Serviços</a>
            <a href="#contato" className="nav-link">Contato</a>
            <button className={`${scrolled ? 'bg-primary text-white' : 'bg-white text-primary'} px-6 py-2 text-[10px] uppercase tracking-[0.2em] font-bold transition-all hover:bg-accent hover:text-white`}>
              Agendar
            </button>
          </div>

          <button className="lg:hidden relative z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center gap-10 text-white text-xl font-display uppercase tracking-widest"
            >
              <a href="#inicio" onClick={() => setIsMenuOpen(false)}>Início</a>
              <a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a>
              <a href="#equipe" onClick={() => setIsMenuOpen(false)}>Equipe</a>
              <a href="#servicos" onClick={() => setIsMenuOpen(false)}>Serviços</a>
              <a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a>
              <button className="btn-primary" style={{ backgroundColor: 'white', color: '#002B5B' }}>WhatsApp</button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section - Refactored for Premium look */}
      <section id="inicio" className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-primary">
        {/* Background Image with Parallax-like effect overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28a3a7c4d409?q=80&w=2600&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay scale-105"
            alt="Consultório"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ opacity: 0, letterSpacing: '0.1em' }}
              animate={{ opacity: 1, letterSpacing: '0.4em' }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-accent font-semibold uppercase text-xs mb-6 block"
            >
              Excelência em cada detalhe
            </motion.span>
            
            <h1 className="font-serif text-4xl md:text-7xl text-white leading-tight mb-8 tracking-tight">
              A harmonia do seu <span className="italic font-light text-white/90">sorriso</span> começa aqui.
            </h1>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
              className="h-px w-24 bg-accent mx-auto mb-10"
            />

            <p className="text-lg md:text-xl text-white/70 mb-12 font-light max-w-2xl mx-auto leading-relaxed uppercase tracking-widest text-[13px]">
              Especialistas em Odontologia Estética e Integrada em Currais Novos - RN.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-white text-primary hover:bg-accent hover:text-white px-12 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500">
                Agendar Consulta
              </button>
              <a href="#sobre" className="text-white/60 hover:text-white text-xs font-bold uppercase tracking-[0.2em] transition-all border-b border-white/20 pb-1 hover:border-white">
                Descubra a ELLO
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        >
          <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent"></div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop" 
                  className="w-full h-full object-cover"
                  alt="Clínica"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-full -z-0"></div>
            </motion.div>
            
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">Excelência e Cuidado</span>
              <h2 className="section-title mt-4">Referência em Odontologia Integrada</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Nascemos em Currais Novos com a missão de transformar sorrisos através de uma abordagem humanizada e multidisciplinar. Nossa estrutura moderna foi planejada para oferecer o máximo conforto e segurança em cada procedimento.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Missão", text: "Proporcionar saúde e autoestima com excelência clínica." },
                  { title: "Visão", text: "Ser a maior referência em odontologia estética do RN." },
                  { title: "Valores", text: "Ética, transparência, inovação e foco no paciente." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">{item.title}</h4>
                      <p className="text-gray-500">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipe" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.span {...fadeIn} className="text-accent font-bold tracking-widest uppercase text-sm">Nossa Equipe</motion.span>
            <motion.h2 {...fadeIn} className="section-title mt-4">Especialistas à sua disposição</motion.h2>
          </div>

          <h3 className="text-2xl font-display font-bold text-primary mb-10 border-l-4 border-accent pl-4">Corpo Clínico Odontológico</h3>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16"
          >
            {clinicalTeam.map((member, i) => (
              <motion.div key={i} variants={fadeIn} className="group">
                <div className="aspect-[4/5] overflow-hidden mb-8 relative border border-primary/5">
                  <img src={member.image} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" alt={member.name} referrerPolicy="no-referrer" />
                  <div className="absolute inset-x-0 bottom-0 py-6 px-8 bg-primary/90 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                     <p className="text-white text-[10px] uppercase tracking-[0.2em]">{member.specialties.join(' • ')}</p>
                  </div>
                </div>
                <h4 className="text-xl font-serif text-primary mb-1">{member.name}</h4>
                <div className="flex items-center gap-3">
                  <p className="text-accent font-bold text-[10px] uppercase tracking-widest">{member.role}</p>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <p className="text-gray-400 text-[10px] uppercase tracking-tighter">{member.cr}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <h3 className="text-2xl font-display font-bold text-primary mb-10 border-l-4 border-accent pl-4">Equipe Multidisciplinar</h3>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {multidisciplinaryTeam.map((member, i) => (
              <motion.div key={i} variants={fadeIn} className="bg-cream p-8 rounded-none border border-primary/5 hover:border-accent/30 transition-all hover:shadow-2xl flex flex-col h-full">
                <div className="flex gap-6 items-center mb-6">
                  <div className="w-28 h-28 rounded-full overflow-hidden flex-shrink-0 border border-primary/10">
                    <img src={member.image} className="w-full h-full object-cover" alt={member.name} referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary leading-tight">{member.name}</h4>
                    <p className="text-accent text-xs font-semibold uppercase tracking-wider mt-1">{member.role}</p>
                    <p className="text-gray-400 text-[10px] uppercase tracking-tighter">{member.cr}</p>
                  </div>
                </div>
                <div className="mt-auto pt-6 border-t border-primary/10">
                  <p className="text-xs text-gray-500 leading-relaxed italic">
                    {member.specialties.join(' • ')}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-accent font-bold tracking-widest uppercase text-sm">Serviços Completos</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 leading-tight">Soluções para o seu sorriso e bem-estar</h2>
            </div>
            <button className="btn-primary">Ver todos os tratamentos</button>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10"
          >
            {services.map((service, i) => (
              <motion.div 
                key={i} 
                variants={fadeIn}
                className="p-12 border-b border-r border-white/10 hover:bg-white/5 transition-all group flex flex-col justify-center items-center text-center gap-6 group"
              >
                <div className="w-16 h-16 bg-white/5 text-accent flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </div>
                <h4 className="text-xl font-display font-medium uppercase tracking-[0.2em]">{service.title}</h4>
                <div className="w-8 h-px bg-accent/30 group-hover:w-16 transition-all duration-500"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { icon: <Users />, title: "Atendimento Humanizado", desc: "Cuidado focado nas suas necessidades reais." },
              { icon: <Zap />, title: "Tecnologia Moderna", desc: "Equipamentos de última geração para melhores resultados." },
              { icon: <Activity />, title: "Estética Avançada", desc: "Harmonização de sorrisos com precisão e arte." },
            ].map((diff, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="text-center p-8">
                <div className="w-20 h-20 bg-cream text-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                  {diff.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{diff.title}</h4>
                <p className="text-gray-500">{diff.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-bold tracking-widest uppercase text-xs">Nosso Espaço</span>
            <h2 className="section-title mt-4 italic">Conforto e Tecnologia</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px] lg:auto-rows-[300px]">
            <div className="col-span-2 row-span-2 overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Fachada" referrerPolicy="no-referrer" />
            </div>
            <div className="overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Consultório" referrerPolicy="no-referrer" />
            </div>
            <div className="overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Equipamento" referrerPolicy="no-referrer" />
            </div>
            <div className="col-span-2 overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Recepção" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-primary rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl mb-16">
            <div className="p-12 lg:p-20 text-white lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Vamos conversar?</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-center">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-accent" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">Localização</h5>
                    <p className="text-white/60">Rua Dona Germana, Nº58, Currais Novos - RN</p>
                  </div>
                </div>
                <div className="flex gap-6 items-center">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-accent" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">WhatsApp</h5>
                    <p className="text-white/60">(84) 99964-9394</p>
                  </div>
                </div>
                <div className="flex gap-6 items-center">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-accent" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">Horários</h5>
                    <p className="text-white/60">Seg - Sex: 08:00 às 18:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 flex gap-4">
                <a href={`https://instagram.com/${instagramHandle}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Instagram />
                </a>
                <a href="https://wa.me/5584999649394" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Phone />
                </a>
              </div>
            </div>

            <div className="bg-white p-12 lg:p-20 lg:w-1/2">
              <h3 className="text-2xl font-bold text-primary mb-8">Solicitar Agendamento</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent outline-none" 
                    placeholder="Digite seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent outline-none" 
                    placeholder="(84) 99964-9394"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Qual serviço procura?</label>
                  <select 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent outline-none bg-white"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option disabled>Selecione um serviço</option>
                    {services.map((s, i) => <option key={i} value={s.title}>{s.title}</option>)}
                    <option value="Outro Especialista">Outro Especialista</option>
                  </select>
                </div>
                <button type="submit" className="btn-primary w-full py-4 text-lg">Enviar Mensagem</button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full h-[500px] rounded-[3rem] overflow-hidden shadow-2xl relative group border-4 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7397750106203!2d-36.51694292418386!3d-6.258169161273932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7adb2f01f01c901%3A0xc331ed866164284b!2sR.%20Dona%20Germana%2C%2058%2C%20Currais%20Novos%20-%20RN%2C%2059380-000!5e0!3m2!1spt-BR!2sbr!4v1715870000000!5m2!1spt-BR!2sbr" 
              className="w-full h-full border-0 grayscale active:grayscale-0 transition-all duration-700" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute top-6 left-6 pointer-events-none">
              <div className="bg-primary px-6 py-3 rounded-full text-white text-xs font-bold uppercase tracking-widest shadow-xl border border-white/20">
                Nossa Localização
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Floating Button */}
      <a 
        href="https://wa.me/5584999649394" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50 hover:bg-green-600 transition-transform hover:scale-110 active:scale-95 group"
      >
        <Phone className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-white text-green-600 px-4 py-2 rounded-lg shadow-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Fale Conosco
        </span>
      </a>

      {/* Footer */}
      <footer className="bg-primary text-white py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="text-3xl font-display font-bold tracking-tighter mb-6">
                ELLO<span className="text-accent">.</span>
              </div>
              <p className="text-white/60 max-w-md text-lg leading-relaxed mb-8">
                Liderando a nova era da odontologia integrada e multidisciplinar em Currais Novos. Sua saúde e beleza em um só lugar.
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-xl">Links</h5>
              <ul className="space-y-4 text-white/60">
                <li><a href="#inicio" className="hover:text-accent font-medium">Início</a></li>
                <li><a href="#servicos" className="hover:text-accent font-medium">Serviços</a></li>
                <li><a href="#equipe" className="hover:text-accent font-medium">Nossa Equipe</a></li>
                <li><a href="#sobre" className="hover:text-accent font-medium">Sobre a Clínica</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-xl">Redes Sociais</h5>
              <div className="flex gap-4">
                <a href={`https://instagram.com/${instagramHandle}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Instagram />
                </a>
                <a href="https://wa.me/5584999649394" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Phone />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
            <p>© 2026 ELLO Odontologia Integrada. Todos os direitos reservados.</p>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex gap-8">
                <a href="#" className="hover:text-white">Privacidade</a>
                <a href="#" className="hover:text-white">Termos</a>
              </div>
              <p>Desenvolvido por <a href="https://eudoxmedia.com.br" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent font-medium">EudoxMedia</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
