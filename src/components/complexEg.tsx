import React, { useState } from 'react';
import { Button, Input, List, Typography, Radio, Space, Statistic, Row, Col } from 'antd';
import { DeleteOutlined, CheckOutlined } from '@ant-design/icons';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// Define the Task interface
interface Task {
    id: number;
    text: string;
    completed: boolean;
}

// Define the store state type
interface TaskState {
    tasks: Task[];
    addTask: (text: string) => void;
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
    clearCompleted: () => void;
}

// Create the Zustand store
const useTaskStore = create<TaskState>()(
    devtools(
        persist(
            (set) => ({
                tasks: [],
                addTask: (text) =>
                    set((state) => ({
                        tasks: [...state.tasks, { id: Date.now(), text, completed: false }],
                    })),
                toggleTask: (id) =>
                    set((state) => ({
                        tasks: state.tasks.map((task) =>
                            task.id === id ? { ...task, completed: !task.completed } : task
                        ),
                    })),
                deleteTask: (id) =>
                    set((state) => ({
                        tasks: state.tasks.filter((task) => task.id !== id),
                    })),
                clearCompleted: () =>
                    set((state) => ({
                        tasks: state.tasks.filter((task) => !task.completed),
                    })),
            }),
            {
                name: 'task-storage',
            }
        )
    )
);

// Create the TaskManager component
const TaskManager: React.FC = () => {
    const { tasks, addTask, toggleTask, deleteTask, clearCompleted } = useTaskStore();
    const [newTaskText, setNewTaskText] = useState('');
    const [filter, setFilter] = useState('all');

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true;
    });

    const handleAddTask = () => {
        if (newTaskText.trim()) {
            addTask(newTaskText.trim());
            setNewTaskText('');
        }
    };

    const activeTaskCount = tasks.filter((task) => !task.completed).length;
    const completedTaskCount = tasks.length - activeTaskCount;

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <Typography.Title level={2}>Task Manager</Typography.Title>

            <Input.Group compact>
                <Input
                    style={{ width: 'calc(100% - 200px)' }}
                    value={newTaskText}
                    onChange={(e) => setNewTaskText(e.target.value)}
                    onPressEnter={handleAddTask}
                    placeholder="Enter a new task"
                />
                <Button type="primary" onClick={handleAddTask}>
                    Add Task
                </Button>
            </Input.Group>

            <Radio.Group
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                style={{ marginTop: '20px' }}
            >
                <Radio.Button value="all">All</Radio.Button>
                <Radio.Button value="active">Active</Radio.Button>
                <Radio.Button value="completed">Completed</Radio.Button>
            </Radio.Group>

            <List
                style={{ marginTop: '20px' }}
                bordered
                dataSource={filteredTasks}
                renderItem={(task) => (
                    <List.Item>
                        <Space>
                            <Button
                                type={task.completed ? 'primary' : 'default'}
                                shape="circle"
                                icon={<CheckOutlined />}
                                onClick={() => toggleTask(task.id)}
                            />
                            <Typography.Text delete={task.completed}>{task.text}</Typography.Text>
                        </Space>
                        <Button
                            type="text"
                            danger
                            icon={<DeleteOutlined />}
                            onClick={() => deleteTask(task.id)}
                        />
                    </List.Item>
                )}
            />

            <Row gutter={16} style={{ marginTop: '20px' }}>
                <Col span={8}>
                    <Statistic title="Total Tasks" value={tasks.length} />
                </Col>
                <Col span={8}>
                    <Statistic title="Active Tasks" value={activeTaskCount} />
                </Col>
                <Col span={8}>
                    <Statistic title="Completed Tasks" value={completedTaskCount} />
                </Col>
            </Row>

            <Button danger onClick={clearCompleted} style={{ marginTop: '20px' }}>
                Clear Completed
            </Button>
        </div>
    );
};

export default TaskManager;