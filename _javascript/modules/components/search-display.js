/**
 * Open / close the search dialog and keep its hints and results in sync.
 */

const $dialog = document.getElementById('search-dialog');
const $triggers = document.querySelectorAll('.search-trigger');
const $btnCancel = document.getElementById('search-cancel');
const $input = document.getElementById('search-input');
const $results = document.getElementById('search-results');
const $hints = document.getElementById('search-hints');

const UNLOADED = 'd-none';
const SCROLL_LOCK = 'overflow-hidden';

function lockScroll(enable) {
  document.documentElement.classList.toggle(SCROLL_LOCK, enable);
}

function open() {
  if ($dialog.open) {
    return;
  }

  $dialog.showModal();
  lockScroll(true);
  $input.focus();
}

function reset() {
  $input.value = '';
  $results.innerHTML = '';
  $hints.classList.remove(UNLOADED);
  lockScroll(false);
}

function isTyping(target) {
  return (
    target instanceof HTMLElement &&
    (target.isContentEditable ||
      ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))
  );
}

export function displaySearch() {
  $triggers.forEach((trigger) => {
    trigger.addEventListener('click', open);
  });

  $btnCancel.addEventListener('click', () => $dialog.close());

  /* Close when clicking on the backdrop (outside of the panel) */
  $dialog.addEventListener('click', (e) => {
    if (e.target === $dialog) {
      $dialog.close();
    }
  });

  $dialog.addEventListener('close', reset);

  document.addEventListener('keydown', (e) => {
    const isShortcut =
      (e.key === '/' && !isTyping(e.target)) ||
      (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey));

    if (isShortcut) {
      e.preventDefault();
      open();
    }
  });

  /* Esc in a search field would only clear it, close the dialog right away */
  $input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      $dialog.close();
    }
  });

  $input.addEventListener('input', () => {
    $hints.classList.toggle(UNLOADED, $input.value !== '');
  });
}
