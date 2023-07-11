import React from 'react';
import Dropdown from '../dropdown/Dropdown';
import {
  FilterPanelContainer,
  SearchInput,
  NewProjectButton,
  ItemListContainer,
  ItemLabel,
  ItemValue,
  LeftWrapper,
  InputWrapper,
} from './styles';
import { BiSearch } from 'react-icons/bi';

interface Item {
  label: string;
  value: number;
}

interface FilterPanelWithItemListProps {
  items: Item[];
}

const FilterPanelWithItemList = ({ items }: FilterPanelWithItemListProps) => (
  <FilterPanelContainer>
    <LeftWrapper>
      <Dropdown />
      <InputWrapper>
        <BiSearch size={18} color={'#ccc;'} />
        <SearchInput
          placeholder="Search..."
          type="text"
          name="search"
          id="search"
          autoComplete="off"
        />
      </InputWrapper>
    </LeftWrapper>

    <NewProjectButton>Create New Project</NewProjectButton>

    <ItemListContainer>
      {items.map((item, index) => (
        <div key={index} className="tab-items">
          <ItemLabel>{item.label}</ItemLabel>
          <ItemValue>{item.value}</ItemValue>
        </div>
      ))}
    </ItemListContainer>
  </FilterPanelContainer>
);

export default FilterPanelWithItemList;
