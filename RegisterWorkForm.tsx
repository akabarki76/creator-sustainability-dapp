import { useState } from 'react';
import { useAccount } from 'wagmi';

export default function RegisterWorkForm() {
  const { address } = useAccount();
  const [metadata, setMetadata] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // call smart contract function to register the work
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter IPFS hash / metadata"
        value={metadata}
        onChange={(e) => setMetadata(e.target.value)}
      />
      <button type="submit">Register Work</button>
    </form>
  );
}
