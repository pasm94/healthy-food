import Button from '@/components/Button';
import Input from '@/components/Input';
import { Container, Form } from '@/styles/pages/Register';
import { FaHome } from 'react-icons/fa';
import React, { FormEvent, useState } from 'react';
import { parseCookies, setCookie } from 'nookies';
import Footer from '@/components/Footer';
import Head from 'next/head';
import * as Yup from 'yup';

interface Address {
  cep: number;
  uf: string;
  localidade: string; // city
}

export default function Register() {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState(new Date());
  const [cpf, setCpf] = useState<number | ''>('');
  const [inputCep, setInputCep] = useState<number | undefined | null>(null);
  const [inputUf, setInputUf] = useState<string>('');
  const [inputLocalidade, setInputLocalidade] = useState<string>('');

  const [isInvalidData, setIsInvalidData] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [userAlreadyExists, setUserAlreadyExists] = useState(false);

  async function handleFindCep(cepValue: number) {
    let address: Address | null = null;
    try {
      address = await fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
        .then(response => response.json())
        .then(data => data);
    } catch {}

    if (!address) {
      return;
    }

    const { cep, localidade, uf } = address;

    setInputLocalidade(localidade);
    setInputUf(uf);
    setInputCep(cepValue);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        cpf: Yup.number()
          .test(
            'len',
            'Must be exactly 11 characters',
            val => val.toString().length === 11
          )
          .required(),
        birthday: Yup.date().required().max(new Date()),
        inputCep: Yup.number().required(),
      });

      await schema.validate(
        {
          name,
          cpf,
          birthday,
          inputCep,
        },
        { abortEarly: false }
      );
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        setIsInvalidData(true);
        setIsRegistered(false);
        setUserAlreadyExists(false);
        return;
      }
    }

    const { 'healthyfood.user': userFromCookies } = parseCookies();

    if (userFromCookies) {
      const registeredUser = JSON.parse(userFromCookies);
      if (registeredUser.cpf === cpf) {
        setUserAlreadyExists(true);
        setIsInvalidData(false);
        setIsRegistered(false);
        return;
      }
    }

    const userData = JSON.stringify({
      name,
      birthday,
      cpf,
      inputCep,
      inputLocalidade: inputLocalidade ? inputLocalidade : '-',
      inputUf: inputUf ? inputUf : '-',
    });

    setCookie(undefined, 'healthyfood.user', userData, {
      path: '/',
    });

    setName('');
    setBirthday(new Date());
    setCpf('');
    setInputCep(null);
    setIsInvalidData(false);
    setUserAlreadyExists(false);
    setIsRegistered(true);
  }

  return (
    <>
      <Head>
        <title>Healthy Food | Register</title>
      </Head>
      <Container>
        <span>
          <FaHome />
          <a href='/'>Home Page</a>
        </span>
        <h1>Sign Up</h1>

        <Form onSubmit={handleSubmit}>
          <label>Name</label>
          <Input
            // required
            placeholder='Name'
            value={name}
            onChange={event => setName(event.target.value)}
          />

          <label>Birthday</label>
          <Input
            // required
            type='date'
            value={birthday}
            onChange={event => setBirthday(event.target.value)}
          />

          <label>CPF</label>
          <Input
            // required
            type='number'
            placeholder='CPF'
            value={cpf}
            onChange={event => setCpf(event.target.value)}
          />

          <label>CEP</label>
          <Input
            // required
            type='number'
            placeholder='CEP'
            value={inputCep}
            onChange={() => {}}
            onBlur={event => handleFindCep(event.target.value)}
          />

          <label>City</label>
          <Input placeholder='City' value={inputLocalidade} readOnly />

          <label>State</label>
          <Input readOnly placeholder='State' value={inputUf} />

          {/* <Button type='submit'>{loading ? 'One moment...' : 'Sign Up'}</Button> */}
          <Button type='submit'>Sign Up</Button>
        </Form>
        {isInvalidData && <h2>Invalid data.</h2>}
        {isRegistered && <h3>You were registered!</h3>}
        {userAlreadyExists && <h3>You are already registered!</h3>}
      </Container>
      <Footer />
    </>
  );
}
