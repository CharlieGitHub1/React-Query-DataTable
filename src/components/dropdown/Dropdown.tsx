import React, { useState } from 'react';
import {
  DropdownContainer,
  DropdownButton,
  DropdownList,
  DropdownItem,
} from './styles';
import { LiaEditSolid } from 'react-icons/lia';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsFillCaretDownFill } from 'react-icons/bs';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('All');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        <span>{selectedItem}</span>
        <BsFillCaretDownFill size={14} color={' #fff'} />
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          <DropdownItem onClick={() => handleItemClick('All')}></DropdownItem>
          <DropdownItem onClick={() => handleItemClick('Edit')}>
            <LiaEditSolid />
          </DropdownItem>
          <DropdownItem onClick={() => handleItemClick('Delete')}>
            <AiOutlineDelete />
          </DropdownItem>
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
