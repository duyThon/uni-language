const middleware = {}

middleware['axios-interceptor'] = require('../middleware/axios-interceptor.js')
middleware['axios-interceptor'] = middleware['axios-interceptor'].default || middleware['axios-interceptor']

export default middleware
