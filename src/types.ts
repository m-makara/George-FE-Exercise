export type ExchangeResponse = {
  fx: {
    currency: string;
    nameI18N?: string;
    exchangeRate?: {
      buy: number;
      middle: number;
      sell: number;
    };
  }[];
};

export type ExchnageData = {
  currency: string;
  name?: string;
  exchangeRate: number;
  flagCode: string;
};

export type ExchangeTransformedResponse = {
  data: ExchnageData[];
};
