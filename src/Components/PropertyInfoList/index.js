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
        label={`${property.bedrooms} Quartos`}/>
    </li>
    <li>
      <IconItem
        activePortal={activePortal}
        Icon={FaShower}
        label={`${property.bathrooms} Banheiros`}/>
    </li>
    <li>
      <IconItem
        activePortal={activePortal}
        Icon={FaCar}
        label={`${property.parkingSpaces} Vagas`}/>
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
          label={property.address.neighborhood}/>
      </li>}
  </List>
)