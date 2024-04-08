"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import ReactMarkdown from "react-markdown";

import { useChat } from "ai/react";
import { SendIcon } from "lucide-react";
import Image from "next/image";
import Markdown from "react-markdown";

export const ChatApp = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="h-full py-4 flex flex-col gap-4 border-x px-4">
      <header className="flex items-center gap-4">
        <Image
          src="/nextjs-logo.png"
          alt="nextjs logo"
          width={50}
          height={50}
        />
        <h1 className="text-2xl font-bold">Talk with Nextjs documentation</h1>
      </header>
      <ul className="overflow-auto flex flex-col gap-4 w-full flex-1">
        {messages.map((m, index) => (
          <>
            <Card key={index}>
              <CardHeader className="flex flex-row items-center gap-3 space-y-0 flex-1">
                <Avatar className="h-8 w-8">
                  {m.role === "assistant" && (
                    <AvatarImage src="/nextjs-logo.png" alt="nextjs logo" />
                  )}
                  <AvatarFallback>
                    {m.role === "user" ? "U" : "AI"}
                  </AvatarFallback>
                </Avatar>
              </CardHeader>
              <CardContent>
                <Markdown className="prose">{m.content}</Markdown>
              </CardContent>
            </Card>
          </>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="flex items-end gap-2">
        <Label className="flex-1">
          Say something...
          <Textarea
            value={input}
            onChange={handleInputChange}
            className="mt-2"
          />
        </Label>
        <Button type="submit" size={"sm"}>
          <SendIcon size={16} />
        </Button>
      </form>
    </div>
  );
};
