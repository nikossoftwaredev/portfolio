// app/_components/chat/ChatSection.tsx
"use client";
import { FaPaperPlane, FaRobot } from "react-icons/fa";
import SectionTitle from "@/app/_components/SectionTitle";
import TextField from "@/app/_components/TextField";
import { useState } from "react";
import { Message } from "@/app/_components/chat/Message";
import { useChat } from "ai/react";

const ChatSection = () => {
  const { messages, input, handleSubmit, handleInputChange, status } = useChat({
    api: "/api/chat", // Point to your server-side API route
  });

  return (
    <section id="chat" className="w-full flex flex-col items-start">
      <SectionTitle title="AI CHAT" />
      <div className="w-full h-[500px] flex flex-col justify-end bg-base-300 card p-2">
        <div className="w-full h-full flex flex-col items-start gap-2 overflow-y-auto ">
          {messages.map((message, index) => (
            <Message key={index} message={message} />
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
            />
          )}
          {messages.length === 0 && (
            <div className="flex-1 flex flex-col items-center justify-center gap-2 w-full">
              <FaRobot className="size-8 text-blue-500" />
              <h3 className="font-semibold text-xl ">You&apos;re all set!</h3>
              <p className="text-zinc-500 text-sm">
                Ask your first question to get started.
              </p>
            </div>
          )}
        </div>
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
      </div>
    </section>
  );
};

export default ChatSection;
