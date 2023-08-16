"use client";
import React, { useState } from "react";
import Link from "next/link";

type Player = {
  nickname: string;
  information: string;
  email: string;
};


const ParticipantForm: React.FC = () => {
  const [teamName, setTeamName] = useState("");
  const [mainContactEmail, setMainContactEmail] = useState("");
  const [players, setPlayers] = useState<Player[]>([
    { nickname: "", information: "", email: "" },
  ]);

  const handleAddPlayer = () => {
    setPlayers([...players, { nickname: "", information: "", email: "" }]);
  };

  const handlePlayerChange = (index: number, field: keyof Player, value: string) => {
    const updatedPlayers = [...players];
    updatedPlayers[index][field] = value;
    setPlayers(updatedPlayers);
  };

  const handleSubmit = () => {
    // Perform submission logic here
    // You can access the teamName, mainContactEmail, and players values for further processing
    console.log("Team Name:", teamName);
    console.log("Main Contact Email:", mainContactEmail);
    console.log("Players:", players);
  };

  return (
    
    <div>
      <h2>Team Information</h2>
      <label>
        Team Name:
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Main Contact Email (Private):
        <input
          type="email"
          value={mainContactEmail}
          onChange={(e) => setMainContactEmail(e.target.value)}
        />
      </label>
      <br />
      {players.map((player, index) => (
        <div key={index}>
          <h3>Player {index + 1}</h3>
          <label>
            Player Nickname:
            <input
              type="text"
              value={player.nickname}
              onChange={(e) => handlePlayerChange(index, "nickname", e.target.value)}
            />
          </label>
          <br />
          <label>
            Player Information:
            <textarea
              value={player.information}
              onChange={(e) => handlePlayerChange(index, "information", e.target.value)}
            />
          </label>
          <br />
          <label>
            Player Email (Private):
            <input
              type="email"
              value={player.email}
              onChange={(e) => handlePlayerChange(index, "email", e.target.value)}
            />
          </label>
          <br />
        </div>
      ))}
      <button type="button" onClick={handleAddPlayer}>
        Add a Player
      </button>
      <br />
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default ParticipantForm;