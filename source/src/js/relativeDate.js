import moment from 'moment'

export default function (date) {
  const m = moment(date)
  if (m.isAfter(moment().subtract(1, 'days'))) {
    return m.fromNow()
  } else if (m.isAfter(moment().subtract(1, 'years'))) {
    return m.format('D MMM')
  } else {
    return m.format('D MMM, Y')
  }
}