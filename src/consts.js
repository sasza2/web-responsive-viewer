export const DEVICE_TYPES = {
  DEVICE_1: {
    name: 'iPhone 5/SE',
    width: 320,
    height: 568,
    mockupUrl: '/img/iphone5s.png',
    frameSizes: {
      top: 115,
      leftRight: 30,
      bottom: 108,
    }
  },
  DEVICE_2: {
    name: 'iPhone 6/7/8',
    width: 375,
    height: 667,
    mockupUrl: '/img/iphone7.png',
    frameSizes: {
      top: 152,
      leftRight: 62,
      bottom: 153,
    }
  },
  DEVICE_3: {
    name: 'iPhone 6/7/8 Plus',
    width: 414,
    height: 736,
    mockupUrl: '/img/iphone7Plus.png',
    frameSizes: {
      top: 207,
      leftRight: 105,
      bottom: 135,
    }
  },
}

export const PREDEFINED_PAGES = {
  WELCOME: 'about:welcome',
  DEVICES: 'about:devices',
}

export const PREDEFINED_PAGES_LIST = Object.values(PREDEFINED_PAGES)
