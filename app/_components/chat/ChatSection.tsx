// app/_components/chat/ChatSection.tsx
"use client";
import { FaLock, FaPaperPlane, FaRobot, FaTimes } from "react-icons/fa";
import SectionTitle from "@/app/_components/SectionTitle";
import TextField from "@/app/_components/TextField";
import { useState } from "react";
import { Message } from "@/app/_components/chat/Message";
import { useChat } from "ai/react";
import { LoginButton } from "@/app/_components/LoginButton";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";

const ChatSection = () => {
  const session = useSession();
  const [tempInput, setTempInput] = useState("");
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const isLoggedIn = session.status === "authenticated";
  const { messages, input, handleSubmit, handleInputChange, status } = useChat({
    api: "/api/chat", // Point to your server-side API route
    initialInput: "Tell me something about Nikos Dimitrakopoulos",
  });

  const handleUnauthenticatedSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoggedIn && tempInput.trim() !== "") {
      setShowLoginPrompt(true);
    }
  };

  return (
    <section id="chat" className="w-full flex flex-col items-start">
      <SectionTitle title="AI CHAT" />
      <div className="mt-2 w-full h-[500px] flex flex-col justify-end bg-base-300 card ">
        <div className="w-full h-full flex flex-col items-start gap-2 overflow-y-auto p-2">
          {messages.map((message, index) => (
            <Message key={index} message={message} session={session.data} />
          ))}
          {status !== "ready" && (
            <Message
              message={{
                content: "",
                id: "1111",
                role: "assistant",
                createdAt: new Date(),
                parts: [],
              }}
              session={session.data}
            />
          )}
          {messages.length === 0 && (
            <div className="flex-1 flex flex-col items-center justify-center gap-2 w-full">
              <FaRobot className="size-8 text-blue-500" />
              <h3 className="font-semibold text-xl ">AI Assistant</h3>
              <p className="text-zinc-500 text-sm">
                Ask me anything about Nikos Dimitrakopoulos!
              </p>
            </div>
          )}
          {showLoginPrompt && (
            <div className="modal modal-open">
              <div className="modal-box relative">
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={() => setShowLoginPrompt(false)}
                >
                  <FaTimes />
                </button>
                <FaLock className="text-green-600 size-12 mx-auto mb-4" />
                <h3 className="font-bold text-lg text-center">
                  Sign in to Continue
                </h3>
                <p className="py-4 text-center">
                  Please sign in to send messages and chat with the AI
                  assistant.
                </p>
                <div className="modal-action justify-center">
                  <LoginButton />
                </div>
              </div>
              <div
                className="modal-backdrop"
                onClick={() => setShowLoginPrompt(false)}
              ></div>
            </div>
          )}
        </div>
        <form
          className="w-full flex items-start relative "
          onSubmit={isLoggedIn ? handleSubmit : handleUnauthenticatedSubmit}
        >
          <TextField
            value={isLoggedIn ? input : tempInput}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (isLoggedIn && status === "ready") {
                  handleSubmit();
                } else if (!isLoggedIn) {
                  handleUnauthenticatedSubmit(e);
                }
              }
            }}
            onChange={
              isLoggedIn
                ? handleInputChange
                : (e) => setTempInput(e.target.value)
            }
            placeholder="Type your message..."
            className="w-full"
          />
          <button
            type="submit"
            disabled={
              isLoggedIn
                ? input.trim() === "" || status !== "ready"
                : tempInput.trim() === ""
            }
            className="btn btn-primary absolute right-0 top-0 rounded-l-none rounded-r-md"
          >
            Send
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ChatSection;
