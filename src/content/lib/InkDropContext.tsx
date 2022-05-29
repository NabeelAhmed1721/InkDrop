import { createContext, ReactNode, useState, Dispatch } from 'react';
// eslint-disable-next-line import/named
import { CanvasPath } from 'react-sketch-canvas';
import { NoteProps } from '../components/Note';

type ContextProviderProps = {
  url: string;
  activated: boolean;
  children: ReactNode;
};

type InkDropContextType = {
  url: string;
  activated: boolean;
  enableDraw: boolean;
  drawPath: CanvasPath[];
  notes: NoteProps[];
};

const defaultValues: InkDropContextType = {
  url: '',
  activated: false,
  enableDraw: false,
  drawPath: [],
  notes: [],
};

export const InkDropContext = createContext<
  [InkDropContextType, Dispatch<InkDropContextType>]
>([defaultValues, () => undefined]);

export function InkDropContextProvider({
  url,
  activated,
  children,
}: ContextProviderProps) {
  const state = useState<InkDropContextType>({
    ...defaultValues,
    url,
    activated,
  });

  return (
    <InkDropContext.Provider value={state}>{children}</InkDropContext.Provider>
  );
}
