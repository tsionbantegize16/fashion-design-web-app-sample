import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LookbookSection.css';

// Import images from assets folder
import casual1 from '../assets/images/casual-1.jpg';
import casual2 from '../assets/images/casual-2.jpg';
import casual3 from '../assets/images/casual-3.jpg';
import formal1 from '../assets/images/formal-1.jpg';
import formal2 from '../assets/images/formal-2.jpg';
import formal3 from '../assets/images/formal-3.jpg';
import evening1 from '../assets/images/evening1.jpg';
import evening2 from '../assets/images/evening2.jpg';
import evening3 from '../assets/images/evening3.jpg';
import street1 from '../assets/images/street1.jpg';
import street2 from '../assets/images/street2.jpg';
import street3 from '../assets/images/street3.jpg';
import traditional1 from '../assets/images/traditional1.jpg';
import traditional2 from '../assets/images/traditional2.jpg';
import traditional3 from '../assets/images/traditional3.jpg';
import summer1 from '../assets/images/summer1.png';
import winter1 from '../assets/images/winter1.jpg';

// Pre-defined categories with metadata
const CATEGORIES = [
  { id: 'all', label: 'All', icon: '🌟' },
  { id: 'casual', label: 'Casual', icon: '👕' },
  { id: 'formal', label: 'Formal', icon: '👔' },
  { id: 'evening', label: 'Evening', icon: '✨' },
  { id: 'streetwear', label: 'Streetwear', icon: '🎯' },
  { id: 'traditional', label: 'Traditional', icon: '🎎' },
  { id: 'summer', label: 'Summer', icon: '☀️' },
  { id: 'winter', label: 'Winter', icon: '❄️' }
];

// Pre-defined outfits data with enhanced metadata
const OUTFITS_DATA = [
  {
    id: 1,
    image: casual1,
    category: "Casual",
    title: "Urban Elegance",
    description: "Perfect for city exploration",
    season: "All Year"
  },
  {
    id: 2,
    image: formal1,
    category: "Formal",
    title: "Modern Sophistication",
    description: "Business professional attire",
    season: "All Year"
  },
  {
    id: 3,
    image: evening1,
    category: "Evening",
    title: "Night Glamour",
    description: "Elegant evening wear",
    season: "All Year"
  },
  {
    id: 4,
    image: street1,
    category: "Streetwear",
    title: "Street Style",
    description: "Urban fashion statement",
    season: "All Year"
  },
  {
    id: 5,
    image: casual2,
    category: "Casual",
    title: "Weekend Vibes",
    description: "Comfortable weekend wear",
    season: "All Year"
  },
  {
    id: 6,
    image: formal2,
    category: "Formal",
    title: "Business Chic",
    description: "Professional business attire",
    season: "All Year"
  },
  {
    id: 7,
    image: traditional1,
    category: "Traditional",
    title: "Cultural Heritage",
    description: "Traditional elegance",
    season: "All Year"
  },
  {
    id: 8,
    image: summer1,
    category: "Summer",
    title: "Summer Breeze",
    description: "Light and breezy summer wear",
    season: "Summer"
  },
  {
    id: 9,
    image: winter1,
    category: "Winter",
    title: "Winter Wonder",
    description: "Cozy winter collection",
    season: "Winter"
  },
  {
    id: 10,
    image: evening2,
    category: "Evening",
    title: "Gala Glamour",
    description: "Perfect for special occasions",
    season: "All Year"
  },
  {
    id: 11,
    image: street2,
    category: "Streetwear",
    title: "Urban Edge",
    description: "Modern street fashion",
    season: "All Year"
  },
  {
    id: 12,
    image: traditional2,
    category: "Traditional",
    title: "Ethnic Elegance",
    description: "Cultural fashion statement",
    season: "All Year"
  },
  {
    id: 13,
    image: casual3,
    category: "Casual",
    title: "City Casual",
    description: "Urban casual comfort",
    season: "All Year"
  },
  {
    id: 14,
    image: formal3,
    category: "Formal",
    title: "Executive Style",
    description: "Professional executive wear",
    season: "All Year"
  },
  {
    id: 15,
    image: evening3,
    category: "Evening",
    title: "Evening Elegance",
    description: "Sophisticated evening wear",
    season: "All Year"
  },
  {
    id: 16,
    image: street3,
    category: "Streetwear",
    title: "Urban Street",
    description: "Contemporary street style",
    season: "All Year"
  },
  {
    id: 17,
    image: traditional3,
    category: "Traditional",
    title: "Heritage Collection",
    description: "Traditional fashion heritage",
    season: "All Year"
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

const LookbookSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOutfit, setSelectedOutfit] = useState(null);

  // Memoize the filtered outfits
  const filteredOutfits = useMemo(() => {
    if (activeCategory === 'all') {
      return OUTFITS_DATA;
    }
    return OUTFITS_DATA.filter(outfit => 
      outfit.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [activeCategory]);

  // Handle category change with loading state
  const handleCategoryChange = useCallback((categoryId) => {
    setIsLoading(true);
    setActiveCategory(categoryId);
    // Simulate loading for smooth transition
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  // Handle outfit selection
  const handleOutfitClick = useCallback((outfit) => {
    setSelectedOutfit(outfit);
  }, []);

  // Close outfit details
  const handleCloseDetails = useCallback(() => {
    setSelectedOutfit(null);
  }, []);

  // Reset category on component mount
  useEffect(() => {
    setActiveCategory('all');
  }, []);

  return (
    <section className="lookbook-section">
      <motion.div 
        className="lookbook-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 className="lookbook-title" variants={itemVariants}>
          Explore Our Lookbook
        </motion.h2>
        <motion.p className="lookbook-subtitle" variants={itemVariants}>
          Browse curated outfits designed to express confidence and creativity
        </motion.p>

        <motion.div className="category-tags" variants={itemVariants}>
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                className={`category-tag ${isActive ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category.id)}
                disabled={isLoading}
              >
                <span className="category-icon">{category.icon}</span>
                {category.label}
              </button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className="outfit-grid" 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {filteredOutfits.map((outfit) => (
              <motion.div
                key={outfit.id}
                className="outfit-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleOutfitClick(outfit)}
              >
                <div className="outfit-image">
                  <img 
                    src={outfit.image} 
                    alt={outfit.title} 
                    loading="lazy"
                    width="600"
                    height="800"
                  />
                  <div className="outfit-overlay">
                    <h3>{outfit.title}</h3>
                    <span className="outfit-category">{outfit.category}</span>
                    <p className="outfit-description">{outfit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Outfit Details Modal */}
        <AnimatePresence>
          {selectedOutfit && (
            <motion.div
              className="outfit-details-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="modal-content">
                <button className="close-button" onClick={handleCloseDetails}>×</button>
                <img src={selectedOutfit.image} alt={selectedOutfit.title} />
                <div className="modal-details">
                  <h3>{selectedOutfit.title}</h3>
                  <p className="category">{selectedOutfit.category}</p>
                  <p className="description">{selectedOutfit.description}</p>
                  <p className="season">Season: {selectedOutfit.season}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default React.memo(LookbookSection); 