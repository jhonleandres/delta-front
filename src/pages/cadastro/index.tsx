import React, { useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Input } from '../../components/Input'
import { Checkbox } from '../../components/Checkbox'
import { Button } from '../../components/Button'

const Cadastro: NextPage = () => {
  const [nomeCompleto, setNomeCompleto] = useState<string>('')
  const [cpf, setCpf] = useState<string>('')
  const [dataNascimento, setDataNascimento] = useState<string>('')
  const [foneCelular, setFoneCelular] = useState<string>('')
  const [foneFixo, setFoneFixo] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [newsletter, setNewsletter] = useState<boolean>(false)
  const [cep, setCep] = useState<string>('')
  const [logradouro, setLogradouro] = useState<string>('')
  const [complemento, setComplemento] = useState<string>('')
  const [numero, setNumero] = useState<string>('')
  const [bairro, setBairro] = useState<string>('')
  const [cidade, setCidade] = useState<string>('')
  const [ibge, setIbge] = useState<number>()
  const [uf, setUf] = useState<number>()
  const router = useRouter()

  const handleCheckboxChange = () => setNewsletter(!newsletter)

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(event.target.newsletter.checked)
    const jsonData = {
      nomeCompleto: event.target.nomeCompleto.value,
      cpf: event.target.cpf.value,
      dataNascimento: event.target.dataNascimento.value,
      foneCelular: event.target.foneCelular.value,
      foneFixo: event.target.foneFixo.value,
      email: event.target.email.value,
      newsletter: event.target.newsletter.checked,
      cep: event.target.cep.value,
      logradouro: event.target.logradouro.value,
      numero: event.target.numero.value,
      bairro: event.target.bairro.value,
      cidade: event.target.cidade.value,
      // ibge: event.target.ibge.value,
      uf: event.target.uf.value,
    }

    const res = await fetch(process.env.NEXT_PUBLIC_API + '/cadastro', {
      body: JSON.stringify(jsonData),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    const result = await res.json()
  }

  return (
    <div className="flex justify-center ">
      <aside className="mt-12 h-full mb-10">
        <form onSubmit={handleSubmit} className="w-full max-w-lg ">
          <div className="flex flex-wrap -mx-3 mb-1">
            <div className="w-full px-4 md:mb-0">
              <Input
                label="Nome Completo"
                name="nomeCompleto"
                placeholder="Tatiane M Marinho"
                type="text"
                onChange={({ target }) => setNomeCompleto(target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-1">
            <div className="w-full md:w-3/5 px-4 md:mb-0">
              <Input
                label="CPF"
                name="cpf"
                placeholder="000.000.000-00"
                type="text"
                mask="999.999.999-99"
                value={cpf}
                onChange={({ target }) => setCpf(target.value)}
              />
            </div>
            <div className="md:w-52 px-2">
              <Input
                label="Data Nascimento"
                name="dataNascimento"
                type="date"
                onChange={({ target }) => setDataNascimento(target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-1">
            <div className="w-full md:w-3/5 px-4 md:mb-0">
              <Input
                label="Telefone Movel"
                name="foneCelular"
                placeholder="(00) 9 0000-0000"
                type="text"
                mask="(99) 9 9999-9999"
                value={foneCelular}
                onChange={({ target }) => setFoneCelular(target.value)}
              />
            </div>

            <div className="md:w-52 px-2">
              <Input
                label="Telefone Fixo"
                name="foneFixo"
                placeholder="(00) 0000-0000"
                type="text"
                mask="(99) 9999-9999"
                value={foneFixo}
                maxLength="9"
                onChange={({ target }) => setFoneFixo(target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-1">
            <div className="w-full px-4 md:mb-0">
              <Input
                label="E-mail"
                name="email"
                placeholder="contato@e-mail.com.br"
                type="email"
                onChange={({ target }) => setEmail(target.value)}
              />
            </div>
          </div>
          <Checkbox
            name="newsletter"
            description={
              'Quero receber alertas, promoções e novidades por email.'
            }
            checked={newsletter}
            onChange={handleCheckboxChange}
          />

          <div className="flex flex-wrap -mx-3 mb-1">
            <div className="md:w-52 px-4">
              <Input
                label="CEP"
                name="cep"
                placeholder="00.000-000"
                mask="99.999-999"
                value={cep}
                maxLength="9"
                onChange={({ target }) => setCep(target.value)}
              />
            </div>
            <div className="w-full md:w-3/5 px-2 md:mb-0">
              <Input
                label="Rua"
                name="logradouro"
                placeholder="Nome da rua"
                type="text"
                onChange={({ target }) => setLogradouro(target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-1">
            <div className="md:w-52 px-4">
              <Input
                label="Número"
                name="numero"
                value={numero}
                placeholder="134"
                type="text"
                onChange={({ target }) => setNumero(target.value)}
              />
            </div>
            <div className="w-full md:w-3/5 px-2 md:mb-0">
              <Input
                label="Bairro"
                name="bairro"
                placeholder="Nome do bairro"
                type="text"
                onChange={({ target }) => setBairro(target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-1">
            <div className="w-full md:w-3/5 px-4 md:mb-0">
              <Input
                label="Cidade"
                name="cidade"
                placeholder="Nome da cidade"
                type="text"
                onChange={({ target }) => setCidade(target.value)}
              />
            </div>
            <div className="md:w-52 px-2">
              <Input
                label="Estado"
                name="uf"
                placeholder="Nome do Estado"
                type="text"
                onChange={({ target }) => setUf(target.value)}
              />
            </div>
          </div>
          <Button>Registrar dados</Button>
        </form>
      </aside>
    </div>
  )
}
export default Cadastro
