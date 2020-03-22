let _envName = ''
let _envApiRoot = ''

try {
  // extract the environment from the URL
  _envName = /AnonymousDrChat-(\w+-\d{1})/.exec(window.location.hostname)[1]
  // TODO update this url to reflect the backend server location
  _envApiRoot = 'https://AnonymousDrChat-' + _envName + '.herokuapp.com'
} catch (err) {
  _envName = 'local'
  _envApiRoot = 'http://localhost:8000/'
}

const Environment = {
    environment: _envName,
    apiUrls: {
        loginUrl: `${_envApiRoot}api/login/`,
    }
}

export default Environment