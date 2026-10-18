import { basic, initTopbar, initNavbar } from './modules/layouts';

import {
  loadImg,
  imgPopup,
  initLocaleDatetime,
  initClipboard,
  initToc,
  loadMermaid
} from './modules/components';

loadImg();
initToc();
imgPopup();
initNavbar();
initLocaleDatetime();
initClipboard();
initTopbar();
loadMermaid();
basic();
