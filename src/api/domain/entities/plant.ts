interface Frequency {
  times: number;
  repeat_every: string;
}

export interface Plant {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: string[];
  frequency: Frequency;
}
