import React, { useState, FormEvent } from 'react';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useGlobalState } from '../..';

import styles from './login.module.css';
import getUrl from '../../helper/getUrl';
import Loading from '../../components/Loading/Loading';
import { Redirect } from 'react-router';

export interface LoginProps {}

const wait = (time: number): Promise<void> =>
  new Promise(resolve => setTimeout(() => resolve(), time));
const waitAtLeast = async <T extends any>(
  promise: Promise<T>,
  time: number
): Promise<T> => (await Promise.all([promise, wait(time)]))[0];

const Login: React.FC<LoginProps> = () => {
  const [state, setGlobalState] = useGlobalState();
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  if (done) {
    return <Redirect to="/" />;
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username !== '' && password !== '') {
      setLoading(true);
      waitAtLeast(axios.post(getUrl('login'), { username, password }), 750)
        .then(res => {
          if (res.data.success) {
            setGlobalState.setToken(res.data.data.token);
            toast('Logged In.');
            setDone(true);
          } else {
            setMessage(res.data.message);
            setLoading(false);
          }
        })
        .catch(error => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            setMessage(error.response.data.message);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
          setLoading(false);
        });
    }
  };

  return (
    <Container wrap>
      <div className={styles.contactWrap}>
        <Title title="Login" style={{ color: 'black' }} />
        {loading && <Loading />}
        <div className={styles.mainInputWrap}>
          <form onSubmit={submit}>
            <div className={styles.contactError}>{message}</div>
            <div className={styles.emptyNotice}>
              <span>Please Fill Required Fields</span>
            </div>
            <div className={styles.wrap}>
              <input
                type="text"
                placeholder="Your Username"
                value={username}
                onChange={event => setUsername(event.target.value)}
                required
              />
            </div>
            <div className={styles.wrap}>
              <input
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                required
              />
            </div>
            {/* <div className={styles.wrap}>
            <textarea
              placeholder="Your Message"
              value={formMessage}
              onChange={event => setFormMessage(event.target.value)}
            />
          </div> */}
            <Button type="submit">Login</Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Login;
