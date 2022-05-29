import { UrlChangeDataType } from '../../background';
import { ToolBar } from '.';
// import styles from '../styles/Wrapper.module.css';

export type WrapperProps = UrlChangeDataType & {
  activated?: boolean;
};

export default function Wrapper({ url, activated = false }: WrapperProps) {
  return <ToolBar url={url} activated={true} />;
}
