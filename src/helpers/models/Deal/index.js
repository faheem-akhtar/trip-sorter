/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import BaseModel from '../Base'

export class DealModel extends BaseModel {
  constructor(options) {
    super(options || { uri: '/fares.json', name: 'DealModel' })
  }

  get(segments = [], data = {}) {
    return super.get(segments, data)
  }
}

export default new DealModel()
