import { Billing } from '../common/types';

type MetadataType = Record<string, any> | undefined;

export interface PaymentMethodResource<MetaData = MetadataType> {
  data: {
    id: string;
    type: 'payment_method';
    attributes: {
      livemode: boolean;
      type: 'card';
      billing?: Billing;
      details: {
        last4: string;
        exp_month: number;
        exp_year: number;
      };

      metadata: MetaData;
    };
  };
}

export interface CreatePaymentMethodParams<MetaData = MetadataType> {
  data: {
    attributes: {
      type: 'card';
      details: {
        card_number: string;
        exp_month: number;
        exp_year: number;
        cvc: string;
      };
      billng?: Billing;

      metadata?: MetaData;
    };
  };
}

export interface RetrievePaymentMethodParams {
  id: string;
}
