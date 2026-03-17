console.log("JavaScript conectado!")
function filtrar(tipo) {
  const beats = document.querySelectorAll('.beat-card')
  const botones = document.querySelectorAll('.filtro-btn')

  botones.forEach(btn => btn.classList.remove('active'))
  event.target.classList.add('active')

  beats.forEach(beat => {
    const bpm = parseInt(beat.getAttribute('data-bpm'))

    if (tipo === 'todos') {
      beat.style.display = 'flex'
    } else if (tipo === 'lento' && bpm >= 100 && bpm <= 114) {
      beat.style.display = 'flex'
    } else if (tipo === 'medio' && bpm >= 115 && bpm <= 124) {
      beat.style.display = 'flex'
    } else if (tipo === 'rapido' && bpm >= 125) {
      beat.style.display = 'flex'
    } else {
      beat.style.display = 'none'
    }
  })
}