"use client";

import Loading from "@components/custom/Loading";
import cn from "cnfast";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Change this line at the top of your component file:
const baseUrl =
  typeof window !== "undefined" ? process.env.NEXT_PUBLIC_SPOTIFY_URL : "";

const SpotifyWidget = () => {
  const [imageUrl, setImageUrl] = useState(baseUrl);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setImageUrl(`${baseUrl}&t=${Date.now()}`);

    const interval = setInterval(() => {
      setImageUrl(`${baseUrl}&t=${Date.now()}`);
    }, 1000);
    setIsLoading(false);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("flex flex-col items-center gap-5")}>
      [ {`Currently_listening_to`.toUpperCase()} ]
      <div
        className={cn(
          "relative flex h-32.5 w-97.5 flex-col border border-foreground/65",
        )}
      >
        {isLoading ? (
          <div className="flex h-full w-full items-center justify-center">
            <Loading />
          </div>
        ) : (
          <Image
            src={imageUrl}
            alt="My Live Spotify Status"
            className={cn("object-fit")}
            loading="lazy"
            unoptimized
            fill
          />
        )}
      </div>
      {isLoading ? (
        <p>Waiting on spotify</p>
      ) : (
        <Link
          href="https://spotify-github-profile.kittinanx.com/api/view?uid=12150179423&redirect=true"
          target="_blank"
          className="rounded-none bg-von-teal px-2 py-1 font-bold font-mono text-von-black transition-all duration-200 hover:rounded-lg hover:bg-von-teal/30 hover:text-von-white"
        >
          [ LISTEN_WITH_ME ]
        </Link>
      )}
    </div>
  );
};

export default SpotifyWidget;
