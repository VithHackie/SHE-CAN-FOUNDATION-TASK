import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [color, setColor] = useState("bg-[#6DF863]");
  const [visiblity, setVisibility] = useState(" hidden");
  const [output, setOutput] = useState("Form Submitted Successfully");
  const [animate, setAnimate] = useState(" ");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setAnimate(" animate-pulse");
      const colRef = collection(db, "messages");
      await addDoc(colRef, {
        Name: firstName + " " + lastName,
        Email: email,
        Message: msg,
        Time : serverTimestamp()
      });
      setFirstName("");
      setLastName("");
      setEmail("");
      setMsg("");
      setColor("bg-[#6DF863]");
      setOutput("Form Submitted Successfully");
      setVisibility(" ");
    } catch (e) {
      if (e) {
        setOutput(e.message);
        setVisibility(" ");
        setColor("bg-red-600");
      }
    } finally {
      setAnimate(" ");
    }
  };

  const clickHandler = () => {
    setVisibility(" hidden");
  };

  return (
    <div className="min-h-screen w-full">

      {/* Toast Notification */}
      <div
        className={
          "px-4 py-2 pr-10 fixed top-4 left-4 right-4 sm:left-8 sm:right-auto sm:top-30 sm:w-fit m-auto h-fit border border-emerald-700 rounded text-[#1f2536] font-medium Sfont cursor-pointer text-center z-50 " +
          color +
          visiblity
        }
      >
        {output}{" "}
        <span
          onClick={() => clickHandler()}
          className="absolute text-center mx-3 text-[#1f2536] hover:font-bold"
        >
          X
        </span>
      </div>

      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full z-[-1]">
        <img src="/images/poster.png" className="w-full h-auto object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-white to-transparent"></div>
      </div>

      {/* Admin Login Button */}
      <div className="btn mt-10">
        <button
          onClick={() => { navigate("/login"); }}
          className="m-4 sm:m-8 px-3 py-2 rounded font-medium Sfont bg-violet-600 text-white border border-black hover:bg-fuchsia-800 text-sm sm:text-base"
        >
          Admin Log In
        </button>
      </div>

      {/* Main Content */}
      <div className="content mt-[25vh] sm:mt-[30vh] md:mt-[35vh] px-4 sm:px-8 md:px-0 sm:ml-[10vw] md:ml-[20vw] pb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl Sfont font-medium text-[#1f2536]">
          Write Us A Message
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl Sfont font-medium mt-2 sm:mt-3 text-[#1f2536]">
          Please Fill The Form Below.
        </h2>

        <div className="form mt-8 sm:mt-12 md:mt-15">
          <form
            onSubmit={(e) => { submitHandler(e); }}
            className="flex flex-col"
          >
            {/* Full Name */}
            <p className="text-base sm:text-lg md:text-xl font-medium Sfont text-[#1f2536]">
              Full Name<span className="text-red-600 font-bold ml-2 sm:ml-4">*</span>
            </p>
            <div className="fullname flex flex-col xs:flex-row sm:flex-row gap-3 mt-3 w-full">
              <div className="flex flex-col w-full sm:w-auto">
                <input
                  type="text"
                  value={firstName}
                  className="firstName px-3 py-2 rounded focus:outline-hidden Sfont font-xl border w-full sm:w-48 md:w-56"
                  onChange={(e) => { setFirstName(e.target.value); }}
                />
                <p className="Sfont text-sm font-medium mt-2 ml-1">First Name</p>
              </div>
              <div className="flex flex-col w-full sm:w-auto">
                <input
                  type="text"
                  value={lastName}
                  className="lastName px-3 py-2 rounded focus:outline-hidden Sfont font-xl border w-full sm:w-48 md:w-56"
                  onChange={(e) => { setLastName(e.target.value); }}
                />
                <p className="Sfont text-sm font-medium mt-2 ml-1">Last Name</p>
              </div>
            </div>

            {/* Email */}
            <div className="email mt-4 sm:mt-5">
              <p className="text-base sm:text-lg md:text-xl font-medium Sfont text-[#1f2536]">
                E-Mail<span className="text-red-600 font-bold ml-2 sm:ml-4">*</span>
              </p>
              <input
                type="email"
                value={email}
                placeholder="ex-example@gmail.com"
                className="px-3 py-2 mt-3 rounded focus:outline-none Sfont font-xl border w-full sm:w-96 md:w-132"
                onChange={(e) => { setEmail(e.target.value); }}
              />
            </div>

            {/* Message */}
            <div className="msg mt-4 sm:mt-5">
              <p className="text-base sm:text-lg md:text-xl font-medium Sfont text-[#1f2536]">
                Your Message for Us.
              </p>
              <textarea
                name="msg"
                id="msg"
                value={msg}
                className="px-3 py-2 mt-3 h-36 sm:h-44 md:h-50 w-full sm:w-96 md:w-132 rounded focus:outline-none Sfont font-xl border resize-none"
                onChange={(e) => { setMsg(e.target.value); }}
              ></textarea>
            </div>

            {/* Submit Button */}
            <input
              type="submit"
              value={"Submit"}
              className={
                "px-3 py-2 w-full sm:w-40 text-base sm:text-xl Sfont text-white font-medium border hover:bg-emerald-500 border-black mt-3 mb-10 rounded bg-emerald-400" +
                animate
              }
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
