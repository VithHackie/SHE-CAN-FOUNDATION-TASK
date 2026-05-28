import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import Message from "./components/Message";
import MessageModal from "./components/MessageModal";
import { formatTimestamp } from "./utils/formatTime";

const AdminPage = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  
  const logOutHandler = async () => {
    await signOut(auth);
  };
  
  const { users, isAdmin, loading } = useContext(AuthContext);
  
  const handleMessageClick = (messageData) => {
    setSelectedMessage(messageData);
  };

  const handleCloseModal = () => {
    setSelectedMessage(null);
  };

  const handleReply = () => {
    console.log("Reply to:", selectedMessage.name);
    handleCloseModal();
  };

  return (
    <>
      <div className="min-h-screen w-full bg-gray-100 flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="py-4 md:py-10 px-2 md:px-1 left min-h-auto lg:min-h-screen w-full lg:w-[20vw] flex flex-col items-center justify-between border-b lg:border-b-0 lg:border-r bg-white lg:bg-transparent">
          <div className="py-4 md:py-10 px-1 left w-full lg:w-[20vw] flex flex-row lg:flex-col items-center justify-around lg:items-center gap-1 md:gap-0.5">
            <li className="px-2 md:px-3 py-2 rounded font-medium cursor-pointer text-[#1f2536] hover:border-none list-none text-sm md:text-xl Sfont w-full text-center">
              Admin Controls
            </li>

            <li className="px-2 md:px-3 py-2 rounded font-medium cursor-pointer text-[#1f2536] hover:bg-gray-400 hover:border-none list-none bg-gray-200 text-sm md:text-xl Sfont w-full text-center">
              Messages
            </li>
          </div>
          <div className="py-4 md:py-10 px-1 left w-full lg:w-[20vw] flex flex-col items-center">
            <li
              onClick={() => {
                logOutHandler();
              }}
              className="px-2 md:px-3 py-2 rounded font-medium cursor-pointer text-[#1f2536] hover:bg-red-500 hover:text-white hover:border-none list-none bg-red-400 text-sm md:text-xl Sfont w-full text-center"
            >
              Logout
            </li>
          </div>
        </div>
        {/* Main Content */}
        <div className="right min-h-auto lg:min-h-screen w-full lg:w-[80vw] overflow-x-auto">
          <table className="w-full text-xs sm:text-sm md:text-base">
            <thead>
              <tr className="h-auto md:h-[10vh] bg-gray-200">
                <th className="text-left h-10 px-2 md:px-3 py-2 font-medium Sfont text-xs sm:text-sm md:text-xl">
                  Names
                </th>
                <th className="text-left h-10 px-2 md:px-3 py-2 font-medium Sfont text-xs sm:text-sm md:text-xl">
                  Email Ids
                </th>
                <th className="text-left h-10 px-2 md:px-3 py-2 font-medium Sfont text-xs sm:text-sm md:text-xl">
                  Messages
                </th>
                <th className="text-left h-10 px-2 md:px-3 py-2 font-medium Sfont text-xs sm:text-sm md:text-xl">
                  Time Stamps
                </th>
                <th className="text-left h-10 px-2 md:px-3 py-2 font-medium Sfont text-xs sm:text-sm md:text-xl">
                  Reply
                </th>
              </tr>
            </thead>
            <tbody>
              {users.docs.map((doc) => (
                
                <Message
                  key={doc.id}
                  name={doc?.data().Name}
                  email={doc?.data().Email}
                  message={doc?.data().Message}
                  timeStamp={doc?.data().Time}
                  onMessageClick={handleMessageClick}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedMessage && (
        <MessageModal
          isOpen={true}
          onClose={handleCloseModal}
          name={selectedMessage.name}
          email={selectedMessage.email}
          message={selectedMessage.message}
          timeStamp={formatTimestamp(selectedMessage.timeStamp)}
          onReply={handleReply}
        />
      )}
    </>
  );
};
export default AdminPage;
