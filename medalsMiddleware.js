const request = require('request')
const cheerio = require('cheerio')

module.exports = function (req, res) {
  const sortOrder = req.query.rank === 'total' ? 'total' : 'gold'
  const url = `https://www.rio2016.com/en/medal-count-country?rank=${sortOrder}`

  request(url, function (err, response, html) {
    if (err) {
      console.log(`unexpected eror on call to ${url}`, err)
      return res.status(500).end()
    }
    const $ = cheerio.load(html)
    const standings = []
    $('.table-medal-countries__link-table').each((i, el) => {
      const countryCode = $('.col-2 .country', el).text()
      const countryName = $('.col-3 .country', el).text()
      const rank = parseInt($('.col-1', el).text().trim(), 10)
      const gold = parseInt($('.col-4', el).text(), 10)
      const silver = parseInt($('.col-5', el).text(), 10)
      const bronse = parseInt($('.col-6', el).text(), 10)
      standings.push({
        country_code: countryCode,
        country_name: countryName,
        rank,
        gold_count: gold,
        silver_count: silver,
        bronze_count: bronse,
        total: gold + silver + bronse
      })
    })
    return res.json(standings)
  })
}
