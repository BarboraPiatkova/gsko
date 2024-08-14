import React from "react";

interface InfoDisplayProps {
  label: string;
  value: string;
}

const InfoDisplay: React.FC<InfoDisplayProps> = ({ label, value }) => (
  <div className="flex flex-row gap-2">
    <span className="font-bold">{label}:</span>
    <span className="font-normal">{value}</span>
  </div>
);

export default InfoDisplay;
