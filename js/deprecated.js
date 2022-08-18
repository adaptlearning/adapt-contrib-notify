import Adapt from 'core/js/adapt';
import logging from 'core/js/logging';
import notify from 'core/js/notify';

Object.defineProperties(Adapt, {
  notify: {
    get() {
      logging.deprecated('Adapt.notify, please use core/js/notify directly');
      return notify;
    }
  }
});
