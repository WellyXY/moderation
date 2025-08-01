import { Post } from "@/types";
import { useEffect, useRef, useState } from "react";
import { getContentTypeBadge } from "../helpers/get-cntent-type-badge";

type VideoCardProps = {
  post: Post;
  index: number;
  onSelectPost: (post: Post) => void;
  onAction: (postId: string, action: "boost" | "deboost") => void;
  filterType: string;
};

export function VideoCard({
  post,
  index,
  onSelectPost,
  onAction,
  filterType,
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // 页面加载后静音自动播放
      video.muted = true;
      video.loop = true;
      video.play().catch(console.error);
    }
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.muted = false;
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  };

  // 状态徽章 - 与ContentManagement一致
  const getStatusBadge = (post: Post) => {
    if (post.isBlocked) {
      return (
        <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full flex items-center">
          🚫 Blocked
        </span>
      );
    }

    if (post.isBoosted) {
      return (
        <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full flex items-center">
          🚀 Boost
        </span>
      );
    }

    return (
      <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full flex items-center">
        📄 Normal
      </span>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Video Player Area - 9:16 aspect ratio */}
      <div
        className="aspect-[9/16] bg-gray-900 relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={post.videoUrl}
          loop
          muted
          playsInline
        />

        {/* 排名标识 - 左上角，稍微偏右避免重叠 */}
        <div className="absolute top-2 left-16 z-10">
          <span className="px-2 py-1 text-xs font-bold bg-blue-600 text-white rounded-full">
            #{index + 1}
          </span>
        </div>

        {/* 状态徽章 - 左上角 */}
        <div className="absolute top-2 left-2">{getStatusBadge(post)}</div>

        {/* 音频指示器 - 右下角 */}
        <div className="absolute bottom-2 right-2">
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full ${
              isHovered
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {isHovered ? "🔊" : "🔇"}
          </span>
        </div>

        {/* 内容预览 - 底部 */}
        <div className="absolute bottom-2 left-2 right-16">
          <div className="bg-black bg-opacity-60 text-white p-2 rounded">
            <div className="text-xs font-medium line-clamp-2">
              {post.content}
            </div>
          </div>
        </div>
      </div>

      {/* Content Info - 与ContentManagement完全一致 */}
      <div className="p-3">
        {/* User Info */}
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-xs">{post.avatar}</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium text-gray-900 truncate">
              {post.username}
            </div>
            <div className="text-xs text-gray-500">ID: {post.id}</div>
          </div>
        </div>

        {/* Metrics */}
        <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
          <div className="flex items-center space-x-2">
            <span className="flex items-center">👍 {post.likes}</span>
            <span className="flex items-center">💬 {post.comments}</span>
            <span className="flex items-center">🔄 {post.remixes}</span>
          </div>
        </div>

        {/* Content Type Badge */}
        <div className="mb-2">{getContentTypeBadge(post, filterType)}</div>

        {/* Action Buttons - 与ContentManagement完全一致，但功能简化 */}
        <div className="space-y-1">
          <button
            className="w-full text-primary-600 hover:text-primary-900 text-xs font-medium py-1"
            onClick={() => onSelectPost(post)}
          >
            View Details
          </button>
          <div className="grid grid-cols-2 gap-1">
            {post.isBoosted ? (
              <button
                className="px-2 py-1 bg-red-100 text-red-700 hover:bg-red-200 text-xs rounded transition-colors col-span-2"
                title="Deboost"
                onClick={() => onAction(post.id, "deboost")}
              >
                ⬇️ Deboost
              </button>
            ) : (
              <button
                className="px-2 py-1 bg-green-100 text-green-700 hover:bg-green-200 text-xs rounded transition-colors col-span-2"
                title="Boost"
                onClick={() => onAction(post.id, "boost")}
              >
                ⬆️ Boost
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
