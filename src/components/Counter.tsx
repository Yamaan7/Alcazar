import React from 'react';
import { Button, Typography } from 'antd';
import create from 'zustand';

// Defined the store state type
interface CounterState {
    count: number;
    increment: () => void;
    decrement: () => void;
}

// Created the Zustand store
const useCounterStore = create<CounterState>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
}));

// Created the Counter component
const Counter: React.FC = () => {
    const { count, increment, decrement } = useCounterStore();

    return (
        <div style={{ textAlign: 'center', padding: '20px', marginTop: '100px', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '10px', }}>
            <Typography.Title level={2}
                style={{
                    color: 'white',
                    border: '1px dashed white',
                    borderRadius: '15px',
                    padding: '5px',
                    width: '50px',
                    alignItems: 'center',
                }}>{count}</Typography.Title>
            <Button onClick={increment} type="primary">
                Increment
            </Button>
            <Button onClick={decrement}>Decrement</Button>
        </div>
    );
};

export default Counter;