"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// import { Command } from "cmdk";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  BookDown,
  Bot,
  Calculator,
  Calendar,
  CreditCard,
  Github,
  GithubIcon,
  Linkedin,
  Settings,
  Smile,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export const CardPresentation = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Provided by Henri Teinturier</CardTitle>
        <CardDescription>
          {
            "A chatbot about Next.js documentation. The documentation was scraped and cleaned for AI use with Playwright and Cheerio. The model used for embeddings is text-embedding-3-small. The documentation is stored in a vector database. The model powering this chatbot is gpt-3.5-turbo-0125. gpt-4-0125-preview is much more efficient in its responses. If you wish to use it, you can retrieve the GitHub repository below."
          }
        </CardDescription>
        <div className="flex gap-2">
          <Badge variant="secondary">OpenAi Api</Badge>
          <Badge variant="secondary">Vercel AI SDK</Badge>
          <Badge variant="secondary">Next.js</Badge>
          <Badge variant="secondary">Cheerio</Badge>
          <Badge variant="secondary">Playwright</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Link
            href="https://www.linkedin.com/in/henri-teinturier/"
            legacyBehavior
          >
            <a target="_blank" rel="noopener noreferrer">
              <Button>
                <Linkedin className="mr-2 h-4 w-4" /> Linkedin
              </Button>
            </a>
          </Link>
          <Link href="https://github.com/HenriTeinturier" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <Button>
                <Github className="mr-2 h-4 w-4" /> Github
              </Button>
            </a>
          </Link>
        </div>
      </CardContent>
      <CardFooter>
        <Command>
          <CommandList>
            <CommandGroup heading="Reposetories">
              <div className="flex flex-col w-full gap-2">
                <Button
                  variant="outline"
                  className="flex justify-between items-center"
                >
                  <div className="flex justify-start items-center">
                    <BookDown className="h-4 w-4 mr-2" />
                    ScrapEmbeddingNextjsDoc
                  </div>
                  <GithubIcon className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="flex justify-between items-center"
                >
                  <div className="flex justify-start">
                    <Bot className="h-4 w-4 mr-2" />
                    Talk-To-NextJsDoc-With-OpenAi
                  </div>
                  <GithubIcon className="h-4 w-4" />
                </Button>
              </div>
            </CommandGroup>
          </CommandList>
        </Command>
      </CardFooter>
    </Card>
  );
};
