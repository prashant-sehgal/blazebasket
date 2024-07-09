import { useEffect } from 'react'

export default function Prompt({ prompt, close }) {
  let color

  switch (prompt.type) {
    case 'error':
      color = '#dc3545'
      break

    case 'warn':
      color = '#c79708'
      break

    case 'success':
      color = '#198754'
      break

    default:
      color = '#ffffff'
  }

  useEffect(function () {
    setTimeout(function () {
      close()
    }, 2000)
  }, [])

  return (
    <div className="prompt" style={{ borderBottomColor: color }}>
      <p style={{ color }}>{prompt.message}</p>
    </div>
  )
}
