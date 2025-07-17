import { mockWorkoutSummary } from "@/mocks/fitness";

export const getWorkoutSummary = async () => {
  await new Promise(res => setTimeout(res, 300));
  return mockWorkoutSummary;
};
