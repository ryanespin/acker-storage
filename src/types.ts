export interface InventoryItemProps {
  appellation?: string;
  bottleSize?: 'bottle' | 'half-bottle' | 'magnum' | 'Salmanazar';
  box?: number | string;
  condition?: {
    short?: string;
    long?: string;
  }
  designation?: string;
  estimate?: {
    low?: number;
    high?: number;
  }
  imageSrc?: string;
  latestAddition?: Date | string | number;
  producer?: string;
  quantity?: number;
  region?: string;
  source?: string;
  wineName?: string;
  vintage?: number;
}