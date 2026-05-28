// Truncate message to 2-3 words
import { formatTimestamp } from "../utils/formatTime";

const truncateMessage = (text, wordLimit = 3) => {
  if (!text) return "";
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

const Message = (info) => {
  const handleMessageClick = () => {
    info.onMessageClick && info.onMessageClick(info);
  };

  return (
    <tr className="h-auto md:h-[10vh]">
      <td className="text-left h-10 px-2 md:px-3 py-2 font-bold Sfont text-xs sm:text-sm md:text-2xl">
        {info.name}
      </td>
      <td className="text-left h-10 px-2 md:px-3 py-2 font-light Sfont text-xs sm:text-sm md:text-xl">
        {info.email}
      </td>
      <td
        className="text-left h-10 px-2 md:px-3 py-2 font-normal Sfont text-xs sm:text-sm md:text-xl cursor-pointer hover:text-blue-600 hover:underline"
        onClick={handleMessageClick}
      >
        {truncateMessage(info.message)}
      </td>
      <td className="text-left h-10 px-2 md:px-3 py-2 font-light Sfont text-xs sm:text-xs md:text-lg">
        {formatTimestamp(info.timeStamp)}
      </td>
      <a
        href={
          "https://mail.google.com/mail/?view=cm&fs=1&to=" +
          info.email +
          "&su=FromSHECANFOUNDATION&body=HelloMessenger"
        }
        target="_blank"
      >
        <button className="px-2 md:px-3 py-1 rounded bg-blue-600 text-xs sm:text-sm md:text-lg font-medium text-white border border-black hover:bg-blue-800 mt-2 md:mt-6">
          Reply
        </button>
      </a>
    </tr>
  );
};

export default Message;
