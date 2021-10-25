interface IFormatCep {
  nonformatedCep: number
}
const buscaCep = async (cep: string): Promise<string> => {
  if (!cep) {
    throw new Error('CEP vazio')
  }

  const nonformatedCep = cep.trim().replace('-', '').replace('.', '')

  if (nonformatedCep.length < 8) {
    throw new Error('CEP incompleto')
  }
  if (isNaN(nonformatedCep)) {
    throw new Error('CEP inválido')
  }

  const response = await fetch(
    `https://viacep.com.br/ws/${nonformatedCep}/json/`,
  )
  return response.json()
}

export default buscaCep
