import { getWorkoutSummary } from "@/services/fitnessService";
import { useEffect, useState } from "react";

const Consult = () => {
  const [workout, setWorkout] = useState<any>(null);

  useEffect(() => {
    getWorkoutSummary().then(setWorkout);
  }, []);

  if (!workout) return null;

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Consulta+</h2>
      <div className="bg-gray-900 text-white rounded-xl p-4 text-sm space-y-1">
        <p>Último treino: {workout.lastWorkout}</p>
        <p>Calorias gastas: {workout.caloriesBurned} kcal</p>
        <p>Duração: {workout.durationMinutes} min</p>
        <p>Próximo treino: {workout.nextWorkout}</p>
      </div>
    </div>
  );
};

export default Consult;
