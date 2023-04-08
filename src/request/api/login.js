import service from '..'

// get captcha (LoginView.vue)
export function getCaptcha(phone) {
  return service({
    method: 'GET',
    url: `/captcha/sent?phone=${phone}`,
  })
}

// login by captcha (LoginView.vue)
export function captchaLogin(data) {
  return service({
    method: 'GET',
    url: `/captcha/verify?phone=${data.phone}&captcha=${data.captcha}`,
  })
}