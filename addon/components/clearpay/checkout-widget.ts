import { action } from '@ember/object';
import { isNone } from '@ember/utils';
import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

interface ClearpayCheckoutWidgetComponentArgs {
  amount: string;
  onReady?: (event: any) => void;
  onChange?: (event: any) => void;
  onError?: (event: any) => void;
}

interface Params {
  target: string;
  locale: string;
  amount: { amount: string; currency: string };
  onReady?: (event: any) => void;
  onChange?: (event: any) => void;
  onError?: (event: any) => void;
}

export default class ClearpayCheckoutWidgetComponent extends Component<ClearpayCheckoutWidgetComponentArgs> {
  /**
   *
   */
  get id() {
    return guidFor(this);
  }

  /**
   *
   * @param id
   */
  @action
  onDidInsert(id: string) {
    let params: Params = {
      target: `#${id}`,
      locale: 'en-GB',
      amount: { amount: this.args.amount, currency: 'GBP' },
    };

    if (!isNone(this.args.onReady)) {
      params['onReady'] = this.args.onReady;
    }

    if (!isNone(this.args.onChange)) {
      params['onChange'] = this.args.onChange;
    }

    if (!isNone(this.args.onError)) {
      params['onError'] = this.args.onError;
    }

    window.afterpayWidget = new AfterPay.Widgets.PaymentSchedule(params);
  }
}
