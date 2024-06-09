// script.js

// Add event listener to vent button
document.getElementById('vent-btn').addEventListener('click', () => {
    // Send textarea value to server or store locally
    console.log(document.getElementById('vent-textarea').value);
    document.getElementById('vent-textarea').value = '';
});

// Generate list of listeners dynamically
const listeners = [
    { name: 'Listener 1', description: 'Description 1' },
    { name: 'Listener 2', description: 'Description 2' },
    //...
];
listeners.forEach((listener) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${listener.name} - ${listener.description}`;
    document.getElementById('listeners-list').appendChild(listItem);
});

// Generate list of resources dynamically
const resources = [
    { name: 'Resource 1', url: 'https://example.com/resource1' },
    { name: 'Resource 2', url: 'https://example.com/resource2' },
    //...
];
resources.forEach((resource) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = resource.url;
    link.textContent = resource.name;
    listItem.appendChild(link);
    document.getElementById('resources-list').appendChild(listItem);
});