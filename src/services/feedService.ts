import { mockFeedPosts } from "@/mocks/feed";

export const getFeed = async () => {
  // Simula delay de rede
  await new Promise(res => setTimeout(res, 300));
  return mockFeedPosts;
};
