// preload.js
const { contextBridge, ipcRenderer } = require('electron');
const Store = require('electron-store');
const path = require('path');



const store = new Store({
  name: 'my-electron-store',
  fileExtension: '',
  encryptionKey: 'my-secret-key',
  cwd: path.join(__dirname, '../../'),
});

contextBridge.exposeInMainWorld('electron', {
  store: {
    get: (key) => store.get(key),
    set: (key, value) => store.set(key, value),
    has: (key) => store.has(key),
    delete: (key) => store.delete(key),
    clear: () => store.clear(),
  },
});

ipcRenderer.on('electron-store-set', (event, key, value) => {
  store.set(key, value);
});

ipcRenderer.on('electron-store-get', (event, key) => {
  event.returnValue = store.get(key);
});
