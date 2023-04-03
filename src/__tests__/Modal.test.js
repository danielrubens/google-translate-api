import { screen, fireEvent } from '@testing-library/react';
import Modal from '../components/Modal';
import RenderStore from '../utils';


describe('Modal component', () => {
  it('updates the language when user types in the input field', () => {
    RenderStore(<Modal />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Spanish' } });
    expect(input).toHaveValue('Spanish');
  });
});
