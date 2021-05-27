import Button from '@/components/Button';
import Input from '@/components/Input';
import { Container, Form } from '@/styles/pages/Register';
import { FaHome } from 'react-icons/fa';
import React, { FormEvent, useState } from 'react';
import { parseCookies, setCookie } from 'nookies';
import Footer from '@/components/Footer';
import Head from 'next/head';

interface Address {
  cep: number;
  uf: string;
  localidade: string; // city
}

export default function Register() {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState(new Date());
  const [cpf, setCpf] = useState('');
  const [cepp, setCepp] = useState<number | null>(null);

  const [invalidData, setInvalidData] = useState(false);
  const [userAlreadyExists, setUserAlreadyExists] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(false);
    setLoading(true);
    setSuccess(false);

    const { 'healthyfood.user': cookieUser } = parseCookies();

    const registeredUser = JSON.parse(cookieUser);
    if (registeredUser.cpf == cpf) {
      setUserAlreadyExists(true);
      setInvalidData(false);
      setLoading(false);
      return;
    }

    let address: Address | null = null;
    try {
      address = await fetch(`https://viacep.com.br/ws/${cepp}/json/`)
        .then(response => response.json())
        .then(data => data);
    } catch {
      setInvalidData(true);
      setUserAlreadyExists(false);
      setLoading(false);
      return;
    }

    setInvalidData(false);

    if (!name || !birthday || !cpf) {
      setInvalidData(true);
      setLoading(false);
      return;
    }

    const { cep, localidade, uf } = address;

    const user = JSON.stringify({
      name,
      birthday,
      cpf,
      cep,
      localidade,
      uf,
    });

    setCookie(undefined, 'healthyfood.user', user, {
      path: '/',
    });

    setName('');
    setBirthday(new Date());
    setCpf('');
    setCepp(null);
    setSuccess(true);
    setLoading(false);
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
            placeholder='CPF'
            value={cpf}
            onChange={event => setCpf(event.target.value)}
          />

          <label>CEP</label>
          <Input
            // required
            type='number'
            placeholder='CEP'
            value={cepp}
            onChange={event => setCepp(event.target.value)}
          />

          <Button type='submit'>{loading ? 'One moment...' : 'Sign Up'}</Button>
        </Form>
        {invalidData && <h2>You must fill in the fields with valid data</h2>}
        {userAlreadyExists && <h2>You are already registered</h2>}
        {success && <h3>Successfully registered</h3>}
      </Container>
      <Footer />
    </>
  );
}
