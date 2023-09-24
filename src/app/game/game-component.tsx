"use client";
import React from "react";
import {Unity, useUnityContext} from "react-unity-webgl";

export default function GameComponent() {
  const {unityProvider} = useUnityContext({
    loaderUrl: "game-build/glide.loader.js",
    dataUrl: "game-build/glide.data.unityweb",
    frameworkUrl: "game-build/glide.framework.js.unityweb",
    codeUrl: "game-build/glide.wasm.unityweb",
  });

  return <Unity unityProvider={unityProvider}
                style={{position: "absolute", width: '100%', height: "100%", left: 0, top: 0}}/>;
}