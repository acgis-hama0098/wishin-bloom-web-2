
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './OccasionDropdown.css';

interface OccasionDropdownProps {
  onSelect?: () => void;
}

const occasions = [
  { name: 'Baptism', route: '/occasion/baptism' },
  { name: 'Wedding', route: '/occasion/wedding' }, 
  { name: 'Birthday', route: '/occasion/birthday' },
  { name: 'Mother\'s Day', route: '/occasion/mothers-day' },
  { name: 'Christmas', route: '/occasion/christmas' },
  { name: 'Easter', route: '/occasion/easter' },
  { name: 'Halloween', route: '/occasion/halloween' },
  { name: 'Valentine\'s Day', route: '/occasion/valentines-day' },
  { name: 'Anniversary', route: '/occasion/anniversary' },
  { name: 'Graduation', route: '/occasion/graduation' },
  { name: 'New Year', route: '/occasion/new-year' },
  { name: 'Baby Shower', route: '/occasion/baby-shower' },
  { name: 'Casual Gift', route: '/occasion/casual-gift' },
  { name: 'Canada Day', route: '/occasion/canada-day' },
  { name: 'Thanksgiving', route: '/occasion/thanksgiving' },
  { name: 'Special Occasions', route: '/occasion/special-occasions' }
];

const OccasionDropdown: React.FC<OccasionDropdownProps> = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOccasionSelect = (route: string) => {
    navigate(route);
    setIsOpen(false);
    if (onSelect) {
      onSelect();
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="occasion-dropdown" ref={dropdownRef}>
      <button 
        className="dropdown-trigger"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Occasions
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      
      <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        <div className="dropdown-content">
          {occasions.map((occasion) => (
            <button
              key={occasion.name}
              className="dropdown-item"
              onClick={() => handleOccasionSelect(occasion.route)}
            >
              {occasion.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OccasionDropdown;
