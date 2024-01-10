import SignUpForm from '../components/SignUpForm';
import '../styles/global.css';
import Counter from './counter';

export default function Page() {
  return (
    <div className="container mx-auto">
      <h1 data-testid="heading" className="text-3xl font-bold text-center">
        Hello world!
      </h1>
      <Counter />
      <SignUpForm />
    </div>
  );
}
