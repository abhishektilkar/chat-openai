"use client";
import { useChat } from "ai/react";
import Image from "next/image";
import ReactTextareaAutosize from "react-textarea-autosize";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api'
  });
  return <div className="min-h-screen bg-neutral-800">
    {messages.length !== 0 ? (
      <div className="pb-32 pt-5 space-y-5 w-[75%] mx-auto relative">
        {messages.map((messageses) => (
          <div key={messageses.id} className="w-full">
            {messageses.role === "user" ? (
              //  <div>{messageses.content} ARA</div>
              <div className="flex items-center gap-x-2">
                <div className="bg-gray-500 h-12 w-12 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white p-1">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="rounded-lg p-3 w-full border-gray-500 border-2 text-sm text-white">
                    {messageses.content}
                </p>
              </div>
              ) : (
              // <div>{messageses.content} ARRA</div>
              <div className="flex gap-x-2">
                <div className="bg-teal-500 h-12 w-12 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white p-1">
                    <path d="M16.5 7.5h-9v9h9v-9Z" />
                    <path fillRule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="rounded-lg p-3 w-full border-teal-500 border-2 text-sm text-white">
                    {messageses.content}
                </p>
              </div>
              )
            }
          </div>
        ))}
      </div>
    ) : (
      <div className="w-full flex justify-center pt-32">
        <h1 className="font-bold text-blue-500 text-2xl">
          Utilize the input field below ⬇️
        </h1>
      </div>
    )}

    <form onSubmit={handleSubmit} className="p-5 fixed bottom-0 left-0 w-[75%] mx-auto right-0 bg-neutral-800">
      <div className="relative flex items-center">
        <ReactTextareaAutosize
          tabIndex={0}
          required
          rows={1}
          value={input}
          onChange={handleInputChange}
          autoFocus
          placeholder="Send message..."
          spellCheck={false}
          className=  "w-full focus:outline-none p-5 pr-16 rounded-xl bg-neutral-600"  
        />
        <button type="submit" className="absolute bg-teal-500 p-2 rounded-lg right-0 mr-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-black-900">
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
          </svg>
        </button>
      </div>
    </form>
  </div>;
}
