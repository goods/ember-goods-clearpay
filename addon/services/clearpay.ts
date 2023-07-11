import Service from '@ember/service';

export default class ClearpayService extends Service {
  // To avoid triggering browser anti-popup rules, the AfterPay.open()
  // function must be directly called inside the click event listener

  /**
   *
   */
  open() {
    AfterPay.initialize({ countryCode: 'GB' });
    AfterPay.open();
  }

  /**
   *
   * @param token
   * @param onSuccess
   * @param onCancel
   */
  process(
    token: string,
    onSuccess: (event: any) => void,
    onCancel: (event: any) => void
  ) {
    AfterPay.onComplete = function (event: any) {
      if (event.data.status == 'SUCCESS') {
        onSuccess(event);
      } else {
        onCancel(event);
      }
    };

    //Get token from payment metadata
    AfterPay.transfer({ token: token });
  }
}
