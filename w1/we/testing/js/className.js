function addClass(el, newClass) {
  // if class already exists, return;
  if (el.className.indexOf(newClass) !== -1) {
    return;
  }

  // if class isn't empty, add class with a space
  if (el.className !== '') {
    newClass = ` ${newClass}`;
  }

  // else just add class;
  el.className += newClass;
}

module.exports = addClass;