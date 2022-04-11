import React, { useState, useEffect, useContext } from "react";
import "react-chat-engine"
import { Context } from "../context";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);


export default function Chats() {
  const { username, secret } = useContext(Context)
  const [showChat, setShowChat] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true)
    }
  });

  useEffect(() => {
    if (username.length === 0 || secret.length === 0) router.push("/");
  })

  if (!showChat) return <div/>;

  return (
  <div className="shadow">
    <ChatEngine 
      height='calc(100ch - 200px)'
      projectID="709631bd-b297-441f-ae6e-ab96adf0ffbc"
      userName={username}
      userSecret={secret}
      renderNewMessageForm={() => <MessageFormSocial />}
    />
  </div>
  )
}
