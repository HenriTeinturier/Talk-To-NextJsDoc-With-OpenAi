// import { openai } from "@/lib/openai";
import { ChatApp } from "./ChatApp";

export const runtime = "edge";

export default function Home() {
  return (
    <div className="max-w-5xl py-4 h-full m-auto">
      <ChatApp />
    </div>
  );
}
