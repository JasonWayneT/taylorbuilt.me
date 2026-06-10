import { Link } from 'react-router-dom';
import { primaryBtn, secondaryBtn } from '../components/ui/buttonStyles';
import { usePageTitle } from '../hooks/usePageTitle';

export default function NotFound() {
  usePageTitle('Page Not Found');
  return (
    <div className="w-full max-w-4xl mx-auto px-8 py-section-padding text-center">
      <h1 className="font-h1 text-4xl md:text-h1 text-text-primary mb-6">Page not found.</h1>
      <p className="font-body-lg text-text-secondary mb-10 max-w-md mx-auto">
        That URL doesn't exist. Try one of these instead.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/" className={primaryBtn}>Go Home</Link>
        <Link to="/work" className={secondaryBtn}>View Work</Link>
      </div>
    </div>
  );
}
