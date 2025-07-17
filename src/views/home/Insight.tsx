import { useEffect, useState } from "react";
import { getFeed } from "@/services/feedService";

const Insight = () => {
  const [feed, setFeed] = useState<any[]>([]);

  useEffect(() => {
    getFeed().then(setFeed);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Insight</h2>
      <div className="space-y-2">
        {feed.map(post => (
          <div key={post.id} className="p-3 bg-gray-900 text-white rounded-xl shadow">
            <p className="text-sm text-gray-400">{post.user}</p>
            <p className="text-base">{post.content}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Insight;
