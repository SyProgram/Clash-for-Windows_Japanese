module.exports = function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    return n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 10)
}([function(e, t) {
    e.exports = require("electron")
}, function(e, t, n) {
    e.exports = n(17)
}, function(e, t) {
    function n(e, t, n, r, o, i, a) {
        try {
            var c = e[i](a),
                s = c.value
        } catch (e) {
            return void n(e)
        }
        c.done ? t(s) : Promise.resolve(s).then(r, o)
    }
    e.exports = function(e) {
        return function() {
            var t = this,
                r = arguments;
            return new Promise((function(o, i) {
                var a = e.apply(t, r);

                function c(e) {
                    n(a, o, i, c, s, "next", e)
                }

                function s(e) {
                    n(a, o, i, c, s, "throw", e)
                }
                c(void 0)
            }))
        }
    }, e.exports.default = e.exports, e.exports.__esModule = !0
}, function(e, t, n) {
    var r = n(11),
        o = n(12),
        i = n(7),
        a = n(13);
    e.exports = function(e) {
        return r(e) || o(e) || i(e) || a()
    }, e.exports.default = e.exports, e.exports.__esModule = !0
}, function(e, t) {
    e.exports = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }, e.exports.default = e.exports, e.exports.__esModule = !0
}, function(e, t, n) {
    var r = n(14),
        o = n(15),
        i = n(7),
        a = n(16);
    e.exports = function(e, t) {
        return r(e) || o(e, t) || i(e, t) || a()
    }, e.exports.default = e.exports, e.exports.__esModule = !0
}, function(e, t) {
    e.exports = function(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }, e.exports.default = e.exports, e.exports.__esModule = !0
}, function(e, t, n) {
    var r = n(6);
    e.exports = function(e, t) {
        if (e) {
            if ("string" == typeof e) return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
        }
    }, e.exports.default = e.exports, e.exports.__esModule = !0
}, function(e, t) {
    e.exports = require("path")
}, function(e, t) {
    e.exports = require("axios")
}, function(e, t, n) {
    "use strict";
    n.r(t);
    t = n(3);
    var r = n.n(t),
        o = (t = n(5), n.n(t)),
        i = (t = n(4), n.n(t)),
        a = (t = n(2), n.n(t)),
        c = (t = n(1), n.n(t)),
        s = (t = n(18), t = n(9), n.n(t)),
        l = n(0);

    function u(e, t) {
        var n, r = Object.keys(e);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), r.push.apply(r, n)), r
    }

    function p(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? u(Object(n), !0).forEach((function(t) {
                i()(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
    var d, f, h, m, b, y = n(0).TouchBar,
        g = y.TouchBarButton,
        w = n(8),
        v = n(19),
        x = n(20);
    t = n(21);
    global.__static = n(8).join(__dirname, "/static").replace(/\\/g, "\\\\"), t(), l.app.disableHardwareAcceleration(), l.app.commandLine.appendSwitch("disable-features", "OutOfBlinkCors"), "darwin" === process.platform && l.app.dock.hide();
    var k, C = [],
        M = "file://".concat(__dirname, "/index.html");

    function _() {
        return "linux" === process.platform
    }

    function S() {
        d && ("win32" === process.platform ? d.isMinimized() ? d.restore() : d.show() : (d.setVisibleOnAllWorkspaces(!0), setTimeout((function() {
            d.show(), d.setVisibleOnAllWorkspaces(!1)
        }), 1)))
    }

    function O() {
        var e, t;

        function u() {
            var e, t, n, r;
            m || ((e = l.nativeImage.createFromPath(w.join(__static, "imgs", "logo_64_eyes.png")).resize({
                width: 24,
                height: 24
            })).setTemplateImage(!0), t = w.join(__static, "tray", "win", "tray_normal.ico"), n = w.join(__static, "imgs", "logo_reverse_32.png"), r = {}, i()(r, "win32", t), i()(r, "darwin", e), i()(r, "linux", n), r = r[process.platform], (m = new l.Tray(r)).setToolTip("Clash for Windows"), m.on("right-click", (function() {
                T().then((function(e) {
                    m.popUpContextMenu(l.Menu.buildFromTemplate(e))
                }))
            })), m.on("click", S))
        }(d = new l.BrowserWindow({
            height: 603,
            width: 850,
            minWidth: 850,
            minHeight: 603,
            backgroundColor: l.nativeTheme.shouldUseDarkColors ? "#272531" : "#f5f5f5",
            useContentSize: !0,
            show: !1,
            minimizable: !0,
            frame: !1,
            titleBarStyle: "hidden",
            icon: _() ? w.join(__static, "imgs", "icon_512.png") : void 0,
            webPreferences: {
                nodeIntegration: !0,
                webSecurity: !0,
                nodeIntegrationInWorker: !1,
                contextIsolation: !1,
                preload: w.resolve(w.join(__dirname, "preload.js"))
            }
        })).setMenu(null), d.webContents.on("will-navigate", (function(e) {
            return e.preventDefault()
        })), d.loadURL(M, {
            userAgent: "ClashforWindows/".concat(l.app.getVersion())
        }), d.webContents.on("render-process-gone", (e = a()(c.a.mark((function e(t, n) {
            var r, o;
            return c.a.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (r = n.reason, "darwin" === process.platform) return e.abrupt("return");
                        e.next = 3;
                        break;
                    case 3:
                        if ("crashed" === r) return o = {
                            type: "error",
                            title: "Clash for Windows",
                            message: "仪表板崩溃了!",
                            buttons: ["Reload", "Exit"]
                        }, e.next = 7, l.dialog.showMessageBox(d, o);
                        e.next = 10;
                        break;
                    case 7:
                        0 === (o = e.sent).response ? (l.app.relaunch(), l.app.exit(0)) : l.app.quit();
                    case 10:
                    case "end":
                        return e.stop()
                }
            }), e)
        }))), function(t, n) {
            return e.apply(this, arguments)
        })), l.ipcMain.handle("start-download", (function(e, t, n) {
            d.webContents.downloadURL(t), b = n
        })), d.webContents.session.on("will-download", (function(e, t, n) {
            b && (t.setSavePath(b), t.on("updated", (function(e, n) {
                "interrupted" === n ? d.webContents.send("download", "interrupted") : "progressing" === n && (t.isPaused() ? d.webContents.send("download", "paused") : d.webContents.send("download", "downloading", t.getReceivedBytes() / t.getTotalBytes()))
            })), t.once("done", (function(e, t) {
                "completed" === t ? d.webContents.send("download", "completed") : d.webContents.send("download", "failed", t)
            })), b = null)
        })), l.ipcMain.handle("app", (function(e, t) {
            for (var n = arguments.length, r = new Array(2 < n ? n - 2 : 0), o = 2; o < n; o++) r[o - 2] = arguments[o];
            switch (t) {
                case "isPackaged":
                    return l.app.isPackaged;
                case "getPath":
                    return l.app.getPath.apply(l.app, r);
                case "getAppPath":
                    return l.app.getAppPath();
                case "getName":
                    return l.app.getName();
                case "getVersion":
                    return l.app.getVersion();
                case "setLoginItemSettings":
                    return l.app.setLoginItemSettings.apply(l.app, r);
                case "relaunch":
                    return l.app.relaunch();
                case "exit":
                    return l.app.exit.apply(l.app, r);
                case "quit":
                    return l.app.quit()
            }
        })), l.ipcMain.handle("window", (function(e, t) {
            for (var n = arguments.length, r = new Array(2 < n ? n - 2 : 0), o = 2; o < n; o++) r[o - 2] = arguments[o];
            switch (t) {
                case "close":
                    return d.close();
                case "minimize":
                    return d.minimize();
                case "maximize":
                    return d.maximize();
                case "unmaximize":
                    return d.unmaximize();
                case "setAlwaysOnTop":
                    return d.setAlwaysOnTop.apply(d, r);
                case "isVisible":
                    return d.isVisible();
                case "isMaximized":
                    return d.isMaximized();
                case "setFullScreen":
                    return d.setFullScreen.apply(d, r)
            }
        })), d.on("hide", (function() {
            d.webContents.send("window-event", "hide")
        })), d.on("show", (function() {
            "darwin" === process.platform && l.app.dock.show(), d.webContents.send("window-event", "show")
        })), d.on("close", (function(e) {
            if (l.app.isQuiting) l.globalShortcut.unregisterAll(), l.app.exit();
            else {
                if (e.preventDefault(), "darwin" === process.platform && d.isFullScreen()) return void d.setFullScreen(!1);
                d.webContents.send("window-event", "close"), m ? (d.blur(), d.hide(), "darwin" === process.platform && l.app.dock.hide()) : d.minimize()
            }
            return !1
        })), d.on("maximize", (function(e) {
            d.webContents.send("window-event", "maximize")
        })), d.on("unmaximize", (function(e) {
            d.webContents.send("window-event", "unmaximize")
        })), d.on("enter-full-screen", (function(e) {
            d.webContents.send("window-event", "enter-full-screen")
        })), d.on("leave-full-screen", (function(e) {
            d.webContents.send("window-event", "leave-full-screen")
        })), d.on("session-end", (function(e) {
            e.preventDefault(), d.webContents.send("app-exit")
        })), l.ipcMain.handle("webContent", (function(e, t) {
            if ("toggleDevTools" === t) return d.webContents.toggleDevTools()
        })), l.ipcMain.handle("dialog", (t = a()(c.a.mark((function e(t, n) {
            var r, o, i, a = arguments;
            return c.a.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        for (r = a.length, o = new Array(2 < r ? r - 2 : 0), i = 2; i < r; i++) o[i - 2] = a[i];
                        e.t0 = n, e.next = "showMessageBox" === e.t0 ? 4 : "showOpenDialogSync" === e.t0 ? 7 : 8;
                        break;
                    case 4:
                        return e.next = 6, l.dialog.showMessageBox.apply(l.dialog, [d].concat(o));
                    case 6:
                        return e.abrupt("return", e.sent);
                    case 7:
                        return e.abrupt("return", l.dialog.showOpenDialogSync.apply(l.dialog, [d].concat(o)));
                    case 8:
                    case "end":
                        return e.stop()
                }
            }), e)
        }))), function(e, n) {
            return t.apply(this, arguments)
        })), l.ipcMain.handle("globalShortcut", (function(e, t) {
            for (var n = arguments.length, r = new Array(2 < n ? n - 2 : 0), o = 2; o < n; o++) r[o - 2] = arguments[o];
            switch (t) {
                case "register":
                    return l.globalShortcut.register(r[0], (function() {
                        d.webContents.send("shortcut-pressed", r[0])
                    }));
                case "unregister":
                    return l.globalShortcut.unregister.apply(l.globalShortcut, r);
                case "isRegistered":
                    return l.globalShortcut.isRegistered.apply(l.globalShortcut, r)
            }
        })), l.ipcMain.handle("nativeTheme", (function(e, t) {
            if ("shouldUseDarkColors" === t) return l.nativeTheme.shouldUseDarkColors
        })), l.nativeTheme.on("updated", (function() {
            d.webContents.send("native-theme-updated", l.nativeTheme.shouldUseDarkColors)
        })), l.ipcMain.handle("powerSaveBlocker", (function(e, t) {
            for (var n, r = arguments.length, o = new Array(2 < r ? r - 2 : 0), i = 2; i < r; i++) o[i - 2] = arguments[i];
            switch (t) {
                case "start":
                    return (n = powerSaveBlocker).start.apply(n, o);
                case "stop":
                    return (n = powerSaveBlocker).stop.apply(n, o)
            }
        })), l.ipcMain.on("set-allow-unsafe-urls", (function(e, t) {
            C = t
        })), d.setTouchBar(new y({
            items: [new g({
                label: "General",
                backgroundColor: "#505050",
                click: function() {
                    d.webContents.send("menu-item-change", "general")
                }
            }), new g({
                label: "Proxies",
                backgroundColor: "#505050",
                click: function() {
                    d.webContents.send("menu-item-change", "proxy")
                }
            }), new g({
                label: "Profiles",
                backgroundColor: "#505050",
                click: function() {
                    d.webContents.send("menu-item-change", "server")
                }
            }), new g({
                label: "Logs",
                backgroundColor: "#505050",
                click: function() {
                    d.webContents.send("menu-item-change", "log")
                }
            }), new g({
                label: "连接",
                backgroundColor: "#505050",
                click: function() {
                    d.webContents.send("menu-item-change", "connection")
                }
            }), new g({
                label: "Settings",
                backgroundColor: "#505050",
                click: function() {
                    d.webContents.send("menu-item-change", "setting")
                }
            }), new g({
                label: "Feedback",
                backgroundColor: "#505050",
                click: function() {
                    d.webContents.send("menu-item-change", "about")
                }
            })]
        })), l.powerMonitor.on("suspend", (function() {
            d.webContents.send("power-event", "suspend")
        })), l.powerMonitor.on("resume", (function() {
            d.webContents.send("power-event", "resume")
        })), l.ipcMain.handle("window-control", (function(e, t) {
            switch (t) {
                case "hide":
                    l.app.quit();
                    break;
                case "show":
                    S();
                    break;
                case "show-or-hide":
                    d.isVisible() && d.isFocused() ? l.app.quit() : S()
            }
        })), l.ipcMain.on("cleanup-done", (function(e) {
            l.app.isQuiting = !0, l.app.quit()
        })), l.ipcMain.on("status-changed", (function(e, t) {
            try {
                "darwin" !== process.platform && m.setImage(t)
            } catch (e) {}
        })), l.ipcMain.on("show-notification", (function(e, t) {
            var n = w.join(global.__static, "imgs/logo_64.png"),
                r = new l.Notification(p(p({}, t), {}, {
                    icon: "darwin" !== process.platform ? l.nativeImage.createFromPath(n) : null
                })),
                o = (n = t.folder, t.url);
            n && r.on("click", (function() {
                l.shell.openPath(t.folder)
            })), o && r.on("click", (function() {
                l.shell.openExternal(o)
            })), r.show()
        })), l.ipcMain.on("clash-core-info", (function(e, t) {
            var n = t.port;
            t = t.secret;
            0 < n && (k = s.a.create({
                baseURL: "http://127.0.0.1:".concat(n, "/"),
                timeout: 5e3,
                headers: {
                    Authorization: "Bearer ".concat(t)
                }
            }))
        }));
        var x, O = {
                systemProxyChecked: !1,
                tunModeChecked: !1,
                mixinChecked: !1,
                isReady: !1,
                menuMode: "",
                menuStyle: 0,
                isShowDelayIcon: !1
            },
            P = ((E = function(e) {
                return l.nativeImage.createFromPath(w.join(__static, "imgs", "tray-proxy-".concat(e, ".png"))).resize({
                    width: 8,
                    height: 8
                })
            })("default"), E("online")),
            j = E("offline"),
            T = (x = a()(c.a.mark((function e() {
                var t, n, i, a, s, u;
                return c.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (t = [], e.prev = 1, _() && 2 !== !O.menuStyle) {
                                e.next = 12;
                                break
                            }
                            return e.next = 5, Promise.all([k.get("/proxies"), k.get("/providers/proxies")]);
                        case 5:
                            n = e.sent, a = o()(n, 2), n = a[0], a = a[1], n = (null == n ? void 0 : n.data) || {}, i = n.proxies, a = (a = (null == a ? void 0 : a.data) || {}).providers, i && ((u = Object.entries(i).reduce((function(e, t) {
                                var n;
                                t = (n = o()(t, 2))[0];
                                return "Selector" === ((n = n[1]) || {}).type ? [].concat(r()(e), [{
                                    name: t,
                                    all: n.all,
                                    now: n.now
                                }]) : e
                            }), [])).sort((function(e, t) {
                                var n = i.GLOBAL.all;
                                return n.findIndex((function(t) {
                                    return t === e.name
                                })) - n.findIndex((function(e) {
                                    return e === t.name
                                }))
                            })), s = Object.entries(a).reduce((function(e, t) {
                                return (t = o()(t, 2))[0], t = void 0 === (t = (t[1] || {}).proxies) ? [] : t, [].concat(r()(e), r()(t))
                            })), t = u.map((function(e) {
                                var t = e.name,
                                    n = e.all,
                                    r = e.now;
                                return {
                                    label: t,
                                    submenu: n.map((function(e) {
                                        var n = s.find((function(t) {
                                            return t.name === e
                                        })) || [];
                                        return {
                                            label: e,
                                            type: "radio",
                                            checked: e === r,
                                            icon: O.isShowDelayIcon ? n.alive ? P : j : null,
                                            click: function() {
                                                k && k.put("/proxies/".concat(encodeURIComponent(t)), {
                                                    name: e
                                                }).then((function(e) {
                                                    204 === e.status && (d.webContents.send("persist-selected-proxy"), d.webContents.send("break-connections", t))
                                                })).catch((function(e) {}))
                                            }
                                        }
                                    }))
                                }
                            })));
                        case 12:
                            e.next = 16;
                            break;
                        case 14:
                            e.prev = 14, e.t0 = e.catch(1);
                        case 16:
                            return u = [
                                [{
                                    label: "代理组",
                                    enabled: !1
                                }].concat(r()(t)), [{
                                    label: "代理组",
                                    submenu: t
                                }],
                                []
                            ][O.menuStyle || 0], e.abrupt("return", [{
                                label: "仪表盘",
                                click: S
                            }, {
                                label: "运行任务栏脚本",
                                visible: "linux" !== process.platform,
                                click: function() {
                                    return d.webContents.send("run-tray-script")
                                }
                            }, {
                                type: "separator"
                            }, {
                                label: "&系统代理",
                                type: "checkbox",
                                id: "system-proxy",
                                checked: O.systemProxyChecked,
                                enabled: O.isReady,
                                visible: "linux" !== process.platform,
                                click: function(e) {
                                    e = e.checked, d.webContents.send("system-proxy-changed", e)
                                }
                            }, {
                                label: "TUN 模式",
                                type: "checkbox",
                                id: "tun",
                                enabled: O.isReady,
                                checked: O.tunModeChecked,
                                click: function(e) {
                                    e = e.checked, d.webContents.send("tun-changed", e)
                                }
                            }, {
                                label: "混合配置",
                                type: "checkbox",
                                id: "mixin",
                                enabled: O.isReady,
                                checked: O.mixinChecked,
                                click: function(e) {
                                    e = e.checked, d.webContents.send("mixin-changed", e)
                                }
                            }, {
                                type: "separator"
                            }, {
                                label: "代理模式",
                                id: "mode",
                                enabled: !1
                            }, {
                                label: "グローバル",
                                type: "radio",
                                id: "mode-global",
                                enabled: O.isReady,
                                checked: "global" === O.menuMode,
                                click: function() {
                                    return d.webContents.send("mode-changed", "global")
                                }
                            }, {
                                label: "ルール",
                                type: "radio",
                                id: "mode-rule",
                                enabled: O.isReady,
                                checked: "rule" === O.menuMode,
                                click: function() {
                                    return d.webContents.send("mode-changed", "rule")
                                }
                            }, {
                                label: "直连",
                                type: "radio",
                                id: "mode-direct",
                                enabled: O.isReady,
                                checked: "direct" === O.menuMode,
                                click: function() {
                                    return d.webContents.send("mode-changed", "direct")
                                }
                            }, {
                                label: "脚本",
                                type: "radio",
                                id: "mode-script",
                                enabled: O.isReady,
                                checked: "script" === O.menuMode,
                                click: function() {
                                    return d.webContents.send("mode-changed", "script")
                                }
                            }, {
                                type: "separator"
                            }].concat(r()(u), [{
                                type: "separator"
                            }, {
                                label: "连接",
                                id: "connection",
                                enabled: !1
                            }, {
                                label: "关闭全部",
                                type: "normal",
                                enabled: O.isReady,
                                click: function() {
                                    k.delete("/connections")
                                }
                            }, {
                                type: "separator"
                            }, {
                                label: "更多",
                                submenu: [{
                                    label: "切换Dev工具",
                                    click: function() {
                                        d.webContents.toggleDevTools()
                                    }
                                }, {
                                    label: "将仪表板移至最近的显示器",
                                    click: function() {
                                        d.setBounds(I(d.getBounds())), S()
                                    }
                                }, {
                                    label: "重启",
                                    click: function() {
                                        l.app.relaunch(), l.app.exit(0)
                                    }
                                }, {
                                    label: "强制退出",
                                    click: function() {
                                        l.app.isQuiting = !0, l.app.quit()
                                    }
                                }]
                            }, {
                                type: "separator"
                            }, {
                                label: "退出",
                                click: function() {
                                    return d.webContents.send("app-exit")
                                }
                            }]));
                        case 18:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 14]
                ])
            }))), function() {
                return x.apply(this, arguments)
            });
        u(), l.ipcMain.handle("tray-create-destroy", (function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "create";
            "create" === t && u(), "destroy" === t && m && (m.destroy(), m = null)
        }));
        var L = l.Menu.buildFromTemplate([{
            label: "仪表盘",
            click: S
        }, {
            type: "separator"
        }, {
            label: "TUN 模式",
            type: "checkbox",
            id: "tun",
            enabled: !1,
            click: function(e) {
                e = e.checked, d.webContents.send("tun-changed", e)
            }
        }, {
            label: "混合配置",
            type: "checkbox",
            id: "mixin",
            enabled: !1,
            click: function(e) {
                e = e.checked, d.webContents.send("mixin-changed", e)
            }
        }, {
            type: "separator"
        }, {
            label: "プロキシモード",
            id: "mode",
            enabled: !1
        }, {
            label: "グローバル",
            type: "radio",
            id: "mode-global",
            enabled: !1,
            click: function() {
                return d.webContents.send("mode-changed", "global")
            }
        }, {
            label: "ルール",
            type: "radio",
            id: "mode-rule",
            enabled: O.isReady,
            checked: "rule" === O.menuMode,
            click: function() {
                return d.webContents.send("mode-changed", "rule")
            }
        }, {
            label: "直连",
            type: "radio",
            id: "mode-direct",
            enabled: !1,
            click: function() {
                return d.webContents.send("mode-changed", "direct")
            }
        }, {
            label: "脚本",
            type: "radio",
            id: "mode-script",
            enabled: !1,
            click: function() {
                return d.webContents.send("mode-changed", "script")
            }
        }, {
            type: "separator"
        }, {
            label: "更多",
            submenu: [{
                label: "切换Dev工具",
                click: function() {
                    d.webContents.toggleDevTools()
                }
            }, {
                label: "将仪表板移至最近的显示器",
                click: function() {
                    d.setBounds(I(d.getBounds())), S()
                }
            }, {
                label: "重启",
                click: function() {
                    l.app.relaunch(), l.app.exit(0)
                }
            }, {
                label: "强制退出",
                click: function() {
                    l.app.isQuiting = !0, l.app.quit()
                }
            }]
        }, {
            type: "separator"
        }, {
            label: "退出",
            click: function() {
                return d.webContents.send("app-exit")
            }
        }]);

        function D() {
            _() && m && m.setContextMenu(L)
        }
        D(), l.ipcMain.on("clash-core-status-change", (function(e, t) {
            var n;
            O.isReady = !0, _() && ((n = L.getMenuItemById("system-proxy")) && (n.enabled = 1 !== t), (n = L.getMenuItemById("mixin")) && (n.enabled = 1 !== t), (n = L.getMenuItemById("tun")) && (n.enabled = 1 !== t), ["global", "rule", "direct", "script"].forEach((function(e) {
                (e = L.getMenuItemById("mode-".concat(e))) && (e.enabled = 1 !== t)
            })), D())
        })), l.ipcMain.handle("tray-proxies-style", (function(e, t) {
            O.menuStyle = t
        })), l.ipcMain.handle("tray-proxies-icon", (function(e, t) {
            O.isShowDelayIcon = t
        })), l.ipcMain.on("mode-changed", (function(e, t) {
            O.menuMode = t, _() && (t = "mode-".concat(t), (t = L.getMenuItemById(t)) && (t.checked = !0), D())
        })), l.ipcMain.on("system-proxy-changed", (function(e, t) {
            O.systemProxyChecked = t
        })), l.ipcMain.on("mixin-changed", (function(e, t) {
            var n;
            O.mixinChecked = t, _() && ((n = L.getMenuItemById("mixin")) && (n.checked = t), D())
        })), l.ipcMain.on("tun-changed", (function(e, t) {
            var n;
            O.tunModeChecked = t, _() && ((n = L.getMenuItemById("tun")) && (n.checked = t), D())
        })), l.ipcMain.on("enhanced-tray-click", S), l.ipcMain.on("speed-update", (function(e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "#fff";
            try {
                if (m) {
                    var o, i = l.nativeImage.createFromDataURL(t);
                    if ("win32" === process.platform) {
                        if (60 === n) return void(f && (f.destroy(), f = null, h = 0));
                        var a = i.crop({
                                x: 0,
                                y: 0,
                                width: n + 8,
                                height: 69
                            }),
                            c = w.join(l.app.getPath("temp"), "cfw-sub.html"),
                            s = a.getSize(),
                            u = s.width,
                            p = s.height;
                        v.writeFileSync(c, '\n          <body style="position:relative;background-color:'.concat(r, ';overflow:hidden;-webkit-app-region:drag;margin:0;width:100%;height:100%;box-sizing:border-box;">\n            <img id="img" style="height:100%;width:100%;" src="').concat(a.toDataURL(), '" />\n            <div style="position:absolute;width:50%;height:100%;top:0;left:50%;-webkit-app-region:no-drag;" onclick="handleClick()"></div>\n          </body>\n          <script>\n            const { ipcRenderer } = require(\'electron\');\n            ipcRenderer.on(\'speed-update-win\', (e, url, bgc) => {\n              document.getElementById("img").src = url;\n              document.body.style.backgroundColor = bgc;\n            })\n            const handleClick = () => {\n              ipcRenderer.send(\'enhanced-tray-click\');\n            }\n          <\/script>\n          ')), f || (f = new l.BrowserWindow({
                            show: !0,
                            alwaysOnTop: !0,
                            closable: !1,
                            focusable: !1,
                            frame: !1,
                            useContentSize: !0,
                            maximizable: !1,
                            transparent: !0,
                            minimizable: !1,
                            resizable: !1,
                            webPreferences: {
                                nodeIntegration: !0,
                                contextIsolation: !1
                            }
                        })).loadFile(c), f.show(), f.webContents.send("speed-update-win", a.toDataURL(), r), h !== n && f.setBounds({
                            height: Math.ceil(p / 2.8),
                            width: Math.ceil(u / 2.8)
                        }), h = n
                    }
                    "darwin" === process.platform && ((o = ("" === t ? l.nativeImage.createFromPath(w.join(__static, "imgs", "logo_64_eyes.png")) : i.crop({
                        x: 0,
                        y: 0,
                        width: n,
                        height: 69
                    })).resize({
                        height: 23
                    })).setTemplateImage(!0), m.setImage(o))
                }
            } catch (e) {}
        }));
        var R, A, E = [{
            label: l.app.name,
            submenu: [{
                role: "about"
            }, {
                type: "separator"
            }, {
                role: "services"
            }, {
                type: "separator"
            }, {
                role: "hide"
            }, {
                role: "hideothers"
            }, {
                role: "unhide"
            }, {
                label: "Close",
                accelerator: "Command+W",
                click: function() {}
            }, {
                type: "separator"
            }, {
                label: "退出 Clash for Windows",
                accelerator: "Command+Q",
                click: function() {
                    d.webContents.send("app-exit")
                }
            }]
        }, {
            role: "editMenu"
        }, {
            label: "View",
            submenu: [{
                role: "reload"
            }, {
                role: "forceReload"
            }, {
                role: "toggleDevTools"
            }, {
                type: "separator"
            }, {
                role: "resetZoom"
            }, {
                role: "zoomIn",
                accelerator: "CmdOrCtrl+="
            }, {
                role: "zoomOut"
            }, {
                type: "separator"
            }, {
                role: "togglefullscreen"
            }]
        }, {
            role: "windowMenu"
        }, {
            role: "help",
            submenu: [{
                label: "Github",
                click: (A = a()(c.a.mark((function e() {
                    var t;
                    return c.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = (t = n(0)).shell, e.next = 3, t.openExternal("https://github.com/Fndroid/clash_for_windows_pkg");
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), function() {
                    return A.apply(this, arguments)
                })
            }, {
                label: "Document",
                click: (R = a()(c.a.mark((function e() {
                    var t;
                    return c.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = (t = n(0)).shell, e.next = 3, t.openExternal("https://docs.cfw.lbyczf.com/");
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), function() {
                    return R.apply(this, arguments)
                })
            }]
        }];
        l.Menu.setApplicationMenu(l.Menu.buildFromTemplate(E))
    }
    var P;
    t = l.app.requestSingleInstanceLock();

    function I(e) {
        var t = e.x,
            n = e.y;
        return !l.screen.getAllDisplays().find((function(e) {
            if (i = e.bounds) {
                var r = i.x,
                    o = i.y,
                    i = (e = i.width, i.height);
                return x.inRange(t, r, r + e) && x.inRange(n, o, o + i)
            }
        })) && (e = l.screen.getDisplayNearestPoint({
            x: t,
            y: n
        }).bounds) ? {
            x: e.x,
            y: e.y
        } : {
            x: t,
            y: n
        }
    }
    l.app.setAppUserModelId("com.lbyczf.clashwin"), l.app.setAsDefaultProtocolClient("clash"), l.app.setName("Clash for Windows"), l.app.setAboutPanelOptions({
        version: ""
    }), l.app.on("open-url", (function(e, t) {
        d.webContents.send("app-open", [t])
    })), t ? (l.app.on("second-instance", (function(e, t, n) {
        d && (d.webContents.send("app-open", t), d.isMinimized() && d.restore(), S())
    })), l.app.on("ready", (function() {
        n(22).init(), l.powerMonitor.on("shutdown", (function(e) {
            e.preventDefault(), d.webContents.send("app-exit"), setTimeout((function() {
                l.app.isQuiting = !0, l.app.quit()
            }), 5e3)
        })), O()
    }))) : l.app.quit(), l.app.on("activate", (function() {
        (null === d ? O : S)()
    })), l.app.on("certificate-error", (P = a()(c.a.mark((function e(t, n, r, o, i, a) {
        var s, u;
        return c.a.wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    u = fales;
                    try {
                        s = new URL(r), u = "raw.githubusercontent.com" === s.host && "/Fndroid/ads/master/ads_v2.json" === s.path
                    } catch (e) {}
                    if (!u && !C.includes(r)) {
                        e.next = 7;
                        break
                    }
                    t.preventDefault(), a(!0), e.next = 13;
                    break;
                case 7:
                    return e.next = 9, l.dialog.showMessageBox({
                        type: "warning",
                        buttons: ["Trust", "Cancel"],
                        title: "Certificate Error",
                        message: "Failed verify the certificate for ".concat(r, ". This may be because the certificate is self-signed or the certificate authority is not recognized. Do you want to trust this certificate?")
                    });
                case 9:
                    0 === (u = e.sent).response && l.dialog.showCertificateTrustDialog(d, {
                        certificate: i,
                        message: "If you keep seeing this error, you need to go to Keychain APP to trust the certificate."
                    }).catch((function(e) {
                        console.error(e)
                    })), a(!1);
                case 13:
                case "end":
                    return e.stop()
            }
        }), e)
    }))), function(e, t, n, r, o, i) {
        return P.apply(this, arguments)
    }))
}, function(e, t, n) {
    var r = n(6);
    e.exports = function(e) {
        if (Array.isArray(e)) return r(e)
    }, e.exports.default = e.exports, e.exports.__esModule = !0
}, function(e, t) {
    e.exports = function(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }, e.exports.default = e.exports, e.exports.__esModule = !0
}, function(e, t) {
    e.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }, e.exports.default = e.exports, e.exports.__esModule = !0
}, function(e, t) {
    e.exports = function(e) {
        if (Array.isArray(e)) return e
    }, e.exports.default = e.exports, e.exports.__esModule = !0
}, function(e, t) {
    e.exports = function(e, t) {
        var n = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
        if (null != n) {
            var r, o, i = [],
                a = !0,
                c = !1;
            try {
                for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
            } catch (e) {
                c = !0, o = e
            } finally {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (c) throw o
                }
            }
            return i
        }
    }, e.exports.default = e.exports, e.exports.__esModule = !0
}, function(e, t) {
    e.exports = function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }, e.exports.default = e.exports, e.exports.__esModule = !0
}, function(e, t, n) {
    e = function(e) {
        "use strict";
        var t, n = Object.prototype,
            r = n.hasOwnProperty,
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            a = o.asyncIterator || "@@asyncIterator",
            c = o.toStringTag || "@@toStringTag";

        function s(e, t, n) {
            return Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), e[t]
        }
        try {
            s({}, "")
        } catch (n) {
            s = function(e, t, n) {
                return e[t] = n
            }
        }

        function l(e, n, r, o) {
            var i, a, c, s;
            n = n && n.prototype instanceof b ? n : b, n = Object.create(n.prototype), o = new _(o || []);
            return n._invoke = (i = e, a = r, c = o, s = p, function(e, n) {
                if (s === f) throw new Error("Generator is already running");
                if (s === h) {
                    if ("throw" === e) throw n;
                    return O()
                }
                for (c.method = e, c.arg = n;;) {
                    var r = c.delegate;
                    if (r) {
                        var o = function e(n, r) {
                            var o;
                            if ((o = n.iterator[r.method]) === t) {
                                if (r.delegate = null, "throw" === r.method) {
                                    if (n.iterator.return && (r.method = "return", r.arg = t, e(n, r), "throw" === r.method)) return m;
                                    r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                                }
                                return m
                            }
                            return "throw" === (o = u(o, n.iterator, r.arg)).type ? (r.method = "throw", r.arg = o.arg, r.delegate = null, m) : (o = o.arg) ? o.done ? (r[n.resultName] = o.value, r.next = n.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, m) : o : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, m)
                        }(r, c);
                        if (o) {
                            if (o === m) continue;
                            return o
                        }
                    }
                    if ("next" === c.method) c.sent = c._sent = c.arg;
                    else if ("throw" === c.method) {
                        if (s === p) throw s = h, c.arg;
                        c.dispatchException(c.arg)
                    } else "return" === c.method && c.abrupt("return", c.arg);
                    if (s = f, "normal" === (o = u(i, a, c)).type) {
                        if (s = c.done ? h : d, o.arg !== m) return {
                            value: o.arg,
                            done: c.done
                        }
                    } else "throw" === o.type && (s = h, c.method = "throw", c.arg = o.arg)
                }
            }), n
        }

        function u(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }
        e.wrap = l;
        var p = "suspendedStart",
            d = "suspendedYield",
            f = "executing",
            h = "completed",
            m = {};

        function b() {}

        function y() {}

        function g() {}
        var w = {};
        w[i] = function() {
            return this
        }, (o = (o = Object.getPrototypeOf) && o(o(S([])))) && o !== n && r.call(o, i) && (w = o);
        var v = g.prototype = b.prototype = Object.create(w);

        function x(e) {
            ["next", "throw", "return"].forEach((function(t) {
                s(e, t, (function(e) {
                    return this._invoke(t, e)
                }))
            }))
        }

        function k(e, t) {
            var n;
            this._invoke = function(o, i) {
                function a() {
                    return new t((function(n, a) {
                        ! function n(o, i, a, c) {
                            if ("throw" !== (o = u(e[o], e, i)).type) {
                                var s = o.arg;
                                return (i = s.value) && "object" == typeof i && r.call(i, "__await") ? t.resolve(i.__await).then((function(e) {
                                    n("next", e, a, c)
                                }), (function(e) {
                                    n("throw", e, a, c)
                                })) : t.resolve(i).then((function(e) {
                                    s.value = e, a(s)
                                }), (function(e) {
                                    return n("throw", e, a, c)
                                }))
                            }
                            c(o.arg)
                        }(o, i, n, a)
                    }))
                }
                return n = n ? n.then(a, a) : a()
            }
        }

        function C(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function M(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function _(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }], e.forEach(C, this), this.reset(!0)
        }

        function S(e) {
            if (e) {
                if (n = e[i]) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var n, o = -1;
                    return (n = function n() {
                        for (; ++o < e.length;)
                            if (r.call(e, o)) return n.value = e[o], n.done = !1, n;
                        return n.value = t, n.done = !0, n
                    }).next = n
                }
            }
            return {
                next: O
            }
        }

        function O() {
            return {
                value: t,
                done: !0
            }
        }
        return ((y.prototype = v.constructor = g).constructor = y).displayName = s(g, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
            return !!(e = "function" == typeof e && e.constructor) && (e === y || "GeneratorFunction" === (e.displayName || e.name))
        }, e.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g, s(e, c, "GeneratorFunction")), e.prototype = Object.create(v), e
        }, e.awrap = function(e) {
            return {
                __await: e
            }
        }, x(k.prototype), k.prototype[a] = function() {
            return this
        }, e.AsyncIterator = k, e.async = function(t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new k(l(t, n, r, o), i);
            return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                return e.done ? e.value : a.next()
            }))
        }, x(v), s(v, c, "Generator"), v[i] = function() {
            return this
        }, v.toString = function() {
            return "[object Generator]"
        }, e.keys = function(e) {
            var t, n = [];
            for (t in e) n.push(t);
            return n.reverse(),
                function t() {
                    for (; n.length;) {
                        var r = n.pop();
                        if (r in e) return t.value = r, t.done = !1, t
                    }
                    return t.done = !0, t
                }
        }, e.values = S, _.prototype = {
            constructor: _,
            reset: function(e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(M), !e)
                    for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval
            },
            dispatchException: function(e) {
                if (this.done) throw e;
                var n = this;

                function o(r, o) {
                    return c.type = "throw", c.arg = e, n.next = r, o && (n.method = "next", n.arg = t), !!o
                }
                for (var i = this.tryEntries.length - 1; 0 <= i; --i) {
                    var a = this.tryEntries[i],
                        c = a.completion;
                    if ("root" === a.tryLoc) return o("end");
                    if (a.tryLoc <= this.prev) {
                        var s = r.call(a, "catchLoc"),
                            l = r.call(a, "finallyLoc");
                        if (s && l) {
                            if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                            if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                        } else if (s) {
                            if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                        } else {
                            if (!l) throw new Error("try statement without catch or finally");
                            if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                    var o = this.tryEntries[n];
                    if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var i = o;
                        break
                    }
                }
                var a = (i = i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc ? null : i) ? i.completion : {};
                return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, m) : this.complete(a)
            },
            complete: function(e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), m
            },
            finish: function(e) {
                for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), M(n), m
                }
            },
            catch: function(e) {
                for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var r, o = n.completion;
                        return "throw" === o.type && (r = o.arg, M(n)), r
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(e, n, r) {
                return this.delegate = {
                    iterator: S(e),
                    resultName: n,
                    nextLoc: r
                }, "next" === this.method && (this.arg = t), m
            }
        }, e
    }(e.exports);
    try {
        regeneratorRuntime = e
    } catch (t) {
        Function("r", "regeneratorRuntime = r")(e)
    }
}, function(e, t) {
    e.exports = require("@vue/reactivity")
}, function(e, t) {
    e.exports = require("fs")
}, function(e, t) {
    e.exports = require("lodash")
}, function(e, t) {
    e.exports = require("fix-path")
}, function(e, t) {
    e.exports = require("electron-window-bounds")
}]);