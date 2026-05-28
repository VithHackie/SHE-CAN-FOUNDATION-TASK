const MessageModal = ({ isOpen, onClose, name, email, message, timeStamp, onReply }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 max-h-96 flex flex-col relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          ✕
        </button>

        {/* Modal Content */}
        <div className="p-6 flex-1 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4 pr-6 text-gray-800">Message Details</h2>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500 font-medium">Name</p>
              <p className="text-lg text-gray-800 font-semibold">{name}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 font-medium">Email</p>
              <p className="text-lg text-gray-800">{email}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 font-medium">Time Stamp</p>
              <p className="text-lg text-gray-800">{timeStamp}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 font-medium">Message</p>
              <p className="text-lg text-gray-800 mt-2 whitespace-pre-wrap break-words">
                {message}
              </p>
            </div>
          </div>
        </div>

        {/* Reply Button */}
        <div className="p-6 border-t flex justify-end">
          <button
            onClick={onReply}
            className="px-6 py-2 rounded bg-blue-600 text-lg font-medium text-white border border-blue-700 hover:bg-blue-800 transition"
          >
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
