import { useEffect, useState } from "react";
import { getHealthSummary } from "@/services/healthService";

const Panorama = () => {
  const [summary, setSummary] = useState<any>(null);

  useEffect(() => {
    getHealthSummary().then(setSummary);
  }, []);

  if (!summary) return null;

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Panorama</h2>
      <ul className="bg-gray-900 text-white rounded-xl p-4 space-y-1 text-sm">
        <li>Horas de sono: {summary.sleepHours}</li>
        <li>Hidratação: {summary.hydrationLevel}</li>
        <li>Passos hoje: {summary.stepsToday}</li>
        <li>Batimentos: {summary.heartRate} bpm</li>
        <li>Estresse: {summary.stressLevel}</li>
      </ul>
    </div>
  );
};

export default Panorama;
