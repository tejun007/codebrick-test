import axios from 'axios'

const API_SERVER_ADDRESS = 'http://0.0.0.0:5000'
const API_BASE_URL = `${API_SERVER_ADDRESS}/apis/v1`

axios.defaults.headers.post['Content-Type'] = 'application/json'

export default {
  inventory: {
    addItem: function () {
      return axios.get(`${API_BASE_URL}/timeline/filters`)
    },
    deleteItem: function (date, startTime, scrollDirection, mallNames, cate1s) {
      return axios.delete(`${API_BASE_URL}/timeline/goods`, {
        params: {
          date: date,
          start_time: startTime,
          scroll_direction: scrollDirection,
          mall_names: mallNames,
          cate1s: cate1s
        }
      })
    }
  }
}

