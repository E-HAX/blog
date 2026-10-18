import { basic, initNavbar, initTopbar } from './modules/layouts';
import {
  loadImg,
  imgPopup,
  initClipboard,
  loadMermaid
} from './modules/components';

loadImg();
imgPopup();
initNavbar();
initTopbar();
initClipboard();
loadMermaid();
basic();
