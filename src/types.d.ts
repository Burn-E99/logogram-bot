export type LogosAction = {
  name: string;
  description: string;
  imageId: number;
  type: string;
  uses: number;
  duration?: number;
  cast: number;
  recast: number;
  jobs: Array<string>;
  combinations: Array<Array<string>>;
};
