import React from "react";
import { Cloud, renderSimpleIcon } from "react-icon-cloud";

import * as AllIcons from "simple-icons";

function SkillsSphere() {
  let background = "#fff";

  const rootStyle = {
    top: 0,
    left: 0,
    right: 0,
    // height: "200vh",
    // position: "absolute",
  };

  const containerProps = {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      // paddingTop: 40,
    },
  };

  const canvasProps = {};

  const IconATags = [
    "siTypescript",
    "siJavascript",
    "siNextdotjs",
    "siReact",
    "siRedux",
    "siReactquery",
    "siMobx",
    "siExpress",
    "siHtml5",
    "siCss3",
    "siSass",
    "siBootstrap",
    "siTailwindcss",
    "siAntdesign",
    "siPostman",
    "siMongodb",
    "siFirebase",
    "siJenkins",
    "siEslint",
    "siStylelint",
    "siRancher",
    "siVercel",
    "siNetlify",
    "siGit",
    "siJira",
    "siGithub",
    "siGitlab",
    "siVisualstudiocode",
    "siFigma",
    "siGulp",
    "siVite",
    "siWebpack",
    "siStorybook",
    "siPlaywright",
    "siJest",
    "siTestinglibrary",
  ].map((s) =>
    renderSimpleIcon({
      icon: AllIcons[s],
      minContrastRatio: background === "#fff" ? 1 : 2,
      bgHex: background,
      size: 40,
      fallbackHex: background === "#fff" ? "#000" : "#fff",
      aProps: {
        href: undefined,
        target: undefined,
        rel: undefined,
        onClick: (e) => e.preventDefault(),
      },
    })
  );

  const options = {
    // activateAudio: string
    // activeCursor: string
    // altImage: boolean
    // animTiming: 'Smooth' | 'Linear',
    // audioIcon: boolean
    // audioIconDark: boolean
    // audioIconSize: number
    // audioIconThickness: number
    // audioVolume: number
    // bgColor: null | string
    // bgOutlineThickness: number
    // bgRadius: number
    // centreFunc: any
    // centreImage: any
    clickToFront: 500,
    // decel: number
    depth: 1,
    // dragControl: boolean
    // dragThreshold: number
    // fadeIn: number
    // frontSelect: boolean
    // hideTags: boolean
    // imageAlign: 'centre' | 'left' | 'right'
    // imageMode: null | 'image' | 'text' | 'both'
    // imagePadding: number
    // imagePosition: 'top' | 'bottom' | 'left' | 'right'
    // imageRadius: number | string
    imageScale: 2,
    // imageVAlign: 'top' | 'bottom' | 'middle'
    initial: [0.1, -0.1],
    // interval: number
    // lock: null | 'x' | 'y' | 'xy'
    // maxBrightness: number
    maxSpeed: 0.08,
    // minBrightness: number
    // minSpeed: number
    minTags: 0 - 200,
    // noMouse: boolean
    // noSelect: boolean
    // noTagsMessage: string
    // offsetX: number
    // offsetY: number
    outlineColour: "#0000",
    // outlineDash: number
    // outlineDashSpace: number
    // outlineIncrease: number
    // outlineMethod: 'outline' | 'classic' | 'block' | 'colour' | 'size' | 'none'
    // outlineOffset: number
    // outlineRadius: number
    // outlineThickness: number
    // padding: number
    // pinchZoom: boolean
    // pulsateTime: number
    // pulstateTo: number
    // radiusX: number
    // radiusY: number
    // radiusZ: number
    // repeatTagsTags: 0 - 64
    reverse: true,
    // scrollPause: boolean
    // shadow: string
    // shadowBlur: number
    // shadowOffset: [number,number] | number[]
    // shape: 'sphere' | 'vring' | 'hcylinder' | 'vcylinder' | 'hring',
    // shuffleTags: boolean
    // splitWidth: number
    // stretchX: number
    // stretchY: number
    // textAlign: 'centre' | 'left' | 'right'
    // textColour: string
    // textFont: string
    // textHeight: number
    // textVAlign: 'top' | 'bottom' | 'middle'
    tooltip: "native", // null | 'div'
    // tooltipClass: string
    tooltipDelay: 0,
    // txtOpt: boolean
    // txtScale: number
    // weight: boolean
    // weightFrom: any
    // weightGradient: any
    // weightMode: 'outline',
    // weightSize: number
    // weightSizeMax: number | null
    // weightSizeMin: number | null
    wheelZoom: false,
    // zoom: number
    // zoomMax: number
    // zoomMin: number
    // zoomStep: number
    freezeActive: true,
    freezeDecel: true,
  };

  return (
    <div style={rootStyle}>
      <Cloud
        containerProps={containerProps}
        canvasProps={canvasProps}
        options={options}
      >
        {/* <a href="javascript:void(0)" key={5}>
          <img src={"/assets/icons/react.png"} alt="" width="40" height="40" />
        </a> */}

        {IconATags}
      </Cloud>
    </div>
  );
}

export default SkillsSphere;
