// Types for compiled templates
declare module '@goods/ember-goods-clearpay/templates/*' {
  import { TemplateFactory } from 'ember-cli-htmlbars';

  const tmpl: TemplateFactory;
  export default tmpl;
}

declare var AfterPay: any;

interface Window {
  afterpayWidget: any;
}
