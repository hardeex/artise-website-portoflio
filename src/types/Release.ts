export interface Release {
  title: string;
  year: number;
  tracks: number;
  type: "single" | "ep" | "album";
  spotifyUrl?: string;
  appleMusicUrl?: string;
  featured?: boolean;
  imageUrl?: string;
  color?: string;
}
