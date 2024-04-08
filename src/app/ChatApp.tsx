"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useChat } from "ai/react";
import {
  ArrowDown,
  Calendar,
  RefreshCcw,
  RefreshCcwDot,
  SendIcon,
  Square,
} from "lucide-react";
import Image from "next/image";
import Markdown from "react-markdown";
import { useEffect, useRef, useState } from "react";
import { CardPresentation } from "./CardPresentation";

export const ChatApp = () => {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    reload,
    stop,
    isLoading,
    setMessages,
  } = useChat();
  const isEmptyMessages = messages.length === 0;
  const [autoScroll, setAutoScroll] = useState(true);
  const ulRef = useRef<HTMLUListElement>(null);

  // Pas recommandé
  useEffect(() => {
    const ul = ulRef.current;
    if (!ul) return;
    if (!autoScroll) return;

    const { scrollHeight, clientHeight } = ul;

    ul.scrollTop = scrollHeight - clientHeight;
  }, [autoScroll, messages]);

  useEffect(() => {
    // add event listener to scroll of ulRef if defined

    const ul = ulRef.current;

    if (!ul) return;

    const handleScroll = () => {
      const { scrollHeight, clientHeight, scrollTop } = ul;

      if (scrollHeight - clientHeight - scrollTop <= 1) {
        setAutoScroll(true);
      } else {
        setAutoScroll(false);
      }
    };

    ul.addEventListener("scroll", handleScroll);

    return () => {
      ul.removeEventListener("scroll", handleScroll);
    };
  }, [messages.length]);

  return (
    <div className="h-full py-4 flex flex-col gap-4 border-x px-4">
      <header className="flex items-center gap-4">
        <Image
          src="/nextjs-logo.png"
          alt="nextjs logo"
          width={50}
          height={50}
        />
        <h1 className="text-2xl font-bold">Talk to Next.js Doc with OpenAi</h1>
      </header>
      <ul
        className="overflow-auto flex flex-col gap-4 w-full flex-1"
        ref={ulRef}
      >
        {isEmptyMessages ? (
          <CardPresentation />
        ) : (
          messages.map((m, index) => (
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
          ))
        )}
      </ul>
      {!isEmptyMessages && (
        <div className="flex gap-2">
          <Button
            disabled={isLoading}
            size="sm"
            onClick={() => {
              stop();
              setMessages([]);
            }}
          >
            <RefreshCcwDot size={16} className="mr-2" />
            Reset
          </Button>
          <Button size="sm" disabled={isLoading} onClick={() => reload()}>
            <RefreshCcw size={16} className="mr-2" />
            Reload
          </Button>
          <Button size="sm" disabled={!isLoading} onClick={stop}>
            <Square size={16} className="mr-2" />
            Stop
          </Button>
          {!autoScroll ? (
            <Button size="sm" onClick={() => setAutoScroll(true)}>
              <ArrowDown size={16} className="mr-2" />
              Scroll
            </Button>
          ) : null}
        </div>
      )}

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
