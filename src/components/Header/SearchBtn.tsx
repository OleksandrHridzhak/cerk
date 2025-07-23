import React from 'react';

type SearchBtnProps = {
    onClick?: () => void;
    ariaLabel?: string;
};

const SearchBtn: React.FC<SearchBtnProps> = ({ onClick, ariaLabel = 'Search' }) => (
    <button
        type="button"
        onClick={onClick}
        aria-label={ariaLabel}
        style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
        }}
    >
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            focusable="false"
        >
            <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2" />
            <line
                x1="14.5"
                y1="14.5"
                x2="18"
                y2="18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    </button>
);

export default SearchBtn;