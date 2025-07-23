
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './OccasionDropdown.css';

interface OccasionDropdownProps {
  onSelect?: () => void;
}

const occasions = [
  { name: 'Anniversary', route: '/occasion/anniversary' },
  { name: 'Baby Shower', route: '/occasion/baby-shower' },
  { name: 'Baptism', route: '/occasion/baptism' },
  { name: 'Birthday', route: '/occasion/birthday' },
  // { name: 'Canada Day', route: '/occasion/canada-day' },
  { name: 'Casual Gift', route: '/occasion/casual-gift' },
  { name: 'Christmas', route: '/occasion/christmas' },
  // { name: 'Easter', route: '/occasion/easter' },
  // { name: 'Graduation', route: '/occasion/graduation' },
  // { name: 'Halloween', route: '/occasion/halloween' },
  { name: 'Memorials', route: '/occasion/memorials' },
  // { name: 'Mother\'s Day', route: '/occasion/mothers-day' },
  { name: 'New Year', route: '/occasion/new-year' },
  // { name: 'Special Occasions', route: '/occasion/special-occasions' },
  // { name: 'Thanksgiving', route: '/occasion/thanksgiving' },
  // { name: 'Valentine\'s Day', route: '/occasion/valentines-day' },
  { name: 'Wedding', route: '/occasion/wedding' }
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
