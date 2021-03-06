import { ReactNode, useContext, useEffect } from 'react';
import { UrlChangeDataType } from '../../background';
import { ToolBar, NoteContainer } from '.';
import { InkDropContext, InkDropContextProvider } from '../lib/InkDropContext';
import DrawContainer from './DrawContainer';
// import styles from '../styles/Wrapper.module.css';

export type WrapperProps = UrlChangeDataType & {
  activated?: boolean;
};

export default function Wrapper({ url, activated = false }: WrapperProps) {
  // remove query params from url
  return (
    <>
      <InkDropContextProvider url={url.split(/[?#]/)[0]} activated={activated}>
        <Controller>
          <ToolBar activated={activated} />
          <NoteContainer />
          <DrawContainer />
        </Controller>
      </InkDropContextProvider>
    </>
  );
}

type ControllerProps = {
  children: ReactNode;
};

function Controller({ children }: ControllerProps) {
  const [context, setContext] = useContext(InkDropContext);

  useEffect(() => {
    const savedData = localStorage.getItem(`inkdrop-objects-${context.url}`);
    if (savedData) {
      setContext({
        ...JSON.parse(savedData),
      });
    }
  }, []);

  useEffect(() => {
    const { drawPath, notes, url } = context;
    localStorage.setItem(
      `inkdrop-objects-${context.url}`,
      JSON.stringify({ drawPath, notes, url }),
    );
  }, [context]);

  return <div>{children}</div>;
}
