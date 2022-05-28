import {
  ActivateEditorType,
  UrlChangeDataType,
  WorkerMessageType,
} from './background';
import { Wrapper } from './content/components';
import { WrapperProps } from './content/components/Wrapper';
import InkDropWrapper from './content/lib/InkDropWrapper';

chrome.runtime.onMessage.addListener(
  ({ type, data }: WorkerMessageType, _, sendResponse) => {
    switch (type) {
      case 'url-change':
        mountInkDropWrapper(data as UrlChangeDataType);
        break;
      case 'activate-editor':
        activateEditor(data as ActivateEditorType);
        break;
    }

    // Acknowledge message received
    sendResponse({});
    return true;
  },
);

const inkDropWrapper = new InkDropWrapper();
function mountInkDropWrapper(props: UrlChangeDataType) {
  const isInstalled = inkDropWrapper.isInstalled();

  if (!isInstalled) {
    inkDropWrapper.install(document.body);
    inkDropWrapper.render<WrapperProps>(Wrapper, props);
  } else {
    inkDropWrapper.unmount();
    inkDropWrapper.render<WrapperProps>(Wrapper, props);
  }
}

function activateEditor(props: ActivateEditorType) {
  inkDropWrapper.unmount();
  inkDropWrapper.render<WrapperProps>(Wrapper, {
    ...props,
    activated: true,
  });
}
