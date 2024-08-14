import {
  Navbar,
  NavbarCollapse,
  NavbarLink,
  Dropdown,
} from "flowbite-react";
import ServerCard from "./components/Card";

export default function App() {
  const samplePlayers = [
    { name: "blazen", frags: 325, timeConnected: "09:10:46" },
    { name: "asd", frags: 13, timeConnected: "09:10:46" },
  ];
  return (
    <>
      <body className="bg-slate-50">
        <nav className="bg-gray-900 text-white border-gray-200">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            <a
              href="https://www.gamesites.cz"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src="images/gslogo.svg" className="h-12" alt="" />
              <span className="self-center text-xl font-semibold whitespace-nowrap">
                Gamesites.cz | Rozcestník
              </span>
            </a>
            <Navbar fluid className="bg-gray-900 text-white">
              <NavbarCollapse className="text-white">
                <NavbarLink href="#" className="text-white">
                  Banlist
                </NavbarLink>
                <NavbarLink href="#">
                  <Dropdown label="Server" inline>
                    <Dropdown.Item>Seasonal</Dropdown.Item>
                    <Dropdown.Item>Štatistiky</Dropdown.Item>
                    <Dropdown.Item>Pravidlá</Dropdown.Item>
                    <Dropdown.Item>HLTV</Dropdown.Item>
                  </Dropdown>
                </NavbarLink>
                <NavbarLink href="#">Obchod</NavbarLink>
                <NavbarLink href="#">
                  <Dropdown label="Informácie" inline>
                    <Dropdown.Item>Novinky</Dropdown.Item>
                    <Dropdown.Item>F&Q</Dropdown.Item>
                    <Dropdown.Item>Ako nakúpiť?</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>HLTV</Dropdown.Item>
                  </Dropdown>
                </NavbarLink>
              </NavbarCollapse>
            </Navbar>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none items-center font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2"
            >
              Prihlásiť sa{" "}
              <i className="fa-brands fa-steam steamlogin text-base ms-1"></i>
            </button>
          </div>
        </nav>
        <div className="container max-w-screen-xl flex justify-between mx-auto p-4 items-start">
          <ServerCard
            heading="Gamesites.cz^ BaseBuilder New"
            onlinePlayers={samplePlayers}
            mapName="mapName"
            activePlayers={14}
            totalPlayers={26}
            serverIp="81.0.217.177:27055"
          />
          <ServerCard
            heading="Gamesites.cz^ Zombie Chronic"
            onlinePlayers={samplePlayers}
            mapName="mapName"
            activePlayers={14}
            totalPlayers={26}
            serverIp="81.0.217.177:27055"
          />
        </div>
      </body>
    </>
  );
}
