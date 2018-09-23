import { helper } from '@ember/component/helper';
import { stateLookup } from '../enumerations/states';

export function lookupStateLabel(params) {
  const lookupId = params[0];
  // categories is 1 index based
  return stateLookup[lookupId] ? stateLookup[lookupId] : '';
}

export default helper(lookupStateLabel);
