declare module "playback" {
  export interface IPlaying {
    name: string;
    artist: string;
    album: string;
  }

  export default class Playback {
    public static playing: IPlaying;
  }
}
