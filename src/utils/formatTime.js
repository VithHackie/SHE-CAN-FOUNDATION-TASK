// Format Firebase timestamp or Date object
export const formatTimestamp = (timestamp) => {
  if (!timestamp) return "N/A";

  let date;

  // Handle Firebase Timestamp object
  if (timestamp && typeof timestamp.toDate === "function") {
    date = timestamp.toDate();
  }
  // Handle JavaScript Date object
  else if (timestamp instanceof Date) {
    date = timestamp;
  }
  // Handle milliseconds (number)
  else if (typeof timestamp === "number") {
    date = new Date(timestamp);
  }
  // Handle ISO string
  else if (typeof timestamp === "string") {
    date = new Date(timestamp);
  } else {
    return "N/A";
  }

  // Format as: "Jan 28, 2:30 PM"
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};
