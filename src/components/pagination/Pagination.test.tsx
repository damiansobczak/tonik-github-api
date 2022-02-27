import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Pagination from "./Pagination";
import { SearchProvider } from "../../context/search";

test('renders pagination buttons correctly', () => {
    render(
        <SearchProvider>
           <Pagination showPrevious={true} showNext={true} next={() => {}} previous={() => {}} />
        </SearchProvider>
    );
    const nextBtn = screen.getByText(/next/i);
    const previousBtn = screen.getByText(/previous/i);
    expect(nextBtn).toBeInTheDocument();
    expect(previousBtn).toBeInTheDocument();
});

test('prevents from increment pagination when button disabled', () => {
    const increment = jest.fn();

    render(
        <SearchProvider>
            <Pagination showPrevious={true} showNext={false} next={increment} previous={() => {}} />
        </SearchProvider>
    );

    const nextBtn = screen.getByText(/next/i);
    expect(nextBtn).toBeDisabled();

    fireEvent.click(nextBtn);

    expect(increment).toHaveBeenCalledTimes(0);
    expect(nextBtn).toBeDisabled();
});

test('allow to increment pagination when button enabled', () => {
    const increment = jest.fn();

    render(
        <SearchProvider>
            <Pagination showPrevious={true} showNext={true} next={increment} previous={() => {}} />
        </SearchProvider>
    );

    const nextBtn = screen.getByText(/next/i);
    expect(nextBtn).not.toBeDisabled();

    fireEvent.click(nextBtn);

    expect(increment).toHaveBeenCalledTimes(1);
    expect(nextBtn).not.toBeDisabled();
});
