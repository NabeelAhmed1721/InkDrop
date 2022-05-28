import { UrlChangeDataType } from '../../background';

export type WrapperProps = UrlChangeDataType & {
  activated?: boolean;
};

export default function Wrapper({ url, activated = false }: WrapperProps) {
  return (
    <div
      style={{
        position: 'fixed',
        zIndex: 9999,
        backgroundColor: 'black',
        color: 'white',
      }}
    >
      <div>Url: {url}</div>
      <div>Activated: {activated ? 'yes' : 'no'}</div>
    </div>
  );
}
