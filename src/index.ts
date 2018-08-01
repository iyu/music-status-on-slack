import { isDeepStrictEqual } from "util";

import { WebClient } from "@slack/client";
import { default as playback, IPlaying } from "playback";

const INTERVAL: number = 5000;
const EMOJI_LIST: string[] = [":musical_note:", ":notes:"];

const token: string|undefined = process.env.SLACK_TOKEN;
const web: WebClient = new WebClient(token);
let current: IPlaying;
let count: number = 0;

setInterval(() => {
  const playing: IPlaying = playback.playing;
  if (!playing || !playing.name || isDeepStrictEqual(playing, current)) {
    return;
  }
  current = playing;
  count += 1;

  web.users.profile.set({
    profile: JSON.stringify({
      status_emoji: EMOJI_LIST[count % 2],
      status_text: `${current.name} / ${current.artist} -- ${current.album}`,
    }),
  })
    .then((res) => {
      console.log({ ok: res.ok }, current);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}, INTERVAL);
