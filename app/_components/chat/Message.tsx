import { FaRobot, FaUser } from "react-icons/fa";
import { cn } from "@/app/_lib/utils";
import { type UIMessage } from "ai";
import Image from "next/image";
import { type Session } from "next-auth";
interface MessageProps {
  message: UIMessage;
  session: Session | null;
}

export const Message = ({ message, session }: MessageProps) => {
  const isUserMessage = message.role === "user";
  const formattedTime = message.createdAt
    ? message.createdAt.toLocaleTimeString()
    : "";

  return (
    <div className="w-full flex items-start">
      <div
        className={cn("flex items-start justify-start gap-1 w-full ", {
          "flex-row-reverse": !isUserMessage,
        })}
      >
        {isUserMessage ? (
          <div className="size-8 shrink-0 rounded-full border bg-primary text-primary-content p-1 ">
            <img
              className="rounded-full w-full"
              src={session?.user?.image || ""}
              alt="User avatar"
            />
          </div>
        ) : (
          <FaRobot className="size-8 shrink-0 rounded-full border bg-blue-200 text-blue-700 p-1 " />
        )}
        <div
          className={cn(
            "text-sm font-normal  text-zinc-700 p-2 rounded-lg max-w-[500px] break-words w-full",
            {
              "bg-primary": isUserMessage,
              "bg-blue-200": !isUserMessage,
            }
          )}
        >
          {message.content ? (
            message.content
          ) : (
            <span className="typing-indicator" />
          )}
          <div className="flex justify-between text-xs text-zinc-500 mt-1">
            <span className="ml-auto">{formattedTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
