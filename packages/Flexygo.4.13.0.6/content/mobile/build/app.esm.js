import { b as bootstrapLazy } from './index-86ac49ff.js';
import { p as patchBrowser, g as globalScripts } from './app-globals-005a2d90.js';
import './ionic-global-0f98fe97.js';
import './webapi-79a1d3db.js';
import './conftoken-7e3c18eb.js';
import './jquery-5df58adb.js';
import './utils-16079bfd.js';
import './helpers-719f4c54.js';
import './animation-10ea33c3.js';
import './index-7173f7a2.js';
import './ios.transition-95375ac9.js';
import './md.transition-6d74e584.js';
import './cubic-bezier-93f47170.js';
import './index-7fe827c3.js';
import './index-b40d441b.js';
import './hardware-back-button-aacf3d12.js';
import './index-50651ccc.js';
import './overlays-5302658e.js';
import './whiteboard-658b1b9f.js';
import './parser-8aed96de.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy(JSON.parse("[[\"flx-imagemanager\",[[0,\"flx-imagemanager\",{\"object\":[1544],\"objectid\":[1544],\"defaults\":[1544],\"hasGallery\":[32],\"classDescription\":[32],\"refresh\":[64]}]]],[\"flx-list\",[[0,\"flx-list\",{\"object\":[1544],\"pageName\":[1544,\"page-name\"],\"filter\":[1544],\"defaults\":[1544],\"additional\":[1032],\"orderby\":[1032],\"pageModifier\":[1026,\"page-modifier\"],\"modal\":[4],\"body\":[32],\"footer\":[32],\"header\":[32],\"title\":[32],\"lastItem\":[32],\"refresh\":[64]}]]],[\"flx-documentmanager\",[[0,\"flx-documentmanager\",{\"object\":[1544],\"objectid\":[1544],\"defaults\":[1544],\"categoryId\":[1544,\"category-id\"],\"refresh\":[64]}]]],[\"app-root\",[[0,\"app-root\",{\"menuItems\":[32],\"profileName\":[32],\"avatar\":[32],\"profile\":[32],\"menuChilds\":[32],\"refresh\":[64]},[[8,\"popstate\",\"handleHardwareBackbutton\"]]]]],[\"flx-edit\",[[0,\"flx-edit\",{\"object\":[1544],\"pageName\":[1544,\"page-name\"],\"filter\":[1544],\"defaults\":[1544],\"modal\":[4],\"body\":[32],\"header\":[32],\"footer\":[32],\"title\":[32],\"refresh\":[64]}]]],[\"flx-dbcombo\",[[0,\"flx-dbcombo\",{\"value\":[1544],\"text\":[1544],\"name\":[1544],\"placeHolder\":[1544,\"place-holder\"],\"disabled\":[1540],\"required\":[1544],\"dataMsgRequired\":[1544,\"data-msg-required\"],\"min\":[1544],\"max\":[1544],\"dataMsgMin\":[1544,\"data-msg-min\"],\"dataMsgMax\":[1544,\"data-msg-max\"],\"class\":[1544],\"valuefield\":[1544],\"displayfield\":[1544],\"objectname\":[1544],\"sqlsentence\":[1032],\"sqlfilter\":[1032],\"orderby\":[1032],\"filter\":[1032],\"additional\":[1544],\"clearbutton\":[1540],\"tablename\":[1544],\"autoselect\":[1544],\"table\":[32],\"open\":[64],\"refresh\":[64]}]]],[\"flx-sync\",[[0,\"flx-sync\",{\"lastSync\":[32],\"advOpt\":[32],\"refresh\":[64]}]]],[\"flx-view\",[[0,\"flx-view\",{\"object\":[8],\"pageName\":[8,\"page-name\"],\"filter\":[8],\"defaults\":[8],\"modal\":[4],\"body\":[32],\"header\":[32],\"footer\":[32],\"title\":[32],\"refresh\":[64]}]]],[\"flx-home\",[[0,\"flx-home\",{\"body\":[32],\"footer\":[32],\"header\":[32],\"title\":[32],\"refresh\":[64]}]]],[\"flx-login\",[[0,\"flx-login\",{\"apps\":[8],\"modal\":[8],\"url\":[32],\"user\":[32],\"pass\":[32],\"logo\":[32],\"sameUrlAndUser\":[32],\"oldUrl\":[32],\"oldUser\":[32],\"refresh\":[64],\"navToSelectedApp\":[64],\"closeAppSelector\":[64]}]]],[\"flx-usermenu\",[[0,\"flx-usermenu\",{\"advOpt\":[32],\"profileName\":[32],\"avatar\":[32],\"profile\":[32]}]]],[\"flx-segment\",[[0,\"flx-segment\",{\"value\":[1544],\"name\":[1544],\"placeHolder\":[1544,\"place-holder\"],\"disabled\":[1540],\"required\":[1544],\"dataMsgRequired\":[1544,\"data-msg-required\"],\"min\":[1544],\"max\":[1544],\"dataMsgMin\":[1544,\"data-msg-min\"],\"dataMsgMax\":[1544,\"data-msg-max\"],\"class\":[1544],\"valuefield\":[1544],\"displayfield\":[1544],\"sqlsentence\":[1032],\"orderby\":[1032],\"filter\":[1032],\"additional\":[1544],\"multiple\":[1544],\"table\":[32],\"refresh\":[64],\"open\":[64]}]]],[\"flx-combo\",[[0,\"flx-combo\",{\"value\":[1544],\"name\":[1544],\"placeHolder\":[1544,\"place-holder\"],\"disabled\":[1540],\"required\":[1544],\"dataMsgRequired\":[1544,\"data-msg-required\"],\"min\":[1544],\"max\":[1544],\"dataMsgMin\":[1544,\"data-msg-min\"],\"dataMsgMax\":[1544,\"data-msg-max\"],\"class\":[1544],\"valuefield\":[1544],\"displayfield\":[1544],\"sqlsentence\":[1032],\"orderby\":[1032],\"filter\":[1032],\"additional\":[1544],\"multiple\":[1544],\"autorefresh\":[1540],\"autoselect\":[1544],\"prerenderValue\":[32],\"table\":[32],\"refresh\":[64],\"open\":[64]}]]],[\"flx-online\",[[0,\"flx-online\",{\"navigateFun\":[1544,\"navigate-fun\"],\"pageTypeId\":[1544,\"page-type-id\"],\"objectName\":[1544,\"object-name\"],\"objectWhere\":[1544,\"object-where\"],\"defaults\":[1544],\"excludehist\":[1544],\"filtersValues\":[1544,\"filters-values\"],\"externalUrl\":[1544,\"external-url\"],\"report\":[1544],\"url\":[32],\"getUrl\":[64],\"refresh\":[64]}]]],[\"ion-select-popover\",[[2,\"ion-select-popover\",{\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"message\":[1],\"options\":[16]},[[0,\"ionChange\",\"onSelect\"]]]]],[\"flx-navbutton\",[[0,\"flx-navbutton\",{\"type\":[1537],\"object\":[1537],\"pagename\":[1537],\"filter\":[1537],\"defaults\":[1537],\"transfer\":[1540],\"root\":[1540]},[[2,\"click\",\"handleClick\"]]]]],[\"flx-scripts\",[[0,\"flx-scripts\",{\"scripts\":[32],\"refresh\":[64]}]]],[\"flx-styles\",[[0,\"flx-styles\",{\"style\":[32],\"refresh\":[64]}]]],[\"ion-back-button\",[[33,\"ion-back-button\",{\"color\":[513],\"defaultHref\":[1025,\"default-href\"],\"disabled\":[516],\"icon\":[1],\"text\":[1],\"type\":[1],\"routerAnimation\":[16]}]]],[\"ion-picker\",[[34,\"ion-picker\",{\"overlayIndex\":[2,\"overlay-index\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"buttons\":[16],\"columns\":[16],\"cssClass\":[1,\"css-class\"],\"duration\":[2],\"showBackdrop\":[4,\"show-backdrop\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"animated\":[4],\"htmlAttributes\":[16],\"presented\":[32],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64],\"getColumn\":[64]}]]],[\"pwa-camera-modal\",[[1,\"pwa-camera-modal\",{\"present\":[64],\"dismiss\":[64]}]]],[\"ion-card\",[[33,\"ion-card\",{\"color\":[513],\"button\":[4],\"type\":[1],\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16],\"target\":[1]}]]],[\"ion-chip\",[[33,\"ion-chip\",{\"color\":[513],\"outline\":[4],\"disabled\":[4]}]]],[\"ion-item-option\",[[33,\"ion-item-option\",{\"color\":[513],\"disabled\":[4],\"download\":[1],\"expandable\":[4],\"href\":[1],\"rel\":[1],\"target\":[1],\"type\":[1]}]]],[\"ion-popover\",[[34,\"ion-popover\",{\"delegate\":[16],\"overlayIndex\":[2,\"overlay-index\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"component\":[1],\"componentProps\":[16],\"keyboardClose\":[4,\"keyboard-close\"],\"cssClass\":[1,\"css-class\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"event\":[8],\"showBackdrop\":[4,\"show-backdrop\"],\"translucent\":[4],\"animated\":[4],\"htmlAttributes\":[16],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]}]]],[\"ion-reorder\",[[33,\"ion-reorder\",null,[[2,\"click\",\"onClick\"]]]]],[\"ion-tab-button\",[[33,\"ion-tab-button\",{\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"layout\":[1025],\"selected\":[1028],\"tab\":[1],\"target\":[1]},[[8,\"ionTabBarChanged\",\"onTabBarChanged\"]]]]],[\"flx-whiteboard\",[[0,\"flx-whiteboard\",{\"value\":[1544],\"text\":[1544],\"name\":[1544],\"placeHolder\":[1544,\"place-holder\"],\"disabled\":[1544],\"required\":[1544],\"dataMsgRequired\":[1544,\"data-msg-required\"],\"min\":[1544],\"max\":[1544],\"dataMsgMin\":[1544,\"data-msg-min\"],\"dataMsgMax\":[1544,\"data-msg-max\"],\"class\":[1544],\"table\":[32]}]]],[\"ion-badge\",[[33,\"ion-badge\",{\"color\":[513]}]]],[\"ion-card-content\",[[32,\"ion-card-content\"]]],[\"ion-card-header\",[[33,\"ion-card-header\",{\"color\":[513],\"translucent\":[4]}]]],[\"ion-card-subtitle\",[[33,\"ion-card-subtitle\",{\"color\":[513]}]]],[\"ion-card-title\",[[33,\"ion-card-title\",{\"color\":[513]}]]],[\"ion-checkbox\",[[33,\"ion-checkbox\",{\"color\":[513],\"name\":[1],\"checked\":[1028],\"indeterminate\":[1028],\"disabled\":[4],\"value\":[1]}]]],[\"ion-datetime\",[[33,\"ion-datetime\",{\"name\":[1],\"disabled\":[4],\"readonly\":[4],\"min\":[1025],\"max\":[1025],\"displayFormat\":[1,\"display-format\"],\"displayTimezone\":[1,\"display-timezone\"],\"pickerFormat\":[1,\"picker-format\"],\"cancelText\":[1,\"cancel-text\"],\"doneText\":[1,\"done-text\"],\"yearValues\":[8,\"year-values\"],\"monthValues\":[8,\"month-values\"],\"dayValues\":[8,\"day-values\"],\"hourValues\":[8,\"hour-values\"],\"minuteValues\":[8,\"minute-values\"],\"monthNames\":[1,\"month-names\"],\"monthShortNames\":[1,\"month-short-names\"],\"dayNames\":[1,\"day-names\"],\"dayShortNames\":[1,\"day-short-names\"],\"pickerOptions\":[16],\"placeholder\":[1],\"value\":[1025],\"isExpanded\":[32],\"open\":[64]}]]],[\"ion-img\",[[1,\"ion-img\",{\"alt\":[1],\"src\":[1],\"loadSrc\":[32],\"loadError\":[32]}]]],[\"ion-item-options\",[[32,\"ion-item-options\",{\"side\":[1],\"fireSwipeEvent\":[64]}]]],[\"ion-menu-toggle\",[[1,\"ion-menu-toggle\",{\"menu\":[1],\"autoHide\":[4,\"auto-hide\"],\"visible\":[32]},[[32,\"ionMenuChange\",\"visibilityChanged\"],[32,\"ionSplitPaneVisible\",\"visibilityChanged\"]]]]],[\"ion-nav-link\",[[0,\"ion-nav-link\",{\"component\":[1],\"componentProps\":[16],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16]}]]],[\"ion-note\",[[33,\"ion-note\",{\"color\":[513]}]]],[\"ion-progress-bar\",[[33,\"ion-progress-bar\",{\"type\":[1],\"reversed\":[4],\"value\":[2],\"buffer\":[2],\"color\":[513]}]]],[\"ion-range\",[[33,\"ion-range\",{\"color\":[513],\"debounce\":[2],\"name\":[1],\"dualKnobs\":[4,\"dual-knobs\"],\"min\":[2],\"max\":[2],\"pin\":[4],\"snaps\":[4],\"step\":[2],\"ticks\":[4],\"disabled\":[4],\"value\":[1026],\"ratioA\":[32],\"ratioB\":[32],\"pressedKnob\":[32]}]]],[\"ion-reorder-group\",[[0,\"ion-reorder-group\",{\"disabled\":[4],\"state\":[32],\"complete\":[64]}]]],[\"ion-route-redirect\",[[0,\"ion-route-redirect\",{\"from\":[1],\"to\":[1]}]]],[\"ion-router-link\",[[1,\"ion-router-link\",{\"color\":[513],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16],\"target\":[1]}]]],[\"ion-router-outlet\",[[1,\"ion-router-outlet\",{\"mode\":[1025],\"delegate\":[16],\"animated\":[4],\"animation\":[16],\"swipeHandler\":[16],\"commit\":[64],\"setRouteId\":[64],\"getRouteId\":[64]}]]],[\"ion-skeleton-text\",[[1,\"ion-skeleton-text\",{\"animated\":[4]}]]],[\"ion-slide\",[[0,\"ion-slide\"]]],[\"ion-split-pane\",[[33,\"ion-split-pane\",{\"contentId\":[513,\"content-id\"],\"disabled\":[4],\"when\":[8],\"visible\":[32]}]]],[\"ion-tab\",[[1,\"ion-tab\",{\"active\":[1028],\"delegate\":[16],\"tab\":[1],\"component\":[1],\"setActive\":[64]}]]],[\"ion-tab-bar\",[[33,\"ion-tab-bar\",{\"color\":[513],\"selectedTab\":[1,\"selected-tab\"],\"translucent\":[4],\"keyboardVisible\":[32]}]]],[\"ion-tabs\",[[1,\"ion-tabs\",{\"useRouter\":[1028,\"use-router\"],\"selectedTab\":[32],\"select\":[64],\"getTab\":[64],\"getSelected\":[64],\"setRouteId\":[64],\"getRouteId\":[64]}]]],[\"ion-text\",[[1,\"ion-text\",{\"color\":[513]}]]],[\"ion-virtual-scroll\",[[0,\"ion-virtual-scroll\",{\"approxItemHeight\":[2,\"approx-item-height\"],\"approxHeaderHeight\":[2,\"approx-header-height\"],\"approxFooterHeight\":[2,\"approx-footer-height\"],\"headerFn\":[16],\"footerFn\":[16],\"items\":[16],\"itemHeight\":[16],\"headerHeight\":[16],\"footerHeight\":[16],\"renderItem\":[16],\"renderHeader\":[16],\"renderFooter\":[16],\"nodeRender\":[16],\"domRender\":[16],\"totalHeight\":[32],\"positionForItem\":[64],\"checkRange\":[64],\"checkEnd\":[64]},[[9,\"resize\",\"onResize\"]]]]],[\"pwa-action-sheet\",[[1,\"pwa-action-sheet\",{\"header\":[1],\"cancelable\":[4],\"options\":[16],\"open\":[32]}]]],[\"pwa-toast\",[[1,\"pwa-toast\",{\"message\":[1],\"duration\":[2],\"closing\":[32]}]]],[\"flx-sqllist\",[[0,\"flx-sqllist\",{\"filter\":[1544],\"defaults\":[1544],\"additional\":[1544],\"pageElements\":[1538,\"page-elements\"],\"sqlsentence\":[1032],\"params\":[1040],\"orderby\":[1032],\"body\":[32],\"footer\":[32],\"header\":[32],\"refresh\":[64]}]]],[\"flx-imagegallery\",[[0,\"flx-imagegallery\",{\"object\":[1544],\"filter\":[1544],\"opening\":[1540],\"table\":[32],\"refresh\":[64],\"addImage\":[64]}]]],[\"ion-menu\",[[33,\"ion-menu\",{\"contentId\":[513,\"content-id\"],\"menuId\":[513,\"menu-id\"],\"type\":[1025],\"disabled\":[1028],\"side\":[513],\"swipeGesture\":[4,\"swipe-gesture\"],\"maxEdgeStart\":[2,\"max-edge-start\"],\"isPaneVisible\":[32],\"isEndSide\":[32],\"isOpen\":[64],\"isActive\":[64],\"open\":[64],\"close\":[64],\"toggle\":[64],\"setOpen\":[64]},[[32,\"ionSplitPaneVisible\",\"onSplitPaneChanged\"],[2,\"click\",\"onBackdropClick\"],[0,\"keydown\",\"onKeydown\"]]]]],[\"ion-searchbar\",[[34,\"ion-searchbar\",{\"color\":[513],\"animated\":[4],\"autocomplete\":[1],\"autocorrect\":[1],\"cancelButtonIcon\":[1,\"cancel-button-icon\"],\"cancelButtonText\":[1,\"cancel-button-text\"],\"clearIcon\":[1,\"clear-icon\"],\"debounce\":[2],\"disabled\":[4],\"inputmode\":[1],\"enterkeyhint\":[1],\"placeholder\":[1],\"searchIcon\":[1,\"search-icon\"],\"showCancelButton\":[1,\"show-cancel-button\"],\"showClearButton\":[1,\"show-clear-button\"],\"spellcheck\":[4],\"type\":[1],\"value\":[1025],\"focused\":[32],\"noAnimate\":[32],\"setFocus\":[64],\"getInputElement\":[64]}]]],[\"ion-segment-button\",[[33,\"ion-segment-button\",{\"disabled\":[4],\"layout\":[1],\"type\":[1],\"value\":[1],\"checked\":[32]}]]],[\"pwa-camera-modal-instance\",[[1,\"pwa-camera-modal-instance\",null,[[32,\"keyup\",\"handleBackdropKeyUp\"]]]]],[\"ion-app\",[[0,\"ion-app\"]]],[\"ion-avatar\",[[33,\"ion-avatar\"]]],[\"ion-fab-list\",[[1,\"ion-fab-list\",{\"activated\":[4],\"side\":[1]}]]],[\"ion-item-divider\",[[33,\"ion-item-divider\",{\"color\":[513],\"sticky\":[4]}]]],[\"ion-list-header\",[[33,\"ion-list-header\",{\"color\":[513],\"lines\":[1]}]]],[\"ion-nav\",[[1,\"ion-nav\",{\"delegate\":[16],\"swipeGesture\":[1028,\"swipe-gesture\"],\"animated\":[4],\"animation\":[16],\"rootParams\":[16],\"root\":[1],\"push\":[64],\"insert\":[64],\"insertPages\":[64],\"pop\":[64],\"popTo\":[64],\"popToRoot\":[64],\"removeIndex\":[64],\"setRoot\":[64],\"setPages\":[64],\"setRouteId\":[64],\"getRouteId\":[64],\"getActive\":[64],\"getByIndex\":[64],\"canGoBack\":[64],\"getPrevious\":[64]}]]],[\"ion-picker-column\",[[32,\"ion-picker-column\",{\"col\":[16]}]]],[\"ion-radio\",[[33,\"ion-radio\",{\"color\":[513],\"name\":[1],\"disabled\":[4],\"value\":[8],\"checked\":[32],\"buttonTabindex\":[32],\"setFocus\":[64],\"setButtonTabindex\":[64]}]]],[\"ion-radio-group\",[[0,\"ion-radio-group\",{\"allowEmptySelection\":[4,\"allow-empty-selection\"],\"name\":[1],\"value\":[1032]},[[4,\"keydown\",\"onKeydown\"]]]]],[\"ion-route\",[[0,\"ion-route\",{\"url\":[1],\"component\":[1],\"componentProps\":[16],\"beforeLeave\":[16],\"beforeEnter\":[16]}]]],[\"ion-router\",[[0,\"ion-router\",{\"root\":[1],\"useHash\":[4,\"use-hash\"],\"canTransition\":[64],\"push\":[64],\"back\":[64],\"printDebug\":[64],\"navChanged\":[64]},[[8,\"popstate\",\"onPopState\"],[4,\"ionBackButton\",\"onBackButton\"]]]]],[\"ion-segment\",[[33,\"ion-segment\",{\"color\":[513],\"disabled\":[4],\"scrollable\":[4],\"swipeGesture\":[4,\"swipe-gesture\"],\"value\":[1025],\"activated\":[32]}]]],[\"ion-select\",[[33,\"ion-select\",{\"disabled\":[4],\"cancelText\":[1,\"cancel-text\"],\"okText\":[1,\"ok-text\"],\"placeholder\":[1],\"name\":[1],\"selectedText\":[1,\"selected-text\"],\"multiple\":[4],\"interface\":[1],\"interfaceOptions\":[8,\"interface-options\"],\"compareWith\":[1,\"compare-with\"],\"value\":[1032],\"isExpanded\":[32],\"open\":[64]}]]],[\"ion-select-option\",[[1,\"ion-select-option\",{\"disabled\":[4],\"value\":[8]}]]],[\"ion-textarea\",[[34,\"ion-textarea\",{\"fireFocusEvents\":[4,\"fire-focus-events\"],\"color\":[513],\"autocapitalize\":[1],\"autofocus\":[4],\"clearOnEdit\":[1028,\"clear-on-edit\"],\"debounce\":[2],\"disabled\":[4],\"inputmode\":[1],\"enterkeyhint\":[1],\"maxlength\":[2],\"minlength\":[2],\"name\":[1],\"placeholder\":[1],\"readonly\":[4],\"required\":[4],\"spellcheck\":[4],\"cols\":[2],\"rows\":[2],\"wrap\":[1],\"autoGrow\":[4,\"auto-grow\"],\"value\":[1025],\"hasFocus\":[32],\"setFocus\":[64],\"setBlur\":[64],\"getInputElement\":[64]}]]],[\"ion-toggle\",[[33,\"ion-toggle\",{\"color\":[513],\"name\":[1],\"checked\":[1028],\"disabled\":[4],\"value\":[1],\"activated\":[32]}]]],[\"ion-action-sheet\",[[34,\"ion-action-sheet\",{\"overlayIndex\":[2,\"overlay-index\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"buttons\":[16],\"cssClass\":[1,\"css-class\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"translucent\":[4],\"animated\":[4],\"htmlAttributes\":[16],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]}]]],[\"ion-fab-button\",[[33,\"ion-fab-button\",{\"color\":[513],\"activated\":[4],\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16],\"target\":[1],\"show\":[4],\"translucent\":[4],\"type\":[1],\"size\":[1],\"closeIcon\":[1,\"close-icon\"]}]]],[\"ion-fab\",[[1,\"ion-fab\",{\"horizontal\":[1],\"vertical\":[1],\"edge\":[4],\"activated\":[1028],\"close\":[64]}]]],[\"ion-input\",[[34,\"ion-input\",{\"fireFocusEvents\":[4,\"fire-focus-events\"],\"color\":[513],\"accept\":[1],\"autocapitalize\":[1],\"autocomplete\":[1],\"autocorrect\":[1],\"autofocus\":[4],\"clearInput\":[4,\"clear-input\"],\"clearOnEdit\":[4,\"clear-on-edit\"],\"debounce\":[2],\"disabled\":[4],\"enterkeyhint\":[1],\"inputmode\":[1],\"max\":[1],\"maxlength\":[2],\"min\":[1],\"minlength\":[2],\"multiple\":[4],\"name\":[1],\"pattern\":[1],\"placeholder\":[1],\"readonly\":[4],\"required\":[4],\"spellcheck\":[4],\"step\":[1],\"size\":[2],\"type\":[1],\"value\":[1032],\"hasFocus\":[32],\"setFocus\":[64],\"setBlur\":[64],\"getInputElement\":[64]}]]],[\"ion-item-group\",[[32,\"ion-item-group\"]]],[\"ion-slides\",[[36,\"ion-slides\",{\"options\":[8],\"pager\":[4],\"scrollbar\":[4],\"update\":[64],\"updateAutoHeight\":[64],\"slideTo\":[64],\"slideNext\":[64],\"slidePrev\":[64],\"getActiveIndex\":[64],\"getPreviousIndex\":[64],\"length\":[64],\"isEnd\":[64],\"isBeginning\":[64],\"startAutoplay\":[64],\"stopAutoplay\":[64],\"lockSwipeToNext\":[64],\"lockSwipeToPrev\":[64],\"lockSwipes\":[64],\"getSwiper\":[64]}]]],[\"ion-thumbnail\",[[1,\"ion-thumbnail\"]]],[\"pwa-camera\",[[1,\"pwa-camera\",{\"facingMode\":[1,\"facing-mode\"],\"onPhoto\":[16],\"photo\":[32],\"photoSrc\":[32],\"showShutterOverlay\":[32],\"flashIndex\":[32]}]]],[\"ion-infinite-scroll-content\",[[32,\"ion-infinite-scroll-content\",{\"loadingSpinner\":[1025,\"loading-spinner\"],\"loadingText\":[1,\"loading-text\"]}]]],[\"ion-modal\",[[34,\"ion-modal\",{\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"component\":[1],\"componentProps\":[16],\"cssClass\":[1,\"css-class\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"showBackdrop\":[4,\"show-backdrop\"],\"animated\":[4],\"swipeToClose\":[4,\"swipe-to-close\"],\"presentingElement\":[16],\"htmlAttributes\":[16],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]}]]],[\"ion-infinite-scroll\",[[0,\"ion-infinite-scroll\",{\"threshold\":[1],\"disabled\":[4],\"position\":[1],\"isLoading\":[32],\"complete\":[64]}]]],[\"ion-item-sliding\",[[0,\"ion-item-sliding\",{\"disabled\":[4],\"state\":[32],\"getOpenAmount\":[64],\"getSlidingRatio\":[64],\"open\":[64],\"close\":[64],\"closeOpened\":[64]}]]],[\"ion-refresher-content\",[[0,\"ion-refresher-content\",{\"pullingIcon\":[1025,\"pulling-icon\"],\"pullingText\":[1,\"pulling-text\"],\"refreshingSpinner\":[1025,\"refreshing-spinner\"],\"refreshingText\":[1,\"refreshing-text\"]}]]],[\"ion-label\",[[34,\"ion-label\",{\"color\":[513],\"position\":[1],\"noAnimate\":[32]}]]],[\"ion-list\",[[32,\"ion-list\",{\"lines\":[1],\"inset\":[4],\"closeSlidingItems\":[64]}]]],[\"ion-refresher\",[[32,\"ion-refresher\",{\"pullMin\":[2,\"pull-min\"],\"pullMax\":[2,\"pull-max\"],\"closeDuration\":[1,\"close-duration\"],\"snapbackDuration\":[1,\"snapback-duration\"],\"pullFactor\":[2,\"pull-factor\"],\"disabled\":[4],\"nativeRefresher\":[32],\"state\":[32],\"complete\":[64],\"cancel\":[64],\"getProgress\":[64]}]]],[\"ion-footer\",[[36,\"ion-footer\",{\"translucent\":[4]}]]],[\"ion-grid\",[[1,\"ion-grid\",{\"fixed\":[4]}]]],[\"ion-item\",[[49,\"ion-item\",{\"color\":[513],\"button\":[4],\"detail\":[4],\"detailIcon\":[1,\"detail-icon\"],\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"lines\":[1],\"routerAnimation\":[16],\"routerDirection\":[1,\"router-direction\"],\"target\":[1],\"type\":[1],\"multipleInputs\":[32],\"focusable\":[32]},[[0,\"ionColor\",\"labelColorChanged\"],[0,\"ionStyle\",\"itemStyle\"]]]]],[\"ion-col\",[[1,\"ion-col\",{\"offset\":[1],\"offsetXs\":[1,\"offset-xs\"],\"offsetSm\":[1,\"offset-sm\"],\"offsetMd\":[1,\"offset-md\"],\"offsetLg\":[1,\"offset-lg\"],\"offsetXl\":[1,\"offset-xl\"],\"pull\":[1],\"pullXs\":[1,\"pull-xs\"],\"pullSm\":[1,\"pull-sm\"],\"pullMd\":[1,\"pull-md\"],\"pullLg\":[1,\"pull-lg\"],\"pullXl\":[1,\"pull-xl\"],\"push\":[1],\"pushXs\":[1,\"push-xs\"],\"pushSm\":[1,\"push-sm\"],\"pushMd\":[1,\"push-md\"],\"pushLg\":[1,\"push-lg\"],\"pushXl\":[1,\"push-xl\"],\"size\":[1],\"sizeXs\":[1,\"size-xs\"],\"sizeSm\":[1,\"size-sm\"],\"sizeMd\":[1,\"size-md\"],\"sizeLg\":[1,\"size-lg\"],\"sizeXl\":[1,\"size-xl\"]},[[9,\"resize\",\"onResize\"]]]]],[\"ion-row\",[[1,\"ion-row\"]]],[\"ion-menu-button\",[[33,\"ion-menu-button\",{\"color\":[513],\"disabled\":[4],\"menu\":[1],\"autoHide\":[4,\"auto-hide\"],\"type\":[1],\"visible\":[32]},[[32,\"ionMenuChange\",\"visibilityChanged\"],[32,\"ionSplitPaneVisible\",\"visibilityChanged\"]]]]],[\"ion-button\",[[33,\"ion-button\",{\"color\":[513],\"buttonType\":[1025,\"button-type\"],\"disabled\":[516],\"expand\":[513],\"fill\":[1537],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16],\"download\":[1],\"href\":[1],\"rel\":[1],\"shape\":[513],\"size\":[513],\"strong\":[4],\"target\":[1],\"type\":[1]}]]],[\"ion-buttons\",[[34,\"ion-buttons\",{\"collapse\":[4]}]]],[\"ion-title\",[[33,\"ion-title\",{\"color\":[513],\"size\":[1]}]]],[\"ion-toolbar\",[[33,\"ion-toolbar\",{\"color\":[513]},[[0,\"ionStyle\",\"childrenStyle\"]]]]],[\"ion-content\",[[1,\"ion-content\",{\"color\":[513],\"fullscreen\":[4],\"forceOverscroll\":[1028,\"force-overscroll\"],\"scrollX\":[4,\"scroll-x\"],\"scrollY\":[4,\"scroll-y\"],\"scrollEvents\":[4,\"scroll-events\"],\"getScrollElement\":[64],\"scrollToTop\":[64],\"scrollToBottom\":[64],\"scrollByPoint\":[64],\"scrollToPoint\":[64]},[[8,\"appload\",\"onAppLoad\"],[2,\"click\",\"onClick\"]]]]],[\"ion-header\",[[36,\"ion-header\",{\"collapse\":[1],\"translucent\":[4]}]]],[\"ion-backdrop\",[[33,\"ion-backdrop\",{\"visible\":[4],\"tappable\":[4],\"stopPropagation\":[4,\"stop-propagation\"]},[[2,\"click\",\"onMouseDown\"]]]]],[\"ion-ripple-effect\",[[1,\"ion-ripple-effect\",{\"type\":[1],\"addRipple\":[64]}]]],[\"ion-alert\",[[34,\"ion-alert\",{\"overlayIndex\":[2,\"overlay-index\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"cssClass\":[1,\"css-class\"],\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"message\":[1],\"buttons\":[16],\"inputs\":[1040],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"translucent\":[4],\"animated\":[4],\"htmlAttributes\":[16],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},[[4,\"keydown\",\"onKeydown\"]]]]],[\"ion-loading\",[[34,\"ion-loading\",{\"overlayIndex\":[2,\"overlay-index\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"message\":[1],\"cssClass\":[1,\"css-class\"],\"duration\":[2],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"showBackdrop\":[4,\"show-backdrop\"],\"spinner\":[1025],\"translucent\":[4],\"animated\":[4],\"htmlAttributes\":[16],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]}]]],[\"ion-toast\",[[33,\"ion-toast\",{\"overlayIndex\":[2,\"overlay-index\"],\"color\":[513],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"cssClass\":[1,\"css-class\"],\"duration\":[2],\"header\":[1],\"message\":[1],\"keyboardClose\":[4,\"keyboard-close\"],\"position\":[1],\"buttons\":[16],\"translucent\":[4],\"animated\":[4],\"htmlAttributes\":[16],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]}]]],[\"ion-spinner\",[[1,\"ion-spinner\",{\"color\":[513],\"duration\":[2],\"name\":[1],\"paused\":[4]}]]],[\"ion-icon\",[[1,\"ion-icon\",{\"mode\":[1025],\"color\":[1],\"ariaLabel\":[1537,\"aria-label\"],\"ariaHidden\":[513,\"aria-hidden\"],\"ios\":[1],\"md\":[1],\"flipRtl\":[4,\"flip-rtl\"],\"name\":[513],\"src\":[1],\"icon\":[8],\"size\":[1],\"lazy\":[4],\"sanitize\":[4],\"svgContent\":[32],\"isVisible\":[32]}]]],[\"flx-documentgallery\",[[0,\"flx-documentgallery\",{\"object\":[1544],\"filter\":[1544],\"table\":[32],\"refresh\":[64],\"addDocument\":[64]}]]]]"), options);
});
