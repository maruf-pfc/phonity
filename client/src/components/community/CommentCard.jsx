import React from 'react';

const CommentCard = ({ content, author, time, avatar }) => {
  return (
    <div className="flex items-start space-x-4 p-4 bg-white shadow rounded-xl border border-gray-100 my-4">
      <img
        src={avatar}
        alt={`${author}'s avatar`}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <div className="flex items-center space-x-2">
          <h4 className="font-semibold text-gray-800">{author}</h4>
          <span className="text-sm text-gray-500">{time}</span>
        </div>
        <p className="text-gray-700 mt-1">{content}</p>
      </div>
    </div>
  );
};

export default CommentCard;
