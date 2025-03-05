import { FaRobot, FaUser } from "react-icons/fa";
import { cn } from "@/app/_lib/utils";
import { type UIMessage } from "ai";

interface MessageProps {
  message: UIMessage;
}

export const Message = ({ message }: MessageProps) => {
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
          <FaUser className="size-8 shrink-0 rounded-full bg-teal-200 text-teal-700 p-1" />
        ) : (
          <FaRobot className="size-8 shrink-0 rounded-full border bg-blue-200 text-blue-700 p-1 " />
        )}
        <div
          className={cn(
            "text-sm font-normal  text-zinc-700 p-2 rounded-lg max-w-[500px] break-words w-full",
            {
              "bg-teal-200": isUserMessage,
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
