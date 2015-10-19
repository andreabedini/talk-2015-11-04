module.exports = config:
  files:
    javascripts:
      joinTo: 'app.js'
    stylesheets:
      joinTo: 'app.css'
  modules:
    wrapper: false
  plugins:
    jaded:
      jade:
        pretty: yes

