import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders h1 ', () => {
  render(<App />);

  // Check for <h1> tag
  const heading1 = screen.getByRole('heading', { level: 1 });
  expect(heading1).toHaveTextContent('Welcome to react with github actions CI-CD');
 
});
test('renders h4 ', () => {
  render(<App />);
  // Check for <h4> tag
  const heading4 = screen.getByRole('heading', { level: 4 });
  expect(heading4).toHaveTextContent('Learning CI-CD with github actions');
});
test('renders p ', () => {
  render(<App />);
  // Check for <h4> tag
  const paragraph = screen.getByRole('paragraph');
  expect(paragraph).toHaveTextContent('this is ci-cd basics');
});
