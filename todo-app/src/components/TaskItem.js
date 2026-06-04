'use client';

export default function TaskItem({ task, onToggle, onDelete, onUpdate }) {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Work': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'Personal': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      'Shopping': 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
      'Health': 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
      'Other': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
    };
    return colors[category] || colors['Other'];
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const isOverdue = task.dueDate && new Date(task.dueDate) < new Date() && !task.completed;

  return (
    <div className={`task-item ${task.completed ? 'opacity-75' : ''} ${isOverdue ? 'border-red-300 dark:border-red-700' : ''}`}>
      <div className="flex items-start gap-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
        />

        <div className="flex-1 min-w-0">
          <h3 className={`font-semibold text-lg ${task.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''}`}>
            {task.title}
          </h3>
          
          {task.description && (
            <p className={`text-sm mt-1 ${task.completed ? 'text-gray-400 dark:text-gray-500' : 'text-gray-600 dark:text-gray-300'}`}>
              {task.description}
            </p>
          )}

          <div className="flex flex-wrap gap-2 mt-3">
            <span className={`badge ${getCategoryColor(task.category)}`}>
              {task.category}
            </span>
            <span className={`badge ${getPriorityColor(task.priority)}`}>
              {task.priority}
            </span>
            {task.dueDate && (
              <span className={`badge ${isOverdue ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}>
                📅 {formatDate(task.dueDate)}
              </span>
            )}
          </div>
        </div>

        <button
          onClick={() => onDelete(task.id)}
          className="btn-danger py-1 px-3 text-sm flex-shrink-0"
          title="Delete task"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}
