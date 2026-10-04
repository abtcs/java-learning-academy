import { sortByKey, sortByMultiple } from './sorters.js';

// Sample dataset
const items = [
  { id: 101, name: 'Task C', priority: 2, dueDate: '2026-10-12' },
  { id: 102, name: 'Task A', priority: 1, dueDate: '2026-10-05' },
  { id: 103, name: 'Task B', priority: 2, dueDate: '2026-10-01' }
];

// 1. Single-key sort
const sortedByName = sortByKey(items, 'name', 'asc');
console.log('Sorted by name:', sortedByName);

// 2. Multi-field sort (priority ascending, then dueDate ascending)
const sortedByPriorityThenDate = sortByMultiple(items, [
  { key: 'priority', direction: 'asc' },
  { key: 'dueDate', direction: 'asc' }
]);
console.log('Multi-sorted:', sortedByPriorityThenDate);
