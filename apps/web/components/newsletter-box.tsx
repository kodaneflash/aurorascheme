'use client';

import { useState } from 'react';
import * as React from 'react';

interface NewsletterBoxProps {
  title?: string;
  description?: string;
}

export function NewsletterBox({
  title = 'Join 60,000+ Creators',
  description = 'Subscribe to the Creator Science newsletter for real-life experiments, expert interviews, and evidence-backed advice every week.',
}: NewsletterBoxProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsLoading(false);
  };

  return (
    <article
      className="
        text-zinc-400 
        items-center 
        text-lg 
        font-light 
        grid
        grid-cols-[[full-start]_55px_[wide-start]_172px_[main-start]_680px_[main-end]_172px_[wide-end]_55px_[full-end]]
        grid-rows-[52px_64px_24px_130px_24px_40px]
        py-16 
        px-6 
        text-center 
        max-w-none 
        bg-stone-900 
        md:pl-8
        md:pr-8 
        md:pt-24 
        md:pb-24
        relative
        before:absolute
        before:inset-0
        before:bg-[radial-gradient(#404040_1px,transparent_1px)]
        before:bg-[size:24px_24px]
        before:opacity-20
        before:pointer-events-none
        min-h-[600px]
      "
      style={{
        wordBreak: "break-word",
      }}
    >
      <div className="col-start-[main-start] col-end-[main-end] flex flex-col items-center mx-auto max-w-3xl mt-48 ml-16">
        <h2 className="text-neutral-200 text-4xl mb-8">
          {title}
        </h2>

        <p className="md:mb-20 max-w-2xl text-lg">
          {description}
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-xl mt-12">
          <div className="flex flex-col space-y-5">
            <div className="w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white cursor-text py-3 pl-5 pr-3 w-full h-12 border-2 border-zinc-300 border-solid rounded-3xl"
                placeholder="youremail@website.com"
                required
              />
            </div>
            <div className="w-full">
              <button
                type="submit"
                disabled={isLoading}
                className="text-white bg-blue-600 items-center cursor-pointer justify-center px-5 flex w-full h-12 rounded-3xl overflow-hidden hover:bg-blue-700 transition-colors"
              >
                {isLoading ? (
                  <div className="flex space-x-2 justify-center">
                    <div className="bg-white opacity-30 w-2 h-2 rounded-full animate-bounce" />
                    <div className="bg-white opacity-30 w-2 h-2 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="bg-white opacity-30 w-2 h-2 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                ) : (
                  <span className="py-3">Subscribe</span>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </article>
  );
} 