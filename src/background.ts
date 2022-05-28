import { handleNote } from './context';

type contextIdType = 'add-note';

chrome.contextMenus.onClicked.addListener(({ menuItemId, pageUrl }) => {
  switch (menuItemId as contextIdType) {
    case 'add-note':
      handleNote({ pageUrl });
  }
});

chrome.contextMenus.create({
  id: 'add-note' as contextIdType,
  title: 'Add Note',
});
