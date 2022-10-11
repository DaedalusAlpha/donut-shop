export interface Donut {
  count: number;
  results: Result[];
}

export interface Result {
  id: number;
  ref: string;
  name: string;
  photo: string;
  photo_attribution: string;
  detail: DonutDetail;
}

export interface DonutDetail {
  id: number;
  ref: string;
  name: string;
  calories: number;
  extras: string[];
  photo: string;
  photo_attribution: string;
}

export interface CartItem {
  donut: DonutDetail;
  quantity: number;
}
