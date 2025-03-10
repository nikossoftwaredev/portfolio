// app/_components/chat/ChatSection.tsx
"use client";
import { FaLock, FaPaperPlane, FaRobot } from "react-icons/fa";
import SectionTitle from "@/app/_components/SectionTitle";
import TextField from "@/app/_components/TextField";
import { useState } from "react";
import { Message } from "@/app/_components/chat/Message";
import { useChat } from "ai/react";
import { LoginButton } from "@/app/_components/LoginButton";
import { useSession } from "next-auth/react";

const ChatSection = () => {
  const session = useSession();

  const isLoggedIn = session.status === "authenticated";
  const { messages, input, handleSubmit, handleInputChange, status } = useChat({
    api: "/api/chat", // Point to your server-side API route
  });

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
          {messages.length === 0 && isLoggedIn && (
            <div className="flex-1 flex flex-col items-center justify-center gap-2 w-full">
              <FaRobot className="size-8 text-blue-500" />
              <h3 className="font-semibold text-xl ">You&apos;re all set!</h3>
              <p className="text-zinc-500 text-sm">
                Ask your first question to get started.
              </p>
            </div>
          )}
          {!isLoggedIn && (
            <div className="flex-1 flex flex-col items-center justify-center gap-2 w-full">
              <FaLock className=" text-green-600 size-12" />
              <h3 className="text-xl font-semibold text-base-content">
                Authentication Required
              </h3>
              <p className="text-base-content/70 mb-2">
                Please sign in to access the AI chat assistant. Your
                conversations will be private and secure.
              </p>

              <LoginButton />

              <p className="text-xs text-base-content/50 mt-4">
                We only use authentication for demo purposes. No personal data
                is shared with third parties.
              </p>
            </div>
          )}
        </div>
        {isLoggedIn && (
          <form
            className="w-full flex items-start relative"
            onSubmit={handleSubmit}
          >
            <TextField
              value={input}
              onKeyDown={(e) => {
                if (e.key === "Enter" && status === "ready") {
                  handleSubmit();
                }
              }}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="w-full"
            />
            <button
              type="submit"
              disabled={input.trim() === "" || status !== "ready"}
              className="btn btn-primary absolute right-0 top-0 rounded-l-none"
            >
              Send
              <FaPaperPlane />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ChatSection;
