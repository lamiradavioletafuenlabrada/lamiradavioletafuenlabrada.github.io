import { renderToString } from 'react-dom/server';
import App from './App';
export { pages } from './data/pages';

export function render(page) {
  return renderToString(<App page={page} />);
}
