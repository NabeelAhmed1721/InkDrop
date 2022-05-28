type contextIdType = 'inkdrop-edit-page';

export type ActivateEditorType = {
  url: string;
};

export type UrlChangeDataType = {
  url: string;
};

export type WorkerMessageType<T = unknown> = {
  type: 'url-change' | 'activate-editor';
  data: T;
};

chrome.contextMenus.onClicked.addListener(({ menuItemId, pageUrl }) => {
  switch (menuItemId as contextIdType) {
    case 'inkdrop-edit-page':
      chrome.tabs.query({ currentWindow: true, active: true }, (tab) => {
        const tabId = tab[0].id;
        if (tabId) {
          const message: WorkerMessageType<ActivateEditorType> = {
            type: 'activate-editor',
            data: { url: pageUrl },
          };

          chrome.tabs.sendMessage(tabId, message);
        } else {
          throw new Error(`Couldn't find tab.`);
        }
      });
  }
});

chrome.contextMenus.create({
  id: 'inkdrop-edit-page' as contextIdType,
  title: 'Edit Page',
});

chrome.tabs.onUpdated.addListener((tabId, { status }, { url }) => {
  try {
    if (status === 'complete' && url) {
      const message: WorkerMessageType<UrlChangeDataType> = {
        type: 'url-change',
        data: { url },
      };

      chrome.tabs.sendMessage(tabId, message);
    }
  } catch (error) {
    throw new Error(String(error));
  }
});
