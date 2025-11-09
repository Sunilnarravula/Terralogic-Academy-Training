import { render, screen, fireEvent} from '@testing-library/react';
import Counter from './Counter';

test('increment counter when button is clicked', ()=>{
    render(<Counter/>)
    const button = screen.getByText(/Increment/i);
    const countDisplay = screen.getByTestId("count");

    expect(countDisplay.textContent).toBe("0");
    fireEvent.click(button);
    expect(countDisplay.textContent).toBe("1");
})
