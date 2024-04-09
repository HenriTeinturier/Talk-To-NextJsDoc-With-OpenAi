"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import nextjsIcon from "@/../public/next-logo.svg";
import playwrightLogo from "@/../public/playwright-logo.png";
import cheerioLogo from "@/../public/cheerio-logo.svg";
import openaiLogo from "@/../public/openai-logo.png";
import neonLogo from "@/../public/neon-logo.png";
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
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const CardPresentation = () => {
  return (
    <Card>
      <CardHeader>
        {/* <CardTitle>Provided by Henri Teinturier</CardTitle> */}
        <CardDescription>
          {"A chatbot about"}{" "}
          {
            <Link
              href="https://nextjs.org"
              target="_blank"
              className=" inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 gap-1"
            >
              <Image
                alt="Next.js logomark"
                src={nextjsIcon}
                width="14"
                height="14"
              />
              Next.js
            </Link>
          }{" "}
          {
            "documentation. The documentation was scraped and cleaned for AI use with"
          }{" "}
          {
            <Link
              href="https://playwright.dev/"
              target="_blank"
              className=" inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 gap-1"
            >
              <Image
                alt="playwright logomark"
                src={playwrightLogo}
                width="14"
                height="14"
              />
              Playwright
            </Link>
          }{" "}
          {"and"}{" "}
          {
            <Link
              href="https://cheerio.js.org/"
              target="_blank"
              className=" inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 gap-1"
            >
              <Image
                alt="Cheerio logomark"
                src={cheerioLogo}
                width="14"
                height="14"
              />
              Cheerio
            </Link>
          }{" "}
          {
            ". The model used for embeddings is text-embedding-3-small. The documentation is stored in a"
          }{" "}
          {
            <Link
              href="https://neon.tech/"
              target="_blank"
              className=" inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 gap-1"
            >
              <Image
                alt="Neon.tech logomark"
                src={neonLogo}
                width="14"
                height="14"
              />
              vector database
            </Link>
          }{" "}
          {". The model powering this chatbot is"}{" "}
          {
            <Link
              href="https://openai.com/"
              target="_blank"
              className=" inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 gap-1"
            >
              <Image
                alt="openAi logomark"
                src={openaiLogo}
                width="14"
                height="14"
              />
              gpt-3.5-turbo-0125
            </Link>
          }{" "}
          {". gpt-4-0125-preview"}{" "}
          {
            "is much more efficient in its responses. If you wish to use it, you can retrieve the GitHub repository below."
          }
        </CardDescription>
        <div className="flex justify-between whitespace-pre-wrap flex-wrap">
          <div className="flex gap-2 items-center flex-wrap mb-2">
            <Badge variant="secondary" className="">
              OpenAi Api
            </Badge>
            <Badge variant="secondary">Vercel AI SDK</Badge>
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">Cheerio</Badge>
            <Badge variant="secondary">Playwright</Badge>
          </div>
          <div className="flex gap-2">
            <Link
              href="https://www.linkedin.com/in/henri-teinturier/"
              legacyBehavior
            >
              <a target="_blank" rel="noopener noreferrer">
                <Button size={"sm"}>
                  <Linkedin className="mr-2 h-4 w-4" /> My Linkedin
                </Button>
              </a>
            </Link>
            <Link href="https://github.com/HenriTeinturier" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Button size={"sm"}>
                  <Github className="mr-2 h-4 w-4" /> My Github
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Command>
          <CommandList>
            <CommandGroup heading="Reposetories">
              <div className="flex flex-col gap-2 w-fit">
                <Link
                  href="https://github.com/HenriTeinturier/ScrapEmbeddingNextjsDoc"
                  legacyBehavior
                >
                  <a target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="flex justify-between items-center w-80"
                    >
                      <div className="flex justify-start items-center">
                        <BookDown className="h-4 w-4 mr-2" />
                        ScrapEmbeddingNextjsDoc
                      </div>
                      <GithubIcon className="h-4 w-4" />
                    </Button>
                  </a>
                </Link>
                <Link
                  href="https://github.com/HenriTeinturier/Talk-To-NextJsDoc-With-OpenAi"
                  legacyBehavior
                >
                  <a target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="flex justify-between items-center w-80"
                    >
                      <div className="flex justify-start">
                        <Bot className="h-4 w-4 mr-2" />
                        Talk-To-NextJsDoc-With-OpenAi
                      </div>
                      <GithubIcon className="h-4 w-4" />
                    </Button>
                  </a>
                </Link>
              </div>
            </CommandGroup>
          </CommandList>
        </Command>
      </CardContent>
      {/* <CardFooter>
      </CardFooter> */}
    </Card>
  );
};
