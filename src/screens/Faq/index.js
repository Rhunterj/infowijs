import React, { useState } from "react";
import { Nav, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

const Faq = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoyDropdownOpen, sethoyDropdownOpen] = useState(false);
  const [notionDropdownOpen, setNotionDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);
  const hoyToggle = () => sethoyDropdownOpen(!hoyDropdownOpen);
  const notionToggle = () => setNotionDropdownOpen(!notionDropdownOpen);

  return (
    <>
    <Nav>
      <Dropdown nav isOpen={hoyDropdownOpen} toggle={hoyToggle}>
        <DropdownToggle nav caret>
          Hoy
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Teachers</DropdownItem>
          <DropdownItem>Parents</DropdownItem>
          <DropdownItem>School</DropdownItem>
          <DropdownItem>Student</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown nav isOpen={notionDropdownOpen} toggle={notionToggle}>
        <DropdownToggle nav caret>
          Notion
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Nieuwe pagina</DropdownItem>
          <DropdownItem>Documenten</DropdownItem>
          <DropdownItem>Medewerkers</DropdownItem>
          <DropdownItem>Zoeken</DropdownItem>
          <DropdownItem>Statistieken</DropdownItem>
          <DropdownItem>Redactie</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Nav>
    </>
  );
};

export default Faq;
