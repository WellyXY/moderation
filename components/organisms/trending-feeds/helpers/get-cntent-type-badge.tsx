import { Post } from "@/types";

// 获取Content Type标签 - Trending页面专用
export function getContentTypeBadge(post: Post, filterType: string) {
  if (filterType === "boost" && post.isBoosted) {
    return (
      <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
        🚀 Boost
      </span>
    );
  } else if (filterType === "normal" && !post.isBoosted) {
    return (
      <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
        📄 Normal
      </span>
    );
  } else if (filterType === "all") {
    // 在All模式下，显示实际状态
    if (post.isBoosted) {
      return (
        <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
          🚀 Boost
        </span>
      );
    } else {
      return (
        <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
          📄 Normal
        </span>
      );
    }
  }

  return null;
}
