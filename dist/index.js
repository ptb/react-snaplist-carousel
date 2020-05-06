'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

var mergeStyles = function () {
    var classnames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classnames[_i] = arguments[_i];
    }
    return classnames.filter(Boolean).join(' ');
};
var mapStyles = function ($item) {
    var styles = window.getComputedStyle($item);
    var paddingLeft = parseInt(styles.paddingLeft || '');
    var paddingRight = parseInt(styles.paddingRight || '');
    var paddingTop = parseInt(styles.paddingTop || '');
    var paddingBottom = parseInt(styles.paddingBottom || '');
    var snapAlign = ((typeof styles.scrollSnapAlign === 'string' &&
        styles.scrollSnapAlign.split(' ')) || [])[0];
    var scrollPaddingLeft = parseInt(styles.scrollPaddingLeft || '');
    var scrollPaddingRight = parseInt(styles.scrollPaddingRight || '');
    var scrollPaddingTop = parseInt(styles.scrollPaddingTop || '');
    var scrollPaddingBottom = parseInt(styles.scrollPaddingBottom || '');
    return {
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
        snapAlign: snapAlign,
        scrollPaddingLeft: scrollPaddingLeft,
        scrollPaddingRight: scrollPaddingRight,
        scrollPaddingTop: scrollPaddingTop,
        scrollPaddingBottom: scrollPaddingBottom,
    };
};
var mapItem = function (_a) {
    var $item = _a.$item, viewport = _a.viewport;
    var _b = mapStyles($item), paddingLeft = _b.paddingLeft, paddingRight = _b.paddingRight, paddingTop = _b.paddingTop, paddingBottom = _b.paddingBottom, snapAlign = _b.snapAlign;
    var left = $item.offsetLeft - viewport.offsetLeft + paddingLeft;
    var width = $item.offsetWidth - paddingLeft - paddingRight;
    var right = left + width;
    var top = $item.offsetTop - viewport.offsetTop + paddingTop;
    var height = $item.offsetHeight - paddingBottom - paddingTop;
    var bottom = top + height;
    return { left: left, width: width, right: right, top: top, height: height, bottom: bottom, paddingLeft: paddingLeft, paddingRight: paddingRight, paddingTop: paddingTop, paddingBottom: paddingBottom, snapAlign: snapAlign };
};
var isTouchDevice = function () {
    return !!(typeof window !== 'undefined' &&
        ('ontouchstart' in window ||
            (window.DocumentTouch && typeof document !== 'undefined' && document instanceof window.DocumentTouch))) || !!(typeof navigator !== 'undefined' && (navigator.maxTouchPoints || navigator.msMaxTouchPoints));
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".styles_snaplist__3CnrO {\n  flex: 1;\n}\n\n.styles_snaplist_hide_scrollbar__3B0vy {\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n\n.styles_snaplist_hide_scrollbar__3B0vy::-webkit-scrollbar {\n  display: none;\n}\n\n.styles_snaplist_horizontal__sje6U {\n  display: flex;\n  flex-direction: row;\n  max-width: 100%;\n}\n\n.styles_snaplist_vertical__GAU9F {\n  max-height: 100%;\n}\n\n.styles_snaplist_active_horizontal__1AcsB {\n  scroll-snap-type: x mandatory;\n}\n\n.styles_snaplist_active_vertical__3nO4X {\n  scroll-snap-type: y mandatory;\n}\n\n.styles_snaplist_scroll_disabled__18IPq {\n  overflow-y: hidden;\n  overflow-x: hidden;\n}\n\n.styles_snaplist_scroll_horizontal__3Wsh1 {\n  overflow-y: hidden;\n  overflow-x: auto;\n}\n\n.styles_snaplist_scroll_vertical__2D_zA {\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.styles_snapitem__MTDDf {\n  flex: 1;\n  display: flex;\n  flex-grow: initial;\n  flex-shrink: 0;\n  flex-basis: auto;\n}\n\n.styles_snaplist__3CnrO::after {\n  content: '';\n  flex: 0 0 1px;\n}\n\n.styles_snapitem_align_center__1jM9V {\n  scroll-snap-align: center;\n}\n\n.styles_snapitem_align_start__3zzUa {\n  scroll-snap-align: start;\n}\n\n.styles_snapitem_align_end__2efEU {\n  scroll-snap-align: end;\n}\n\n.styles_snapitem_align_none__32nWH {\n  scroll-snap-align: none;\n}\n\n.styles_snapitem_forcestop__1ycfI {\n  scroll-snap-stop: always;\n}\n";
var styles = {"snaplist":"styles_snaplist__3CnrO","snaplist_hide_scrollbar":"styles_snaplist_hide_scrollbar__3B0vy","snaplist_horizontal":"styles_snaplist_horizontal__sje6U","snaplist_vertical":"styles_snaplist_vertical__GAU9F","snaplist_active_horizontal":"styles_snaplist_active_horizontal__1AcsB","snaplist_active_vertical":"styles_snaplist_active_vertical__3nO4X","snaplist_scroll_disabled":"styles_snaplist_scroll_disabled__18IPq","snaplist_scroll_horizontal":"styles_snaplist_scroll_horizontal__3Wsh1","snaplist_scroll_vertical":"styles_snaplist_scroll_vertical__2D_zA","snapitem":"styles_snapitem__MTDDf","snapitem_align_center":"styles_snapitem_align_center__1jM9V","snapitem_align_start":"styles_snapitem_align_start__3zzUa","snapitem_align_end":"styles_snapitem_align_end__2efEU","snapitem_align_none":"styles_snapitem_align_none__32nWH","snapitem_forcestop":"styles_snapitem_forcestop__1ycfI"};
styleInject(css);

var SnapListComponent = function (_a, ref) {
    var children = _a.children, _b = _a.direction, direction = _b === void 0 ? 'horizontal' : _b, _c = _a.disableScroll, disableScroll = _c === void 0 ? false : _c, width = _a.width, height = _a.height, scrollPadding = _a.scrollPadding, _d = _a.hideScrollbar, hideScrollbar = _d === void 0 ? true : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, className = _a.className;
    var _f, _g, _h, _j, _k, _l, _m, _o;
    return (React.createElement("div", { className: mergeStyles(styles.snaplist, styles["snaplist_" + direction], disabled ? null : styles["snaplist_active_" + direction], disableScroll ? styles.snaplist_scroll_disabled : styles["snaplist_scroll_" + direction], hideScrollbar ? styles.snaplist_hide_scrollbar : null, className), style: {
            width: width,
            height: height,
            scrollPaddingTop: (_g = (_f = scrollPadding) === null || _f === void 0 ? void 0 : _f.top, (_g !== null && _g !== void 0 ? _g : '0px')),
            scrollPaddingRight: (_j = (_h = scrollPadding) === null || _h === void 0 ? void 0 : _h.right, (_j !== null && _j !== void 0 ? _j : '0px')),
            scrollPaddingBottom: (_l = (_k = scrollPadding) === null || _k === void 0 ? void 0 : _k.bottom, (_l !== null && _l !== void 0 ? _l : '0px')),
            scrollPaddingLeft: (_o = (_m = scrollPadding) === null || _m === void 0 ? void 0 : _m.left, (_o !== null && _o !== void 0 ? _o : '0px')),
        }, ref: ref }, children));
};
var SnapList = React.forwardRef(SnapListComponent);
var SnapItem = function (_a) {
    var children = _a.children, margin = _a.margin, _b = _a.snapAlign, snapAlign = _b === void 0 ? 'center' : _b, _c = _a.forceStop, forceStop = _c === void 0 ? false : _c, width = _a.width, height = _a.height, className = _a.className;
    var _d, _e, _f, _g;
    return (React.createElement("div", { className: mergeStyles(styles.snapitem, styles["snapitem_align_" + snapAlign], forceStop ? styles.snapitem_forcestop : null, className), style: {
            marginTop: (_d = margin) === null || _d === void 0 ? void 0 : _d.top,
            marginRight: (_e = margin) === null || _e === void 0 ? void 0 : _e.right,
            marginBottom: (_f = margin) === null || _f === void 0 ? void 0 : _f.bottom,
            marginLeft: (_g = margin) === null || _g === void 0 ? void 0 : _g.left,
            width: width,
            height: height,
        } }, children));
};

var css$1 = ".stylesdrag_snaplist_drag__1lMGg {\n  scroll-snap-type: none;\n}\n\n.stylesdrag_snaplist_drag__1lMGg * {\n  user-select: none;\n}\n";
var styles$1 = {"snaplist_drag":"stylesdrag_snaplist_drag__1lMGg"};
styleInject(css$1);

var easingOutQuint = function (t, b, c, d) { return c * ((t = t / d - 1) * t * t * t * t + 1) + b; };
var smoothScrollPolyfill = function (_a) {
    var node = _a.node, scrollTarget = _a.scrollTarget, duration = _a.duration;
    var startTime = Date.now();
    var offsetLeft = node.scrollLeft;
    var offsetTop = node.scrollTop;
    var gapHorizontal = scrollTarget.left - offsetLeft;
    var gapVertical = scrollTarget.top - offsetTop;
    var interrupt = false;
    var cleanup = function () {
        node.removeEventListener('wheel', cancel); // eslint-disable-line @typescript-eslint/no-use-before-define
        node.removeEventListener('touchstart', cancel); // eslint-disable-line @typescript-eslint/no-use-before-define
    };
    var step = function () {
        var elapsed = Date.now() - startTime;
        var percentage = elapsed / duration;
        if (interrupt)
            return;
        if (percentage > 1) {
            cleanup();
            return;
        }
        node.scrollLeft = easingOutQuint(elapsed, offsetLeft, gapHorizontal, duration);
        node.scrollTop = easingOutQuint(elapsed, offsetTop, gapVertical, duration);
        requestAnimationFrame(step);
    };
    var cancel = function () {
        interrupt = true;
        cleanup();
    };
    node.addEventListener('wheel', cancel, { passive: true });
    node.addEventListener('touchstart', cancel, { passive: true });
    step();
    return cancel;
};
var hasNativeSmoothScroll = function () {
    var supports = false;
    var fakeScrollToOptions = {
        top: 0,
        get behavior() {
            supports = true;
            return 'smooth';
        },
    };
    try {
        var div = document.createElement('div');
        div.scrollTo(fakeScrollToOptions);
    }
    catch (err) { } // eslint-disable-line no-empty
    return supports;
};
var smoothScroll = function (node, scrollTarget, duration) {
    if (!node)
        return;
    if (hasNativeSmoothScroll()) {
        return node.scrollTo({
            left: scrollTarget.left,
            top: scrollTarget.top,
            behavior: 'smooth',
        });
    }
    else {
        return smoothScrollPolyfill({ node: node, scrollTarget: scrollTarget, duration: duration });
    }
};

var toArray = function ($items) {
    var children = [];
    for (var index = 0; index < $items.length; index++) {
        var $item = $items[index];
        children.push($item);
    }
    return children;
};
var normalize = function (value, _a) {
    var min = _a.min, max = _a.max;
    return Math.min(max, Math.max(min, value));
};
var useScroll = function (_a) {
    var ref = _a.ref;
    var getScrollFor = React.useCallback(function (element) {
        var $viewport = ref.current;
        if (!$viewport)
            return;
        var $items = toArray($viewport.children);
        var $item = element >= 0 && $items.length ? $items[element] : null;
        if (!$item)
            return;
        var viewportStyles = mapStyles($viewport);
        var viewport = {
            left: $viewport.scrollLeft,
            width: $viewport.offsetWidth,
            right: $viewport.scrollLeft + $viewport.offsetWidth,
            top: $viewport.scrollTop,
            height: $viewport.offsetHeight,
            bottom: $viewport.scrollTop + $viewport.offsetHeight,
            offsetLeft: $viewport.offsetLeft,
            offsetTop: $viewport.offsetTop,
            paddingLeft: mapStyles($items[0]).paddingLeft,
            paddingRight: mapStyles($items[$items.length - 1]).paddingRight,
            paddingTop: mapStyles($items[0]).paddingTop,
            paddingBottom: mapStyles($items[$items.length - 1]).paddingBottom,
            scrollPaddingLeft: viewportStyles.scrollPaddingLeft,
            scrollPaddingRight: viewportStyles.scrollPaddingRight,
            scrollPaddingTop: viewportStyles.scrollPaddingTop,
            scrollPaddingBottom: viewportStyles.scrollPaddingBottom,
            scrollWidth: $viewport.scrollWidth,
            scrollHeight: $viewport.scrollHeight,
        };
        var item = mapItem({ $item: $item, viewport: viewport });
        var target = { left: 0, top: 0 };
        switch (item.snapAlign) {
            case 'start':
                target = {
                    left: item.left - item.paddingLeft - viewport.paddingLeft - viewport.scrollPaddingLeft,
                    top: item.top - item.paddingTop - viewport.paddingTop - viewport.scrollPaddingTop,
                };
                break;
            case 'end':
                target = {
                    left: item.left - (viewport.width - item.width) + viewport.paddingRight + viewport.scrollPaddingRight,
                    top: item.top - (viewport.height - item.height) + viewport.paddingBottom + viewport.scrollPaddingBottom,
                };
                break;
            case 'center':
                target = {
                    left: item.left - (viewport.width - item.width) / 2 - viewport.scrollPaddingLeft / 2,
                    top: item.top - (viewport.height - item.height) / 2 - viewport.scrollPaddingTop / 2,
                };
                break;
        }
        var maxLeftScroll = viewport.scrollWidth - viewport.width;
        var maxTopScroll = viewport.scrollHeight - viewport.height;
        return {
            left: normalize(target.left, { min: 0, max: maxLeftScroll }),
            top: normalize(target.top, { min: 0, max: maxTopScroll }),
        };
    }, [ref]);
    var goTo = React.useCallback(function (element) {
        var scrollTarget = getScrollFor(element);
        if (scrollTarget) {
            smoothScroll(ref.current, scrollTarget, 800);
        }
    }, [getScrollFor, ref]);
    return goTo;
};

// as found on stackoverflow: https://stackoverflow.com/a/19277804
var getClosest = function (l, t) { return l.reduce(function (p, c) { return (Math.abs(c - t) < Math.abs(p - t) ? c : p); }); };
var getElementPositionX = function ($viewport, $item) {
    var viewport = {
        width: $viewport.offsetWidth,
        height: $viewport.offsetHeight,
        offsetLeft: $viewport.offsetLeft,
        offsetTop: $viewport.offsetTop,
    };
    var item = mapItem({ $item: $item, viewport: viewport });
    return item.left - (viewport.width / 2 - item.width / 2);
};
var getElementPositionY = function ($viewport, $item) {
    var viewport = {
        width: $viewport.offsetWidth,
        height: $viewport.offsetHeight,
        offsetLeft: $viewport.offsetLeft,
        offsetTop: $viewport.offsetTop,
    };
    var item = mapItem({ $item: $item, viewport: viewport });
    return item.top - (viewport.height / 2 - item.height / 2);
};
var dragThreshold = 2; // distance moved before isDragged is set to true and click on children is disabled
var useDragToScroll = function (_a) {
    var ref = _a.ref, _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    var goToChildren = useScroll({ ref: ref });
    var elementPositionsX = React.useRef([]);
    var elementPositionsY = React.useRef([]);
    var timeout = React.useRef(null);
    var _c = React.useState(false), isDragging = _c[0], setIsDragging = _c[1];
    var isDown = React.useRef(false);
    var startX = React.useRef(0);
    var startY = React.useRef(0);
    var slideX = React.useRef(0);
    var slideY = React.useRef(0);
    var originalScrollSnapType = React.useRef('');
    // used to determine whether slider is scrolling. After scrolling ends, reset css classes
    var handleScrolling = React.useCallback(function () {
        if (timeout.current)
            clearTimeout(timeout.current);
        timeout.current = setTimeout(function () {
            var _a, _b;
            if (!ref.current)
                return;
            ref.current.removeEventListener('scroll', handleScrolling);
            setIsDragging(false);
            // Safari resets scroll position when removing the css class, manually
            // setting the scroll property afterwards seems to fix the problem
            // without flashing
            var currentX = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.scrollLeft;
            var currentY = (_b = ref.current) === null || _b === void 0 ? void 0 : _b.scrollTop;
            ref.current.classList.remove(styles$1.snaplist_drag);
            ref.current.scrollLeft = currentX;
            ref.current.scrollTop = currentY;
        }, 100);
    }, [ref, timeout]);
    var handleMouseDown = React.useCallback(function (event) {
        if (!ref.current)
            return;
        event.preventDefault();
        isDown.current = true;
        startX.current = event.pageX - ref.current.offsetLeft;
        slideX.current = ref.current.scrollLeft;
        startY.current = event.pageY - ref.current.offsetTop;
        slideY.current = ref.current.scrollTop;
    }, [ref]);
    var handleMouseMove = React.useCallback(function (event) {
        if (!ref.current)
            return;
        if (!isDown.current)
            return;
        var distanceMoved = Math.abs(startX.current - (event.pageX - ref.current.offsetLeft));
        if (distanceMoved < dragThreshold)
            return; // skip further action, when not mouse movement is below threshold, thus no drag detected
        if (timeout.current)
            clearTimeout(timeout.current);
        if (!isDragging) {
            setIsDragging(true);
            var snapListStyles = window.getComputedStyle(ref.current);
            originalScrollSnapType.current = snapListStyles.scrollSnapType.toString();
        }
        ref.current.classList.add(styles$1.snaplist_drag);
        var x = event.pageX - ref.current.offsetLeft;
        var displaceX = x - startX.current;
        ref.current.scrollLeft = slideX.current - displaceX;
        var y = event.pageY - ref.current.offsetTop;
        var displaceY = y - startY.current;
        ref.current.scrollTop = slideY.current - displaceY;
    }, [isDragging, ref]);
    var handleMouseUp = React.useCallback(function () {
        if (!ref.current)
            return;
        isDown.current = false;
        if (!isDragging)
            return;
        ref.current.addEventListener('scroll', handleScrolling);
        if (originalScrollSnapType.current === 'none')
            return;
        var dragEndPositionX = ref.current.scrollLeft;
        var dragEndPositionY = ref.current.scrollTop;
        var scrollTargetX = getClosest(elementPositionsX.current, dragEndPositionX);
        var scrollTargetY = getClosest(elementPositionsY.current, dragEndPositionY);
        var target = scrollTargetX > 0
            ? elementPositionsX.current.indexOf(scrollTargetX)
            : elementPositionsY.current.indexOf(scrollTargetY);
        goToChildren(target);
    }, [ref, handleScrolling, goToChildren, isDragging]);
    var handleClick = React.useCallback(function (event) {
        // we need this to prevent click events being fired on children
        if (!isDragging)
            return;
        event.stopPropagation();
        setIsDragging(false);
    }, [isDragging]);
    var registerEventListeners = React.useCallback(function () {
        if (!ref.current)
            return;
        ref.current.addEventListener('mousedown', handleMouseDown);
        ref.current.addEventListener('click', handleClick);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    }, [ref, handleClick, handleMouseDown, handleMouseMove, handleMouseUp]);
    var removeEventListeners = React.useCallback(function () {
        if (!ref.current)
            return;
        ref.current.removeEventListener('mousedown', handleMouseDown);
        ref.current.removeEventListener('click', handleClick);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
    }, [ref, handleClick, handleMouseDown, handleMouseMove, handleMouseUp]);
    React.useEffect(function () {
        // skip on touch devices
        if (!ref.current || isTouchDevice() || disabled)
            return;
        var target = ref.current;
        var children = target.children;
        elementPositionsX.current = Array.from(children).map(function (element) {
            return getElementPositionX(target, element);
        });
        elementPositionsY.current = Array.from(children).map(function (element) {
            return getElementPositionY(target, element);
        });
        registerEventListeners();
        return removeEventListeners;
    }, [ref, registerEventListeners, removeEventListeners, disabled]);
    return { isDragging: isDragging, disable: removeEventListeners, enable: registerEventListeners };
};

var debounceHOF = function (callback, ms) {
    var timeout;
    return function () {
        if (timeout)
            clearTimeout(timeout);
        timeout = setTimeout(function () {
            timeout = null;
            callback();
        }, ms);
    };
};
var getVisibleChildren = function ($viewport) {
    if (!$viewport)
        return { children: [], childrenInCenter: null };
    var viewport = {
        left: $viewport.scrollLeft,
        width: $viewport.offsetWidth,
        right: $viewport.scrollLeft + $viewport.offsetWidth,
        top: $viewport.scrollTop,
        height: $viewport.offsetHeight,
        bottom: $viewport.scrollTop + $viewport.offsetHeight,
        offsetLeft: $viewport.offsetLeft,
        offsetTop: $viewport.offsetTop,
        centerHorizontal: $viewport.scrollLeft + $viewport.offsetWidth / 2,
        centerVertical: $viewport.scrollTop + $viewport.offsetHeight / 2,
    };
    var children = [];
    var $items = $viewport.children;
    var childrenInCenter = null;
    for (var index = 0; index < $items.length; index++) {
        var $item = $items[index];
        var item = mapItem({ $item: $item, viewport: viewport });
        var isVisibleHorizontally = item.left >= viewport.left && item.right <= viewport.right;
        var isVisibleVertically = item.top >= viewport.top && item.bottom <= viewport.bottom;
        var isInCenterHorizontally = item.left <= viewport.centerHorizontal && item.right >= viewport.centerHorizontal;
        var isInCenterVertically = item.top <= viewport.centerVertical && item.bottom >= viewport.centerVertical;
        if (isVisibleHorizontally && isVisibleVertically) {
            children.push(index);
        }
        if (isInCenterHorizontally && isInCenterVertically) {
            childrenInCenter = index;
        }
    }
    return { children: children, childrenInCenter: childrenInCenter };
};
var useVisibleElements = function (_a, selector) {
    var _b = _a.debounce, debounce = _b === void 0 ? 10 : _b, ref = _a.ref;
    var _c = React.useState(selector([0], null)), result = _c[0], setResult = _c[1];
    var onChange = React.useCallback(function () {
        var _a = getVisibleChildren(ref.current), newVisibleChildren = _a.children, newChildrenInCenter = _a.childrenInCenter;
        if (newVisibleChildren.length === 0)
            return;
        var newResult = selector(newVisibleChildren, newChildrenInCenter);
        setResult(function (result) {
            return JSON.stringify(newResult) !== JSON.stringify(result) ? newResult : result;
        });
    }, [ref, selector]);
    var onChangeWithDebounce = React.useCallback(debounceHOF(onChange, debounce), [onChange]);
    React.useEffect(function () {
        var _a;
        var element = ref.current;
        (_a = element) === null || _a === void 0 ? void 0 : _a.addEventListener('scroll', onChangeWithDebounce);
        window.addEventListener('resize', onChangeWithDebounce);
        window.addEventListener('orientationchange', onChangeWithDebounce);
        onChangeWithDebounce();
        return function () {
            var _a;
            (_a = element) === null || _a === void 0 ? void 0 : _a.removeEventListener('scroll', onChangeWithDebounce);
            window.removeEventListener('resize', onChangeWithDebounce);
            window.removeEventListener('orientationchange', onChangeWithDebounce);
        };
    }, [onChangeWithDebounce, ref]);
    return result;
};

exports.SnapItem = SnapItem;
exports.SnapList = SnapList;
exports.useDragToScroll = useDragToScroll;
exports.useScroll = useScroll;
exports.useVisibleElements = useVisibleElements;
exports.isTouchDevice = isTouchDevice;
//# sourceMappingURL=index.js.map
