import '@/styles/global.css';
import Counter from './counter';

export const metadata = {
  title: 'App Router',
};

export default function Page() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center">Hello world!</h1>
      <Counter />
    </div>
  );
}
