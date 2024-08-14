import React, { useState } from "react";
import "../App.css";
import InfoDisplay from "./InfoDisplay";

interface Player {
  name: string;
  frags: number;
  timeConnected: string;
}

interface ServerCardProps {
  heading: string;
  activePlayers: number;
  totalPlayers: number;
  mapName: string;
  serverIp: string;
  onlinePlayers: Player[];
}

const Tooltip = () => (
  <div
    id="tooltip-top_2"
    role="tooltip"
    className="leading-10 absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
  >
    Kliknutím sa pripojíš na server
    <div className="tooltip-arrow" data-popper-arrow></div>
  </div>
);

const PlayerRow = ({ player }: { player: Player }) => (
  <tr className="odd:bg-white even:bg-gray-50 border-b">
    <th
      scope="row"
      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {player.name}
    </th>
    <td className="px-6 py-4">{player.frags}</td>
    <td className="px-6 py-4">{player.timeConnected}</td>
  </tr>
);

const ServerCard: React.FC<ServerCardProps> = ({
  heading,
  activePlayers,
  totalPlayers,
  mapName,
  serverIp,
  onlinePlayers,
}) => {
  const [isPlayersInfoVisible, setIsPlayersInfoVisible] = useState(false);

  const togglePlayersInfo = () => {
    setIsPlayersInfoVisible(!isPlayersInfoVisible);
  };

  return (
    <div className="block p-4 bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 text-center">
          {heading}
        </h5>
        <img src="images/zm.jpg" alt="Server" className="rounded serverimg" />
      </a>
      <div className="p-6 leading-10">
        <div className="flex justify-between items-center mb-4">
          <span
            data-tooltip-target="tooltip-top_1"
            data-tooltip-placement="right"
            className="font-semibold"
          >
            {serverIp}
          </span>
          <Tooltip />
          <span className="inline-flex items-baseline bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
            <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
            Online
          </span>
        </div>
        <InfoDisplay label="Map" value={mapName} />
        <InfoDisplay
          label="Players"
          value={`${activePlayers}/${totalPlayers}`}
        />
        <button
          onClick={togglePlayersInfo}
          className="mt-2 text-white bg-blue-600 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5"
        >
          Online hráči
        </button>
        {isPlayersInfoVisible && (
          <div className="mt-3">
            <div className="w-full mb-3 bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
              <h5 className="text-center text-gray-500 dark:text-gray-400 leading-none font-normal mb-2">
                Online hráči (posledných 24 hodín)
              </h5>
              <div id="line-chart_zm"></div>
            </div>
            <div className="shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rlt:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Hráč
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Fragy
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Čas pripojenia
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {onlinePlayers.map((player, index) => (
                    <PlayerRow key={index} player={player} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServerCard;
