const auth = (req, res, next) => {
  let url = req.url
  console.log(url)
  if (url !== '/' && url !== '/login' && url !== '/logout') {
    console.log('not login page')
    if (req.cookies.logged != 'true') {
      console.log('false')
      return res.status(200).redirect('/')
    } else {
      console.log('true')
      next()
    }
  } else {
    console.log('login page')
    next()
  }
}
module.exports = { auth }
