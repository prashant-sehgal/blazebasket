import CryptoJS from 'crypto-js'

export default function aes256CbcDecrypt(encryptedHex, keyHex, ivHex) {
  const key = CryptoJS.enc.Hex.parse(keyHex)
  const iv = CryptoJS.enc.Hex.parse(ivHex)

  // Decrypt the ciphertext
  const encryptedBytes = CryptoJS.enc.Hex.parse(encryptedHex)
  const decrypted = CryptoJS.AES.decrypt({ ciphertext: encryptedBytes }, key, {
    iv,
  })

  // Convert the decrypted data to a UTF-8 string
  const originalMessage = decrypted.toString(CryptoJS.enc.Utf8)
  return originalMessage
}
