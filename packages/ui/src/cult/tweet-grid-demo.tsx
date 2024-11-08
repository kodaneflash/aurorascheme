"use client"

import * as React from "react"
import { TweetGrid } from "./tweetgrid"

const exampleTweets = [
  "1742983975340327184",
  "1743049700583116812",
  "1754067409366073443",
  "1753968111059861648",
  "1754174981897118136",
  "1743632296802988387",
  "1754110885168021921",
  "1760248682828419497",
  "1760230134601122153",
  "1760184980356088267",
]

export function TweetGridDemo() {
  return (
    <div className="container mx-auto animate-in fade-in delay-200 duration-1000 slide-in-from-top-16 fill-mode-both">
      <div className="flex flex-col items-center space-y-16">
        <div className="flex flex-col gap-3">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-foreground text-center">
            Praises for <span className="gradienttext">Founder Academy</span>
          </h2>
          <p className="text-clean-subtext">
            What developers and founders of top companies around the internet are saying about Reweb.
          </p>
        </div>
        
        <div className="flex items-center justify-center w-full">
          <TweetGrid
            className="w-full md:w-auto"
            tweets={exampleTweets}
            columns={2}
            spacing="lg"
          />
        </div>
      </div>
    </div>
  )
} 