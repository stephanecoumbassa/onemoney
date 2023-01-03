export interface Income {
  id?: number;
  qty?: number;
  total?: number;
  tva?: number;
  description?: string;
  amount: number;
  datecreated?: string;
  dateupdated?: string;
  category?: string;
}

export interface Friend {
  id?: number;
  name: string;
  age: number;
}

export interface Category {
  id?: number;
  name: string;
  type?: string;
  icon?: string;
}
