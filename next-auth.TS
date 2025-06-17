import { signIn } from 'next-auth/react';

function ConnectYouTube() {
  return <button onClick={() => signIn('youtube')}>Connect YouTube</button>;
}
