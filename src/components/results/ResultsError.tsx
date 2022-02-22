import IconError from "../icons/Error";
import React from "react";

const ResultsError: React.FC = () => {
  return (
      <div className="bg-red-100 text-red-600 flex flex-col items-center space-y-2 p-4 rounded">
          <IconError />
          <p>Ups...Something went wrong.</p>
      </div>
  );
}

export default ResultsError;