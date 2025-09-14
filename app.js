// Timetable Data in JSON format
const timetable = {
  'Monday': [
    { name: 'Wake + Freshen up', start: '06:00', end: '07:00' },
    { name: 'Breakfast + Getting Ready + Travel', start: '07:00', end: '08:00' },
    { name: 'College', start: '09:00', end: '13:00' },
    { name: 'Lunch + Coming home', start: '13:00', end: '14:00' },
    { name: 'Rest', start: '14:00', end: '16:00' },
    { name: 'Fullstack Dev', start: '16:00', end: '17:00' },
    { name: 'Gen AI', start: '17:00', end: '18:00' },
    { name: 'Buying Necessary Things', start: '18:00', end: '19:00' },
    { name: 'Relaxation', start: '19:00', end: '19:30' },
    { name: 'Assignments', start: '19:30', end: '21:30' },
    { name: 'Dinner', start: '21:30', end: '22:00' },
    { name: 'Call', start: '22:00', end: '22:30' },
    { name: 'LeetCode', start: '22:30', end: '23:30' },
    { name: 'Assignments', start: '23:30', end: '00:30' },
    { name: 'Personal Time', start: '00:30', end: '01:00' },
    { name: 'Sleep', start: '01:00', end: '07:00' },
  ],
  'Tuesday': [
    { name: 'Wake + Freshen up + Breakfast', start: '07:30', end: '08:30' },
    { name: 'Getting Ready + Lunch', start: '13:00', end: '14:00' },
    { name: 'College', start: '14:00', end: '18:00' },
    { name: 'NCC Training', start: '18:00', end: '20:00' },
    { name: 'Relaxation', start: '20:00', end: '20:30' },
    { name: 'Assignments', start: '20:30', end: '21:30' },
    { name: 'Dinner', start: '21:30', end: '22:00' },
    { name: 'Call', start: '22:00', end: '22:30' },
    { name: 'LeetCode', start: '22:30', end: '23:30' },
    { name: 'Assignments', start: '23:30', end: '00:30' },
    { name: 'Personal Time', start: '00:30', end: '01:00' },
    { name: 'Sleep', start: '01:00', end: '07:30' },
  ],
  'Wednesday': [
    { name: 'Wake + Freshen up', start: '06:00', end: '07:00' },
    { name: 'Breakfast + Getting Ready + Travel', start: '07:00', end: '08:00' },
    { name: 'College', start: '09:00', end: '13:00' },
    { name: 'Lunch + Coming home', start: '13:00', end: '14:00' },
    { name: 'Rest', start: '14:00', end: '16:00' },
    { name: 'Fullstack Dev', start: '16:00', end: '17:00' },
    { name: 'Gen AI', start: '17:00', end: '18:00' },
    { name: 'Free / Relaxation', start: '18:00', end: '19:00' },
    { name: 'Relaxation', start: '19:00', end: '19:30' },
    { name: 'Assignments', start: '19:30', end: '21:30' },
    { name: 'Dinner', start: '21:30', end: '22:00' },
    { name: 'Call', start: '22:00', end: '22:30' },
    { name: 'LeetCode', start: '22:30', end: '23:30' },
    { name: 'Assignments', start: '23:30', end: '00:30' },
    { name: 'Personal Time', start: '00:30', end: '01:00' },
    { name: 'Sleep', start: '01:00', end: '07:00' },
  ],
  'Thursday': [
    { name: 'Wake + Freshen up + Breakfast', start: '07:30', end: '08:30' },
    { name: 'Getting Ready + Lunch', start: '13:00', end: '14:00' },
    { name: 'College', start: '14:00', end: '18:00' },
    { name: 'NCC Training', start: '18:00', end: '20:00' },
    { name: 'Relaxation', start: '20:00', end: '20:30' },
    { name: 'Assignments', start: '20:30', end: '21:30' },
    { name: 'Dinner', start: '21:30', end: '22:00' },
    { name: 'Call', start: '22:00', end: '22:30' },
    { name: 'LeetCode', start: '22:30', end: '23:30' },
    { name: 'Assignments', start: '23:30', end: '00:30' },
    { name: 'Personal Time', start: '00:30', end: '01:00' },
    { name: 'Sleep', start: '01:00', end: '07:30' },
  ],
  'Friday': [
    { name: 'Wake + Freshen up', start: '06:00', end: '07:00' },
    { name: 'Breakfast + Getting Ready + Travel', start: '07:00', end: '08:00' },
    { name: 'College', start: '09:00', end: '13:00' },
    { name: 'Lunch + Coming home', start: '13:00', end: '14:00' },
    { name: 'Rest', start: '14:00', end: '16:00' },
    { name: 'Fullstack Dev', start: '16:00', end: '17:00' },
    { name: 'Gen AI', start: '17:00', end: '18:00' },
    { name: 'Free / Relaxation', start: '18:00', end: '19:00' },
    { name: 'Relaxation', start: '19:00', end: '19:30' },
    { name: 'Assignments', start: '19:30', end: '21:30' },
    { name: 'Dinner', start: '21:30', end: '22:00' },
    { name: 'Call', start: '22:00', end: '22:30' },
    { name: 'LeetCode', start: '22:30', end: '23:30' },
    { name: 'Assignments', start: '23:30', end: '00:30' },
    { name: 'Personal Time', start: '00:30', end: '01:00' },
    { name: 'Sleep', start: '01:00', end: '07:00' },
  ],
  'Saturday': [
    { name: 'Wake + Freshen up + Breakfast', start: '07:30', end: '08:30' },
    { name: 'Getting Ready + Lunch', start: '13:00', end: '14:00' },
    { name: 'College', start: '14:00', end: '18:00' },
    { name: 'Buying Necessary Things', start: '18:00', end: '19:00' },
    { name: 'Relaxation', start: '19:00', end: '19:30' },
    { name: 'Assignments', start: '19:30', end: '21:30' },
    { name: 'Dinner', start: '21:30', end: '22:00' },
    { name: 'Call', start: '22:00', end: '22:30' },
    { name: 'LeetCode', start: '22:30', end: '23:30' },
    { name: 'Assignments', start: '23:30', end: '00:30' },
    { name: 'Personal Time', start: '00:30', end: '01:00' },
    { name: 'Sleep', start: '01:00', end: '07:30' },
  ],
  'Sunday': [
    { name: 'Wake + Freshen up', start: '04:00', end: '04:30' },
    { name: 'NCC Training', start: '04:30', end: '08:00' },
    { name: 'Relax + Sleep recovery + Breakfast', start: '08:00', end: '10:00' },
    { name: 'Bath & Washing', start: '10:00', end: '11:00' },
    { name: 'Relaxation', start: '11:00', end: '11:30' },
    { name: 'Fullstack Dev', start: '11:30', end: '12:30' },
    { name: 'Gen AI', start: '12:30', end: '13:00' },
    { name: 'Lunch', start: '13:00', end: '13:30' },
    { name: 'Sleep / Rest', start: '13:30', end: '15:30' },
    { name: 'Assignments', start: '15:30', end: '16:00' },
    { name: 'Playing Sports', start: '16:00', end: '18:00' },
    { name: 'Out with Friends', start: '18:00', end: '19:00' },
    { name: 'Relaxation', start: '19:00', end: '19:30' },
    { name: 'Assignments', start: '19:30', end: '21:30' },
    { name: 'Dinner', start: '21:30', end: '22:00' },
    { name: 'Call', start: '22:00', end: '22:30' },
    { name: 'Free / Personal hobby', start: '22:30', end: '23:00' },
    { name: 'LeetCode', start: '23:00', end: '00:00' },
    { name: 'Personal time', start: '00:00', end: '01:00' },
    { name: 'Sleep', start: '01:00', end: '07:00' },
  ],
};

document.addEventListener('DOMContentLoaded', () => {
  const currentTimeEl = document.getElementById('current-time');
  const currentWeekdayEl = document.getElementById('current-weekday');
  const currentTaskNameEl = document.getElementById('current-task-name');
  const currentTaskTimeEl = document.getElementById('current-task-time');
  const progressBarEl = document.getElementById('progress-bar');
  const previousTaskNameEl = document.getElementById('previous-task-name');
  const previousTaskTimeEl = document.getElementById('previous-task-time');
  const nextTaskNameEl = document.getElementById('next-task-name');
  const nextTaskTimeEl = document.getElementById('next-task-time');
  const showCompletedBtn = document.getElementById('show-completed-btn');
  const completedTasksList = document.getElementById('completed-tasks-list');
  const showRemainingBtn = document.getElementById('show-remaining-btn');
  const remainingTasksList = document.getElementById('remaining-tasks-list');
  const timetableAccordion = document.getElementById('timetable-accordion');
  const notesContainer = document.getElementById('notes-container');
  const addNoteBtn = document.getElementById('add-note-btn');

  // Modal elements
  const modal = document.getElementById('custom-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalMessage = document.getElementById('modal-message');
  const modalInput = document.getElementById('modal-input');
  const modalConfirm = document.getElementById('modal-confirm');
  const modalCancel = document.getElementById('modal-cancel');

  /**
   * Prompts the user with a custom modal.
   * @param {string} title
   * @param {string} message
   * @param {string} initialValue
   * @returns {Promise<string|null>} A promise that resolves with the user's input or null.
   */
  const showPrompt = (title, message, initialValue = '') => {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modalInput.value = initialValue;
    modalInput.classList.remove('hidden');
    modalCancel.classList.remove('hidden');
    modal.classList.remove('hidden', 'opacity-0');
    modal.classList.add('show');
    
    return new Promise((resolve) => {
      const handleConfirm = () => {
        resolve(modalInput.value);
        hideModal();
      };
      
      const handleCancel = () => {
        resolve(null);
        hideModal();
      };

      modalConfirm.addEventListener('click', handleConfirm, { once: true });
      modalCancel.addEventListener('click', handleCancel, { once: true });
    });
  };

  /**
   * Confirms an action with a custom modal.
   * @param {string} title
   * @param {string} message
   * @returns {Promise<boolean>} A promise that resolves to true for confirm, false for cancel.
   */
  const showConfirm = (title, message) => {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modalInput.classList.add('hidden');
    modalCancel.classList.remove('hidden');
    modal.classList.remove('hidden', 'opacity-0');
    modal.classList.add('show');
    
    return new Promise((resolve) => {
      const handleConfirm = () => {
        resolve(true);
        hideModal();
      };
      
      const handleCancel = () => {
        resolve(false);
        hideModal();
      };

      modalConfirm.addEventListener('click', handleConfirm, { once: true });
      modalCancel.addEventListener('click', handleCancel, { once: true });
    });
  };

  /**
   * Hides the custom modal.
   */
  const hideModal = () => {
    modal.classList.remove('show');
    modal.classList.add('opacity-0');
    setTimeout(() => {
      modal.classList.add('hidden');
      modalInput.value = '';
    }, 300); // Wait for the transition to finish
  };

  // --- Utility Functions ---

  /**
   * Formats a number to have a leading zero if it's a single digit.
   * @param {number} num
   * @returns {string}
   */
  const formatTimeComponent = (num) => num.toString().padStart(2, '0');

  /**
   * Converts a time string (HH:MM) to minutes from midnight.
   * @param {string} timeStr
   * @returns {number}
   */
  const timeToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    // Handle times past midnight (e.g., 01:00 AM)
    if (hours >= 1 && hours <= 6) return (hours + 24) * 60 + minutes;
    return hours * 60 + minutes;
  };

  /**
   * Updates the real-time clock and timetable information.
   */
  const updateClockAndTimetable = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const dayIndex = now.getDay();
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = weekdays[dayIndex];
    const currentMinutes = hours * 60 + minutes + seconds / 60;

    currentTimeEl.textContent = `${formatTimeComponent(hours)}:${formatTimeComponent(minutes)}:${formatTimeComponent(seconds)}`;
    currentWeekdayEl.textContent = currentDay;

    const dayTasks = timetable[currentDay] || [];
    let currentTask = null;
    let previousTask = null;
    let nextTask = null;
    let completedTasks = [];
    let remainingTasks = [];

    // Filter tasks based on the current time
    for (let i = 0; i < dayTasks.length; i++) {
      const task = dayTasks[i];
      const startTimeMinutes = timeToMinutes(task.start);
      const endTimeMinutes = timeToMinutes(task.end);

      if (currentMinutes >= startTimeMinutes && currentMinutes < endTimeMinutes) {
        currentTask = task;
        previousTask = i > 0 ? dayTasks[i - 1] : null;
        nextTask = i < dayTasks.length - 1 ? dayTasks[i + 1] : null;
        completedTasks = dayTasks.slice(0, i);
        remainingTasks = dayTasks.slice(i + 1);
        break;
      }
    }

    // Handle tasks that span midnight
    const findCurrentMidnightTask = () => {
      for (const task of dayTasks) {
        const startTime = new Date();
        const [startHours, startMinutes] = task.start.split(':').map(Number);
        startTime.setHours(startHours, startMinutes, 0, 0);

        const endTime = new Date();
        const [endHours, endMinutes] = task.end.split(':').map(Number);
        endTime.setHours(endHours, endMinutes, 0, 0);

        if (endTime < startTime) {
          endTime.setDate(endTime.getDate() + 1);
        }

        if (now >= startTime && now < endTime) {
          return task;
        }
      }
      return null;
    };
    
    currentTask = findCurrentMidnightTask() || currentTask;

    // Update Current Task Card
    if (currentTask) {
      currentTaskNameEl.textContent = currentTask.name;
      currentTaskTimeEl.textContent = `${currentTask.start} – ${currentTask.end}`;

      const startTime = new Date();
      const [startH, startM] = currentTask.start.split(':').map(Number);
      startTime.setHours(startH, startM, 0);
      if (startH >= 1 && startH <= 6) startTime.setDate(startTime.getDate() + (startH > now.getHours() ? -1 : 0));

      const endTime = new Date();
      const [endH, endM] = currentTask.end.split(':').map(Number);
      endTime.setHours(endH, endM, 0);
      if (endTime < startTime) endTime.setDate(endTime.getDate() + 1);

      const totalDuration = endTime.getTime() - startTime.getTime();
      const remainingDuration = endTime.getTime() - now.getTime();
      const progress = (remainingDuration / totalDuration) * 100;

      progressBarEl.style.width = `${Math.max(0, Math.min(100, progress))}%`;
    } else {
      currentTaskNameEl.textContent = 'No current task';
      currentTaskTimeEl.textContent = '--:-- to --:--';
      progressBarEl.style.width = '0%';
    }

    // Update Previous & Next Task Cards
    if (previousTask) {
      previousTaskNameEl.textContent = previousTask.name;
      previousTaskTimeEl.textContent = `${previousTask.start} – ${previousTask.end}`;
    } else {
      previousTaskNameEl.textContent = 'No previous task';
      previousTaskTimeEl.textContent = '--:-- to --:--';
    }

    if (nextTask) {
      nextTaskNameEl.textContent = nextTask.name;
      nextTaskTimeEl.textContent = `${nextTask.start} – ${nextTask.end}`;
    } else {
      nextTaskNameEl.textContent = 'No next task';
      nextTaskTimeEl.textContent = '--:-- to --:--';
    }
    
    // Update Completed and Remaining tasks lists
    const generateTaskListHTML = (tasks) => {
      return tasks.map(task => `
        <div class="py-1">
          <p class="font-medium text-gray-800 dark:text-gray-200">${task.name}</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">${task.start} – ${task.end}</p>
        </div>
      `).join('');
    };

    completedTasksList.innerHTML = generateTaskListHTML(completedTasks);
    remainingTasksList.innerHTML = generateTaskListHTML(remainingTasks);
  };

  setInterval(updateClockAndTimetable, 1000);
  updateClockAndTimetable();

  // --- Accordion Logic ---

  /**
   * Renders the day-wise timetable accordion.
   */
  const renderAccordion = () => {
    const days = Object.keys(timetable);
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    
    // Sort days to put the current day first
    const sortedDays = [today, ...days.filter(d => d !== today)];
    
    timetableAccordion.innerHTML = sortedDays.map(day => {
      const isCurrentDay = day === today;
      const tasks = timetable[day];
      const tasksHTML = tasks.map(task => `
        <div class="py-2 px-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
          <p class="font-semibold text-gray-800 dark:text-gray-200">${task.name}</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">${task.start} – ${task.end}</p>
        </div>
      `).join('');

      return `
        <div class="accordion-item glassmorphism-card my-2">
          <div class="accordion-item-header p-4 flex justify-between items-center text-gray-800 dark:text-gray-100">
            <h3 class="text-lg font-semibold">${day}</h3>
            <span class="transform transition-transform duration-300">▼</span>
          </div>
          <div class="accordion-item-body">
            <div class="p-4 pt-0">
              ${tasksHTML}
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach click listeners to accordion headers
    document.querySelectorAll('.accordion-item-header').forEach(header => {
      header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        const arrow = header.querySelector('span');
        const isExpanded = body.classList.toggle('expanded');
        arrow.style.transform = isExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
      });
    });
  };

  renderAccordion();

  // --- Notes Logic (Updated) ---

  /**
   * Renders notes from localStorage.
   */
  const renderNotes = () => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notesContainer.innerHTML = notes.map((note, index) => `
      <div class="note-card shadow-lg p-4 relative" data-id="${index}">
        <p class="note-content text-gray-800 dark:text-gray-100">${note.content}</p>
        <div class="note-buttons absolute top-2 right-2 flex space-x-2">
          <button class="edit-note-btn text-blue-500 hover:text-blue-700" data-id="${index}">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zm-3.5 3.5a2 2 0 112.828 2.828L7.828 15.636a.5.5 0 01-.19.14l-4.5 1.5a.5.5 0 01-.62-.62l1.5-4.5a.5.5 0 01.14-.19l7.07-7.07z" /></svg>
          </button>
          <button class="delete-note-btn text-red-500 hover:text-red-700" data-id="${index}">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm6 0a1 1 0 11-2 0v6a1 1 0 112 0V8z" clip-rule="evenodd" /></svg>
          </button>
        </div>
      </div>
    `).join('');
  };

  /**
   * Adds a new note to localStorage and re-renders the notes list.
   */
  const addNote = async () => {
    const content = await showPrompt('Add Note', 'Enter your new note:');
    if (content) {
      const notes = JSON.parse(localStorage.getItem('notes')) || [];
      notes.push({ content: content, timestamp: new Date().toISOString() });
      localStorage.setItem('notes', JSON.stringify(notes));
      renderNotes();
    }
  };

  /**
   * Deletes a note from localStorage by its index.
   * @param {number} index
   */
  const deleteNote = async (index) => {
    const confirmed = await showConfirm('Delete Note', 'Are you sure you want to delete this note?');
    if (confirmed) {
      const notes = JSON.parse(localStorage.getItem('notes')) || [];
      notes.splice(index, 1);
      localStorage.setItem('notes', JSON.stringify(notes));
      renderNotes();
    }
  };

  /**
   * Edits a note in localStorage.
   * @param {number} index
   */
  const editNote = async (index) => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const newContent = await showPrompt('Edit Note', 'Edit your note:', notes[index].content);
    if (newContent !== null) {
      notes[index].content = newContent;
      localStorage.setItem('notes', JSON.stringify(notes));
      renderNotes();
    }
  };

  // Event Listeners for Notes
  addNoteBtn.addEventListener('click', addNote);
  notesContainer.addEventListener('click', (e) => {
    const deleteBtn = e.target.closest('.delete-note-btn');
    const editBtn = e.target.closest('.edit-note-btn');

    if (deleteBtn) {
      const index = deleteBtn.dataset.id;
      deleteNote(index);
    }
    if (editBtn) {
      const index = editBtn.dataset.id;
      editNote(index);
    }
  });

  // Event Listeners for "See More" buttons
  showCompletedBtn.addEventListener('click', () => {
    completedTasksList.classList.toggle('hidden');
    showCompletedBtn.textContent = completedTasksList.classList.contains('hidden') ? 'See More' : 'See Less';
  });

  showRemainingBtn.addEventListener('click', () => {
    remainingTasksList.classList.toggle('hidden');
    showRemainingBtn.textContent = remainingTasksList.classList.contains('hidden') ? 'See More' : 'See Less';
  });

  // Initial render
  renderNotes();
});