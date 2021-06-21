import { not } from '@ember/object/computed';
import Controller from '@ember/controller';
import { debug } from '@ember/debug';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  boundToggle = false;
  bV2 = 'ho';
  toggleLabelValue = false;

  @not('toggleLabelValue')
  notToggleLabelValue;

  @action
  checkboxToggled(toggled, toggledBy) {
    this.setProperties({
      toggled,
      toggledBy,
    });
  }

  @action
  clicked(target, hash) {
    if (hash.code === 'toggled') {
      debug('toggled: ', hash);
    } else {
      debug('suggestion: ', hash);
    }
    this.set(target, hash.newValue);
  }

  @action
  rejected() {
    return false;
  }

  @action
  notToggleLabelTest(value) {
    this.set('toggleLabelValue', !value);
  }

  @action
  toggleLabelTest(value) {
    this.set('toggleLabelValue', value);
  }
}
