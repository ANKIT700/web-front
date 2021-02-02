//check value is undefined, null or empty
export function isUndefinedNullOrEmpty(value) {
    if (value === undefined || value === '' || value === null) {
      return true;
    }
    return false;
  }