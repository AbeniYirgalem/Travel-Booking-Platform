import React from 'react';

const Comment = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Main Comment Area */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-2">Leave a Reply</h2>
          <p className="text-sm text-gray-600 mb-6">
            Your email address will not be published. Required fields are marked
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="comment" className="block text-sm font-medium mb-1">
                Comment
              </label>
              <textarea
                id="comment"
                rows="6"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-medium mb-1">
                Website
              </label>
              <input
                type="text"
                id="website"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="saveInfo"
                className="mt-1"
              />
              <label htmlFor="saveInfo" className="text-sm text-gray-700">
                Save my name, email, and website in this browser for the next time I comment.
              </label>
            </div>

            <button
              type="submit"
              className="bg-black text-white rounded-full px-6 py-2 text-sm font-medium hover:bg-gray-800 transition"
            >
              Post Comment
            </button>
          </form>
        </div>

        {/* Empty sidebar column to preserve alignment */}
        <div></div>
      </div>
    </div>
  );
};

export default Comment;
