import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Chat from "./Chat";
import { addMessage } from "../../../utils/redux/chatSlice";
import { generateMessage, generateName } from "../../../utils/Helper";

const LiveChatContainer = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();
  const chats = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("added");
      dispatch(
        addMessage({
          name: generateName(),
          message: generateMessage(20),
        })
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-4 w-full border border-black rounded-xl h-[512px]  ">
      <h1 className="font-bold text-xl py-1.5 mt-0.5 text-gray-400 px-4 border border-b-black  rounded-t-lg">
        Live Chat
      </h1>
      <div className=" px-2 overflow-y-scroll h-[80%] flex flex-col-reverse w-full">
        {chats.map((chat) => (
          <Chat chat={chat} />
        ))}
      </div>
      <form
        className="border border-t-black flex justify-center py-2.5 rounded-b-lg "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Mahesh Dubey",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="mx-2  border border-black py-1 px-2 w-[75%]"
          placeholder="Chat Here"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        ></input>
        <button className="bg-gray-200 px-4 py-1 w-[]">Send</button>
      </form>
    </div>
  );
};

export default LiveChatContainer;
