import { mockHealthSummary } from "@/mocks/health";

export const getHealthSummary = async () => {
  await new Promise(res => setTimeout(res, 300));
  return mockHealthSummary;
};
