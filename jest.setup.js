// Workaround until this is fixed: https://github.com/jestjs/jest/issues/15727

const attr = {
    get () {
        return jsdom.cookieJar.getCookieStringSync(this.URL, { http: false })
    },

    set (cookieStr) {
        jsdom.cookieJar.setCookieSync(String(cookieStr), this.URL, { http: false, ignoreError: true })
    },

    configurable: true
}

// Object.defineProperty(document, 'cookie', attr)
