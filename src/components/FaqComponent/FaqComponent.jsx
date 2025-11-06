'use client'

import {
  Button,
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  Heading,
} from 'react-aria-components'
import { FaCircleChevronRight } from 'react-icons/fa6';
import './FaqComponent.scss'

export const FaqComponent = ({ className, items, ...props }) => (
  <DisclosureGroup className={className}>
    {items.map((item) => (
      <Disclosure key={item.id} >
        <Heading>
          <Button slot="trigger">
            <FaCircleChevronRight size={30}/>
            {item.title}
          </Button>
        </Heading>
        <DisclosurePanel>{item.content}</DisclosurePanel>
      </Disclosure>
    ))}
  </DisclosureGroup>
)
