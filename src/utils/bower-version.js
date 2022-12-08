export default function browerVersion() {
    var ua = navigator.userAgent
    var ver = 0
    var versiondata
    var versionbool

    if (ua) {
        if (ua.match(/MSIE\s+([\d]+)\./i)) {
            ver = RegExp.$1
        } else if (ua.match(/Trident.*rv\s*:\s*([\d]+)\./i)) {
            ver = RegExp.$1
        }
    }

    versiondata = parseInt(ver)

    if (versiondata <= 9 && versiondata !== 0) {
        versionbool = true
    } else {
        versionbool = false
    }

    // versionbool    true: 低于ie9   false: ie10+
    return versionbool
}