import { render, screen } from '@testing-library/react';
import { MyComponent } from './myComponent';

test('should render my component', () => {
  render(<MyComponent />);
  // screen.debug();
  expect(screen.getByText('hello world')).toBeInTheDocument();
});
