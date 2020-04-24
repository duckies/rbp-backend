export interface RaiderIOCharacter {
  name: string;
  race: string;
  class: string;
  active_spec_name: string;
  active_spec_role: string;
  gender: string;
  faction: string;
  achievement_points: number;
  honorable_kills: number;
  thumbnail_url: string;
  region: string;
  realm: string;
  profile_url: string;
  profile_banner: string;
  raid_progression?: any;
  gear?: { item_level_equipped: number; item_level_total: number; artifact_traits: number };
  mythic_plus_scores_by_season?: RaiderIOSeason[];
}

export interface RaiderIOSeason {
  season: string;
  scores: {
    all: number;
    dps: number;
    healer: number;
    tank: number;
    spec_0: number;
    spec_1: number;
    spec_2: number;
    spec_3: number;
  };
}