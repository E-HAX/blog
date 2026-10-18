const ATTR_MENU_OPEN = 'data-menu-open';
const ATTR_SCROLLED = 'data-scrolled';

const $navbar = document.getElementById('navbar');
const $toggle = document.getElementById('nav-toggle');
const $menu = document.getElementById('nav-menu');

class NavMenu {
  static get isOpen() {
    return $navbar.hasAttribute(ATTR_MENU_OPEN);
  }

  static toggle(open = !this.isOpen) {
    $navbar.toggleAttribute(ATTR_MENU_OPEN, open);
    $toggle.setAttribute('aria-expanded', String(open));
  }
}

function watchScroll() {
  const update = () => {
    $navbar.toggleAttribute(ATTR_SCROLLED, window.scrollY > 8);
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
}

export function initNavbar() {
  $toggle.addEventListener('click', () => NavMenu.toggle());

  $menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      NavMenu.toggle(false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && NavMenu.isOpen) {
      NavMenu.toggle(false);
      $toggle.focus();
    }
  });

  document.addEventListener('click', (e) => {
    if (NavMenu.isOpen && !$navbar.contains(e.target)) {
      NavMenu.toggle(false);
    }
  });

  watchScroll();
}
