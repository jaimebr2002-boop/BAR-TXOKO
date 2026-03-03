import React, { useState } from 'react';
import { Star, MapPin, Clock, Phone, Instagram, Facebook, Twitter, Quote, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Menu as MenuIcon, X } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center">
      <div className="text-gold font-serif text-3xl italic tracking-wider z-50 relative">
        Bar Txoko
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8 text-sm tracking-widest uppercase">
        <a href="#inicio" className="text-white hover:text-gold transition-colors">Inicio</a>
        <a href="#nosotros" className="text-white hover:text-gold transition-colors">Nosotros</a>
        <a href="#carta" className="text-white hover:text-gold transition-colors">Carta</a>
        <a href="#resenas" className="text-white hover:text-gold transition-colors">Reseñas</a>
        <a href="#visitanos" className="text-white hover:text-gold transition-colors">Visítanos</a>
        <a href="#reserva" className="border border-gold text-gold px-6 py-2 hover:bg-gold hover:text-darker transition-colors">
          RESERVAR
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white z-50 relative"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-darker flex flex-col items-center justify-center space-y-8 text-lg tracking-widest uppercase z-40">
          <a href="#inicio" onClick={() => setIsOpen(false)} className="text-white hover:text-gold transition-colors">Inicio</a>
          <a href="#nosotros" onClick={() => setIsOpen(false)} className="text-white hover:text-gold transition-colors">Nosotros</a>
          <a href="#carta" onClick={() => setIsOpen(false)} className="text-white hover:text-gold transition-colors">Carta</a>
          <a href="#resenas" onClick={() => setIsOpen(false)} className="text-white hover:text-gold transition-colors">Reseñas</a>
          <a href="#visitanos" onClick={() => setIsOpen(false)} className="text-white hover:text-gold transition-colors">Visítanos</a>
          <a href="#reserva" onClick={() => setIsOpen(false)} className="border border-gold text-gold px-8 py-3 hover:bg-gold hover:text-darker transition-colors mt-4">
            RESERVAR
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url("https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772556732/Txoko-desde1963_asfnju.jpg")',
          y
        }}
      >
        <div className="absolute inset-0 bg-darker/80"></div>
      </motion.div>
      
      <motion.div 
        className="relative z-10 max-w-4xl px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="font-serif text-7xl md:text-9xl text-white mb-4">Bar Txoko</h1>
        <div className="flex flex-col items-center justify-center space-y-2 mb-10">
          <p className="font-serif italic text-gold text-2xl md:text-4xl">Desde 1920</p>
          <p className="text-gray-text tracking-widest uppercase text-sm md:text-base">PTV – De Pamplona de Toda la Vida</p>
        </div>
        <p className="text-white/80 mb-10 italic font-serif text-lg">En el corazón de Pamplona, en la mítica Plaza del Castillo.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#carta" className="border border-white text-white px-10 py-3 tracking-widest text-sm hover:bg-white hover:text-darker transition-colors w-full sm:w-auto text-center">
            VER CARTA
          </a>
          <a href="#reserva" className="bg-gold text-darker px-10 py-3 tracking-widest text-sm font-medium hover:bg-gold-hover transition-colors w-full sm:w-auto text-center">
            RESERVAR MESA
          </a>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => (
  <section id="nosotros" className="py-24 px-8 md:px-16 lg:px-24 bg-dark overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h4 className="font-serif italic text-gold text-xl mb-2">Nuestra Historia</h4>
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">El auténtico PTV</h2>
        
        <p className="text-gray-text mb-6 leading-relaxed">
          Abiertos desde <strong className="text-white font-normal">1920</strong>, en Bar Txoko somos el concepto vivo de <em>"Pamplona de Toda la Vida"</em> (PTV). Nuestra historia está intrínsecamente ligada a las fiestas de San Fermín y al latir diario de la Plaza del Castillo.
        </p>
        
        <p className="text-gray-text mb-6 leading-relaxed">
          Nuestra histórica terraza ha sido punto de encuentro de generaciones. Fue aquí donde el mismísimo <strong className="text-white font-normal">Ernest Hemingway</strong> se convirtió en un visitante habitual tras las corridas de toros, popularizando su peculiar y famoso pedido: un <em className="text-gold">"batido de vainilla con cognac"</em>.
        </p>

        <p className="text-gray-text mb-10 leading-relaxed">
          Una tradición que ha trascendido décadas y que hoy en día sigue atrayendo a turistas americanos y curiosos de todo el mundo que buscan revivir ese pedazo de historia.
        </p>
        
        <div className="border-l-2 border-gold pl-8 py-2">
          <p className="text-white text-lg italic font-serif">
            "Tradición, autenticidad y cultura local. El punto de encuentro indiscutible en el corazón de Pamplona."
          </p>
        </div>
      </motion.div>
      
      <motion.div 
        className="relative h-[600px]"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772555829/96754705_1687181084738980_2208646722484174848_n_iqxcpa.jpg" 
          alt="Bar Txoko Histórico" 
          className="w-full h-full object-cover grayscale-[40%] brightness-75"
        />
      </motion.div>
    </div>
  </section>
);

const MenuItem = ({ title, price, description }: { title: string, price?: string, description?: string }) => (
  <div className="mb-6">
    <div className="flex justify-between items-baseline mb-1 border-b border-white/10 pb-1">
      <h4 className="text-white text-base md:text-lg leading-snug pr-4">{title}</h4>
      {price && <span className="text-gold font-serif whitespace-nowrap ml-4">{price}</span>}
    </div>
    {description && <p className="text-gray-text text-sm italic mt-1">{description}</p>}
  </div>
);

const MenuSection = ({ title, items, intro, children }: { title: string, items?: any[], intro?: string, children?: React.ReactNode }) => (
  <div className="mb-12">
    <h3 className="text-gold font-serif text-2xl uppercase tracking-widest mb-2 border-l-4 border-gold pl-4">{title}</h3>
    {intro && <p className="text-gray-text italic mb-6 text-sm">{intro}</p>}
    {items && items.length > 0 && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 mt-6">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </div>
    )}
    {children}
  </div>
);

const DrinkTags = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-2 mt-4">
    {items.map((item, idx) => (
      <span key={idx} className="text-gray-text text-sm border border-white/10 px-3 py-1 rounded-full bg-darker/50">
        {item}
      </span>
    ))}
  </div>
);

const Menu = () => {
  const [activeTab, setActiveTab] = useState<'pintxos' | 'comida' | 'bebidas' | 'galeria'>('comida');

  return (
    <section id="carta" className="py-24 px-8 md:px-16 lg:px-24 bg-darker overflow-hidden">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <h4 className="font-serif italic text-gold text-xl mb-2">Nuestra Oferta</h4>
          <h2 className="font-serif text-4xl md:text-5xl text-white">La Carta</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16 border-b border-white/10 pb-4">
          <button 
            onClick={() => setActiveTab('pintxos')}
            className={`px-8 py-3 font-serif text-xl tracking-wider transition-all ${activeTab === 'pintxos' ? 'text-darker bg-gold' : 'text-white hover:text-gold border border-white/20'}`}
          >
            Pintxos
          </button>
          <button 
            onClick={() => setActiveTab('comida')}
            className={`px-8 py-3 font-serif text-xl tracking-wider transition-all ${activeTab === 'comida' ? 'text-darker bg-gold' : 'text-white hover:text-gold border border-white/20'}`}
          >
            Carta (Comida)
          </button>
          <button 
            onClick={() => setActiveTab('bebidas')}
            className={`px-8 py-3 font-serif text-xl tracking-wider transition-all ${activeTab === 'bebidas' ? 'text-darker bg-gold' : 'text-white hover:text-gold border border-white/20'}`}
          >
            Bebidas
          </button>
          <button 
            onClick={() => setActiveTab('galeria')}
            className={`px-8 py-3 font-serif text-xl tracking-wider transition-all ${activeTab === 'galeria' ? 'text-darker bg-gold' : 'text-white hover:text-gold border border-white/20'}`}
          >
            Galería
          </button>
        </div>
        
        <div className="min-h-[500px]">
          {activeTab === 'pintxos' && (
            <div className="animate-in fade-in duration-500">
              <MenuSection 
                title="Pintxos" 
                items={[
                  { title: "Número 1 – Tartar de Salmón con Queso Fresco y Encurtidos", price: "4,90 €" },
                  { title: "Número 2 – Pimiento Verde con Bechamel de Setas y Gambas", price: "4,50 €" },
                  { title: "Número 3 – Patata Rellena de Gambas y Bechamel", price: "4,20 €" },
                  { title: "Número 4 – Tostadica de Foie Fresco de Primera", price: "7,00 €" },
                  { title: "Número 5 – Pintxo de Txistorra Casera de Navarra", price: "3,30 €" },
                  { title: "Número 6 – Tortilla de Patatas", price: "3,00 €" },
                  { title: "Número 7 – Tortilla de Patatas con Jamón de York y Queso", price: "3,50 €" },
                  { title: "Número 8 – Tortilla de Verduras de Navarra", price: "3,50 €" },
                  { title: "Número 9 – Migas de Pastor con Huevo Frito Ecológico y Txistorra", price: "5,00 €" },
                  { title: "Número 10 – Pajarico de Boquerón", price: "3,50 €" },
                  { title: "Número 11 – Pajarico de Antxoa", price: "3,50 €" },
                  { title: "Número 12 – Brotxeta de Langostinos y Pulpo", price: "5,50 €" },
                  { title: "Número 13 – Morcilla Trufada con Foie y Puré de Patatas", price: "5,50 €" },
                  { title: "Número 14 – Calabacín Relleno de Jamón Ibérico con Langostinos y Piquillos", price: "4,90 €" },
                  { title: "Número 15 – Pintxo de Txuletón de Ternera de Navarra", price: "6,50 €" },
                  { title: "Número 16 – Cazuelica de Ajoarriero con Huevo de Codorniz", price: "4,50 €" },
                  { title: "Número 17 – Solomillo Ibérico con Bacon y Hongo Beltza en Salsa de Sidra", price: "5,00 €" },
                  { title: "Número 18 – Queso de Cabra con Tomate a la Plancha en Salsa de Oporto", price: "4,70 €" },
                  { title: "Número 19 – Tostadica de Txacka Pintxo", price: "4,00 €" },
                  { title: "Número 20 – Manitas de Cerdo Rellenas de Hongos y Foie", price: "5,50 €" },
                  { title: "Número 21 – Pimientos del Piquillo Rellenos de Picadillo de Angus", price: "5,00 €" },
                  { title: "Número 22 – Brioche Relleno de Ajoarriero y Huevo Codorniz", price: "5,50 €" }
                ]} 
              />
            </div>
          )}

          {activeTab === 'comida' && (
            <div className="animate-in fade-in duration-500 space-y-16">
              <MenuSection 
                title="Platos Combinados" 
                items={[
                  { title: "Entrecot de Ternera de Navarra con Patatas Fritas, Pimientos del Piquillo y Ensalada", price: "25 €" },
                  { title: "«Urtain» 2 Huevos Fritos con Jamón, Patatas Fritas y Tomate Casero", price: "18 €" },
                  { title: "Txipirones a la Plancha con Patatas Panaderas, Pimientos del Padrón, Frito de Jamón y Queso y Ali-Oli", price: "25 €" },
                  { title: "Lomo con Patatas Fritas, 2 Croquetas, Pimientos del Piquillo y Ensalada", price: "18 €" },
                  { title: "Katxopo de Ternera de Angus, con Jamón y Queso, Patatas y Ensalada", price: "20 €" }
                ]} 
              />
              <MenuSection 
                title="Ensaladas" 
                items={[
                  { title: "Ensalada Mixta", price: "15 €" },
                  { title: "Ensalada de Salmón Ahumado", price: "18 €" }
                ]} 
              />
              <MenuSection 
                title="Picoteo" 
                items={[
                  { title: "Rabas de Calamar", price: "15 €" },
                  { title: "Patatas a la Brava", price: "8 €" },
                  { title: "Cesta de Minicroquetas Variadas", price: "12 €" },
                  { title: "Jamón Ibérico con Tostadicas de Pan con Tomate", price: "25 €" },
                  { title: "Txistorra Casera de Navarra", price: "14 €" },
                  { title: "Bastones de Calabacín Crujiente", price: "15 €" },
                  { title: "Alitas de Pollo con Salsitas", price: "15 €" },
                  { title: "Migas con Txistorra y Huevo Frito", price: "15 €" }
                ]} 
              />
              <MenuSection 
                title="Tostadas" 
                items={[
                  { title: "Jamón Ibérico con Aceite de Arbequina y Tomate Natural", price: "15 €" },
                  { title: "Verduritas Gratinadas al Horno con Queso", price: "12 €" }
                ]} 
              />
              <MenuSection 
                title="Bocadillos" 
                items={[
                  { title: "Calabacín, Panceta Ibérica, Queso Gouda y Tomate Natural", price: "9 €" },
                  { title: "Jamón Ibérico con Pan Tumaca", price: "12 €" },
                  { title: "Jamón con Pimientos Verdes", price: "8 €" },
                  { title: "Lomo con Pimientos Verdes y Queso", price: "9 €" }
                ]} 
              />
              <MenuSection 
                title="Hamburguesas" 
                items={[
                  { title: "Hamburguesa Vegana", price: "16 €", description: "Espinacas frescas, hongos, pimientos del piquillo y cebolla caramelizada" },
                  { title: "Hamburguesa Completa de Ternera de Navarra", price: "16 €", description: "Ternera, lechuga, tomate, panceta, queso, huevo frito y patatas" }
                ]} 
              />
              <MenuSection 
                title="Sándwich" 
                items={[
                  { title: "Jamón y Queso y Chips", price: "8 €" },
                  { title: "Jamón y Queso con Huevo Frito y Chips", price: "9 €" },
                  { title: "Vegetal con Chips", price: "8 €" }
                ]} 
              />
              <MenuSection 
                title="Postres" 
                intro="¡Algo dulce para terminar!"
                items={[
                  { title: "Helado de Turrón con Teja de Tolosa y Chocolate Caliente", price: "8 €" },
                  { title: "Gofre con Nutela", price: "8 €" },
                  { title: "Coulan de Chocolate con Fresas", price: "8 €" }
                ]} 
              />
            </div>
          )}

          {activeTab === 'bebidas' && (
            <div className="animate-in fade-in duration-500 space-y-16">
              <div className="text-center mb-12">
                <p className="font-serif text-2xl text-white italic">"Para quienes disfrutan una buena sobremesa..."</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                <MenuSection title="Ginebras">
                  <DrinkTags items={["Nordés", "Citadelle", "Puerto de Indias", "Bul-Dog", "London Nº1", "G'Vine", "Gin Mare", "Tanqueray 10", "Hendrix's", "Oxley", "Brockman's", "Martin Miller", "Gin Eneko", "Roku Gin", "Larios XII", "Larios XII Rosse", "Beefeater", "Seagram's", "Tankeray", "Bombay", "Bombay Sapphire", "Puerto de Indias Blackberry", "Beefeater Rosse"]} />
                </MenuSection>

                <MenuSection title="Rones">
                  <DrinkTags items={["Zacapa 23", "Havana Club 3 y 7 Años", "Barceló", "Brugal", "Cacique", "Bacardi", "Pampero"]} />
                </MenuSection>

                <MenuSection title="Whiskys">
                  <DrinkTags items={["J.B", "Ballantines", "Cutty Sark", "White Label", "Glen Grant", "Glenfiddich", "Macallan 12", "Cardhu"]} />
                </MenuSection>

                <MenuSection title="Mojitos">
                  <DrinkTags items={["Mojito Tradicional de Cuba"]} />
                </MenuSection>

                <MenuSection title="Otras Bebidas">
                  <DrinkTags items={["Patxaran Casero", "Patxaran Basarana Etiqueta Negra", "Patxaran Baines", "Crema de Orujo", "Orujo Blanco", "Orujo de Hierbas", "Baileys", "Tequila Cuervo", "Jagermeister", "Piñato", "Whisky Peche", "Tequila de Fresa", "Tia Maria", "Licor de Melocotón y Manzana"]} />
                </MenuSection>
              </div>

              <div className="border-t border-white/10 pt-16">
                <h2 className="font-serif text-3xl text-white mb-12 text-center">Vinos y Cervezas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                  <MenuSection title="Vinos Recomendados">
                    <div className="space-y-4 mt-4">
                      <div className="border-b border-white/10 pb-3">
                        <h4 className="text-white text-lg">Principe de Viana Crianza y Chardonay</h4>
                        <p className="text-gold font-serif text-sm mt-1">Navarra</p>
                      </div>
                      <div className="border-b border-white/10 pb-3">
                        <h4 className="text-white text-lg">Baigorri - Ederra - Azplikueta</h4>
                        <p className="text-gold font-serif text-sm mt-1">Rioja</p>
                      </div>
                      <div className="border-b border-white/10 pb-3">
                        <h4 className="text-white text-lg">Legaris - Taurus - Tomas Postigo</h4>
                        <p className="text-gold font-serif text-sm mt-1">Ribera del Duero</p>
                      </div>
                    </div>
                  </MenuSection>

                  <MenuSection title="Cervezas">
                    <div className="space-y-6 mt-4">
                      <div>
                        <h4 className="text-white text-lg mb-2">Barril</h4>
                        <DrinkTags items={["Amstel", "Amstel Oro", "Radler", "Heineken Sin Alcohol"]} />
                      </div>
                      <div>
                        <h4 className="text-white text-lg mb-2">Botellín</h4>
                        <DrinkTags items={["Heineken", "18/70", "Amstel Tostada 0/0", "Paulaner", "Cruz Campo Especial Sin Gluten"]} />
                      </div>
                    </div>
                  </MenuSection>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'galeria' && (
            <div className="animate-in fade-in duration-500">
              <div className="text-center mb-12">
                <p className="font-serif text-2xl text-white italic">"Una imagen vale más que mil palabras..."</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="group relative overflow-hidden rounded-lg aspect-square">
                  <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772556965/galeria7_nsbrbq.jpg" alt="Galería 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-darker/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-serif text-xl tracking-widest uppercase text-center px-4">Bar Txoko</span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg aspect-square">
                  <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772556964/ALD0179_yseu2f.jpg" alt="Galería 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-darker/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-serif text-xl tracking-widest uppercase text-center px-4">Bar Txoko</span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg aspect-square">
                  <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772556965/galeria8_amd0x8.jpg" alt="Galería 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-darker/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-serif text-xl tracking-widest uppercase text-center px-4">Bar Txoko</span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg aspect-square">
                  <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772556965/Kiosko_16-300x200_sw9da2.jpg" alt="Galería 4" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-darker/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-serif text-xl tracking-widest uppercase text-center px-4">Bar Txoko</span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg aspect-square">
                  <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772556964/galeria6_bly1um.jpg" alt="Galería 5" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-darker/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-serif text-xl tracking-widest uppercase text-center px-4">Bar Txoko</span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg aspect-square">
                  <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772556964/galeria4_lah1sp.jpg" alt="Galería 6" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-darker/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-serif text-xl tracking-widest uppercase text-center px-4">Bar Txoko</span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg aspect-square">
                  <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772556964/galeria5_s1azgp.jpg" alt="Galería 7" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-darker/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-serif text-xl tracking-widest uppercase text-center px-4">Bar Txoko</span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg aspect-square">
                  <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772556964/galeria2_qocs41.jpg" alt="Galería 8" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-darker/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-serif text-xl tracking-widest uppercase text-center px-4">Bar Txoko</span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg aspect-square">
                  <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772556965/galeria3_pgrbdy.jpg" alt="Galería 9" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-darker/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-serif text-xl tracking-widest uppercase text-center px-4">Bar Txoko</span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg aspect-square">
                  <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772556964/galeria1_em6pqi.jpg" alt="Galería 10" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-darker/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-serif text-xl tracking-widest uppercase text-center px-4">Bar Txoko</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

const reviewsData = [
  { quote: "Excelente comida. Pero lo mejor es la atención de su personal.", name: "Gustavo Jorge Schenzer Oiz" },
  { quote: "Comida y servicio muy buenos. El coulant de queso fue increíble.", name: "Istvan Romhany" },
  { quote: "Muy buen sitio para comer, trato agradable y buen consejo del camarero.", name: "Oscar Alonso" },
  { quote: "Tapas muy sabrosas y servicio estupendo pese a la gente.", name: "Aitana Rebollar" },
  { quote: "Servicio rápido y buen producto. Recomendable.", name: "MAYPI GOMEZ" },
  { quote: "Un clásico de toda la vida. Buenos pinchos y vinos.", name: "Pepe Pepe" },
  { quote: "Se come de lujo. Calidad excelente y precio justo.", name: "Laura Fuente" },
  { quote: "Nos dejaron entrar con perro. Servicio atento y comida excelente.", name: "Vero Bazaco" },
  { quote: "Bar emblemático en la Plaza del Castillo. Buen ambiente.", name: "JGR" },
  { quote: "Parada obligatoria. Rabas y pintxos muy buenos.", name: "Edurne Conde" },
  { quote: "Comimos muy bien. Servicio genial y amables.", name: "Maite Mata" },
  { quote: "Muy buena atención y terraza espectacular.", name: "Rosa B" },
  { quote: "Buen menú fin de semana, platos ricos y ambiente agradable.", name: "Boris Nogales" },
  { quote: "Excelente lugar, buena comida y buena atención.", name: "Bryan Qzada" },
  { quote: "Nos sorprendió la calidad y el trato del personal.", name: "Pedro Saz" },
  { quote: "Buen café y pintxos cojonudos. Bar emblemático.", name: "Armando Rodriguez" },
  { quote: "Ambiente increíble en la plaza y comida muy buena.", name: "Natalia Bienvenida" },
  { quote: "Recomendado 100%. Comida buena y servicio profesional.", name: "Natàlia Giné" }
];

const TestimonialCard = ({ quote, name }: { quote: string, name: string }) => (
  <div className="bg-card p-8 border border-white/10 rounded-lg flex flex-col h-full relative text-left">
    <Quote className="absolute top-6 right-6 w-8 h-8 text-darker opacity-50" />
    <div className="flex space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
      ))}
    </div>
    <p className="text-gray-text italic mb-6 flex-grow relative z-10 text-sm">"{quote}"</p>
    <div className="flex items-center space-x-3 mt-auto">
      <div className="w-10 h-10 rounded-full bg-darker border border-gold/30 flex items-center justify-center text-gold font-serif text-sm">
        {name.charAt(0)}
      </div>
      <div>
        <h4 className="text-white text-sm font-medium">{name}</h4>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(reviewsData.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const visibleReviews = reviewsData.slice(currentIndex * itemsPerPage, currentIndex * itemsPerPage + itemsPerPage);

  return (
    <section id="resenas" className="py-24 px-8 md:px-16 lg:px-24 bg-dark overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h4 className="font-serif italic text-gold text-xl mb-2">Valoración basada en experiencias reales en Google</h4>
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">Lo que dicen nuestros clientes</h2>
        
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="flex space-x-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-6 h-6 text-gold ${i < 4 ? 'fill-gold' : ''}`} />
            ))}
          </div>
          <p className="text-white text-2xl font-serif">3.6 / 5</p>
        </div>
        
        <div className="relative mb-12 px-4 md:px-12">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500" key={currentIndex}>
              {visibleReviews.map((review, idx) => (
                <TestimonialCard key={idx} quote={review.quote} name={review.name} />
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 rounded-full bg-darker border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-darker transition-colors z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 w-10 h-10 rounded-full bg-darker border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-darker transition-colors z-10"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* Pagination Indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-gold w-6' : 'bg-white/20 hover:bg-white/40'}`}
              aria-label={`Ir a la página ${i + 1}`}
            />
          ))}
        </div>
        
        <a 
          href="https://www.google.es/maps/place/Bar+-Txoko-+Taberna/@42.8448623,-1.6569541,12862m/data=!3m2!1e3!5s0xd5092fecc67517f:0xbf2bcbdb5d5d8ff9!4m18!1m9!3m8!1s0xd5092f9352a891f:0x269637d08feb2886!2sBar+-Txoko-+Taberna!8m2!3d42.816541!4d-1.6419552!9m1!1b1!16s%2Fg%2F11bt_h1ll_!3m7!1s0xd5092f9352a891f:0x269637d08feb2886!8m2!3d42.816541!4d-1.6419552!9m1!1b1!16s%2Fg%2F11bt_h1ll_?hl=es&entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-gold text-darker px-8 py-4 tracking-widest text-sm font-medium hover:bg-gold-hover transition-colors uppercase"
        >
          👉 Deja tu reseña en Google
        </a>
      </motion.div>
    </section>
  );
};

const Location = () => (
  <section id="visitanos" className="py-24 px-8 md:px-16 lg:px-24 bg-dark overflow-hidden">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
      <motion.div 
        className="w-full lg:w-5/12 flex flex-col justify-between"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <h4 className="font-serif italic text-gold text-xl mb-2">Visítanos</h4>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-12">Dónde estamos</h2>
          
          <div className="space-y-10">
            <div className="flex items-start space-x-6">
              <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
              <div>
                <h3 className="text-white text-lg mb-2">Dirección</h3>
                <p className="text-gray-text">Pl. del Castillo, 20</p>
                <p className="text-gray-text">31002 Pamplona, Navarra</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <Clock className="w-6 h-6 text-gold shrink-0 mt-1" />
              <div>
                <h3 className="text-white text-lg mb-2">Horarios</h3>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-gray-text text-sm">
                  <span>Lunes:</span><span>7:00 – 24:00</span>
                  <span>Martes:</span><span>7:00 – 24:00</span>
                  <span>Miércoles:</span><span>7:00 – 24:00</span>
                  <span>Jueves:</span><span>7:00 – 24:00</span>
                  <span>Viernes:</span><span>7:00 – 24:00</span>
                  <span>Sábado:</span><span>8:00 – 24:00</span>
                  <span>Domingo:</span><span>8:00 – 24:00</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <Phone className="w-6 h-6 text-gold shrink-0 mt-1" />
              <div>
                <h3 className="text-white text-lg mb-2">Contacto</h3>
                <a href="tel:+34948222012" className="text-gray-text hover:text-gold transition-colors text-lg">948 22 20 12</a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="w-full lg:w-7/12 flex flex-col"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full flex-grow min-h-[400px] lg:min-h-full rounded-xl overflow-hidden border border-gold/30 shadow-2xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2928.665975549887!2d-1.6445301!3d42.816541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5092f9352a891f%3A0x269637d08feb2886!2sBar%20-Txoko-%20Taberna!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses" 
            className="w-full h-full border-0" 
            allowFullScreen={true} 
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>
    </div>
  </section>
);

const Reservation = () => (
  <section id="reserva" className="py-24 px-8 md:px-16 lg:px-24 bg-darker overflow-hidden">
    <motion.div 
      className="max-w-3xl mx-auto border border-gold/30 p-12 md:p-20 relative bg-card text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold"></div>
      
      <h4 className="font-serif italic text-gold text-xl mb-4">Haz tu Reserva</h4>
      <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">Llámanos para asegurar tu mesa</h2>
      
      <p className="text-gray-text mb-10 text-lg">
        Para ofrecerte la mejor atención y confirmar disponibilidad al instante, gestionamos todas nuestras reservas por teléfono.
      </p>
      
      <a 
        href="tel:+34948222012" 
        className="inline-flex items-center justify-center space-x-3 bg-gold text-darker px-12 py-4 tracking-widest text-lg font-medium hover:bg-gold-hover transition-colors"
      >
        <Phone className="w-6 h-6" />
        <span>948 22 20 12</span>
      </a>
    </motion.div>
  </section>
);

const Footer = () => (
  <footer className="bg-dark py-16 px-8 flex flex-col items-center border-t border-white/5">
    <div className="text-gold font-serif text-4xl italic tracking-wider mb-2">
      Bar Txoko
    </div>
    <p className="text-gray-text tracking-widest uppercase text-xs mb-8">Desde 1920</p>
    
    <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-16 mb-12 text-center md:text-left">
      <div className="text-gray-text text-sm">
        <h4 className="text-white font-serif italic mb-3">Ubicación</h4>
        <p>Pl. del Castillo, 20</p>
        <p>31002 Pamplona, Navarra</p>
      </div>
      
      <div className="text-gray-text text-sm">
        <h4 className="text-white font-serif italic mb-3">Contacto</h4>
        <a href="tel:+34948222012" className="hover:text-gold transition-colors block mb-1">948 22 20 12</a>
        <div className="flex space-x-4 mt-4 justify-center md:justify-start">
          <a href="https://www.facebook.com/www.bareltxoko/?locale=es_ES" target="_blank" rel="noopener noreferrer" className="text-gray-text hover:text-gold transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://x.com/txokopamplona" target="_blank" rel="noopener noreferrer" className="text-gray-text hover:text-gold transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="text-gray-text text-sm">
        <h4 className="text-white font-serif italic mb-3">Horarios</h4>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
          <span>Lun - Vie:</span><span>7:00 – 24:00</span>
          <span>Sáb - Dom:</span><span>8:00 – 24:00</span>
        </div>
      </div>
    </div>
    
    <div className="text-gray-text/50 text-xs tracking-widest uppercase flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
      <span>© {new Date().getFullYear()} BAR TXOKO. TODOS LOS DERECHOS RESERVADOS.</span>
      <span className="hidden md:inline">•</span>
      <a href="#" className="hover:text-gray-text transition-colors">AVISO LEGAL</a>
      <span className="hidden md:inline">•</span>
      <a href="#" className="hover:text-gray-text transition-colors">POLÍTICA DE PRIVACIDAD</a>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-darker selection:bg-gold selection:text-darker scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Testimonials />
      <Location />
      <Reservation />
      <Footer />
    </div>
  );
}

