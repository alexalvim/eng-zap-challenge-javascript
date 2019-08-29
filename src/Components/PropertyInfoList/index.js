import React from 'react'
import {
  FaBed,
  FaShower,
  FaCar,
  FaRuler,
  FaBuilding
} from "react-icons/fa";

import IconItem from '../IconItem';
import { List } from './styles'

export default ({ property, activePortal }) => (
  <List>
    <li>
      <IconItem
        activePortal={activePortal}
        Icon={FaBed}
        label={`Quartos: ${property.bedrooms}`}/>
    </li>
    <li>
      <IconItem
        activePortal={activePortal}
        Icon={FaShower}
        label={`Banheiros: ${property.bathrooms}`}/>
    </li>
    <li>
      <IconItem
        activePortal={activePortal}
        Icon={FaCar}
        label={`Vagas: ${property.parkingSpaces}`}/>
    </li>
    <li>
      <IconItem
        activePortal={activePortal}
        Icon={FaRuler}
        label={`Área útil: ${property.usableAreas} m²`}/>
    </li>
    {property.address.neighborhood &&
      <li>
        <IconItem
          activePortal={activePortal}
          Icon={FaBuilding}
          label={`Bairro: ${property.address.neighborhood}`}/>
      </li>}
  </List>
)