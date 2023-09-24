import React from 'react';
import {Metadata} from 'next';
import GameComponent from '@/app/game/game-component';


export const metadata: Metadata = {
  title: "Game",
};

export default function Game() {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = `/game-build/glide.loader.js`;
  //   script.async = true;
  //   document.append(script);
  // }, []);
 return (
     <GameComponent/>
 )
}