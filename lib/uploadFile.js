const fetch = require('node-fetch')
const FormData = require('form-data')
const { fromBuffer } = require('file-type')
const fs = require('fs')
const ra = require('ra-api')
/**
 * Upload epheremal file to uguu.se
 * `Expired in 2 day`
 * `124MB Max Filesize`
 * @param {Buffer} buffer File Buffer
 */
module.exports = async buffer => {
  const { ext } = await fromBuffer(buffer) || {}
  await fs.promises.writeFile('upload.' + ext, buffer)
  kk = await ra.UploadFile('upload.' + ext)
  await fs.promises.unlink('upload.' + ext)
  return kk.result.namaFile
  }