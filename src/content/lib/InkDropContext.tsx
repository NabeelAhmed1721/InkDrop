import { createContext, ReactNode, useState, Dispatch } from 'react';
import { NoteProps } from '../components/Note';

type ContextProviderProps = {
  url: string;
  activated: boolean;
  children: ReactNode;
};

type InkDropContextType = {
  url: string;
  activated: boolean;
  notes: NoteProps[];
};

const defaultValues: InkDropContextType = {
  url: '',
  activated: false,
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
