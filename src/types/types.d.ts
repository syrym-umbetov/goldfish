type Game = {
  active: boolean;
  artists: string[];
  average_learning_complexity: number;
  average_strategy_complexity: number;
  average_user_rating: number;
  categories: idPlusURL[];
  comment_count: number;
  commentary: string;
  description: string;
  description_preview: string;
  designers: DesignersPublishers;
  developers: [];
  discount: string;
  edit_url: string;
  faq: string;
  handle: string;
  historical_low_prices: {
    country: string;
    data: string;
    isLow: boolean;
    price: number;
  }[];
  id: string;
  image_url: string;
  images: Images;
  is_historical_low: boolean;
  links: number;
  listing_clicks: number;
  lists: number;
  matches_specs?: null;
  max_players: number;
  max_playtime: number;
  mechanics: idPlusURL[];
  mentions: number;
  min_age: number;
  min_players: number;
  min_playtime: number;
  msrp: number;
  msrp_text: string;
  msrps: { country: string; price: number };
  name: string;
  names: [];
  num_distributors: number;
  num_user_complexity_votes: number;
  numb_user_ratings: number;
  official_url: string;
  players: string;
  plays: number;
  playtime: string;
  price: string;
  price_au: string;
  price_ca: string;
  price_text: string;
  price_uk: string;
  primary_designer: idPlusURL;
  primary_publisher: idPlusURL;
  publishers: DesignersPublishers[];
  rank: number;
  related_as: [];
  related_to: [];
  rules_url?: string;
  sell_sheet_url?: string;
  sku_objects: Sku[];
  skus: string[];
  specs: [];
  store_images_url?: null;
  tags: string[];
  thumb_url: string;
  trending_rank: number;
  type: string;
  upc: string;
  url: string;
  visits: number;
  year_published: number;
};

type Images = {
  large?: string;
  medium?: string;
  original?: string;
  small?: string;
  thumb?: string;
};

type idPlusURL = {
  id: string;
  name?: string;
  url: string;
};

type DesignersPublishers = {
  id: string;
  num_games?: number;
  score: number;
  url: number;
  images: Images;
  game: {};
};

type Sku = {
  name: string;
  sku: string;
};
