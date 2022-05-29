import { UrlChangeDataType } from '../../background';
import { ToolBar, NoteContainer } from '.';
// import styles from '../styles/Wrapper.module.css';

export type WrapperProps = UrlChangeDataType & {
  activated?: boolean;
};

export default function Wrapper({ activated = false }: WrapperProps) {
  return (
    <>
      <ToolBar activated={activated} />
      <NoteContainer />
    </>
  );
}
