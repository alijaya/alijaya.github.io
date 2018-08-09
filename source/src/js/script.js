export function insertScript (src, id, parentElement) {
  const script = window.document.createElement('script')
  script.async = true
  script.src = src
  script.id = id
  parentElement.appendChild(script)
}

export function removeScript (id) {
  const script = window.document.getElementById(id)
  if (script) script.parentNode.removeChild(script)
}