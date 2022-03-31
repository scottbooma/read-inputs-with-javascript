const inputs = document.querySelectorAll("input")

function logValues() {
  return inputs.forEach(input => {
    console.log(input.value)
  })
}
