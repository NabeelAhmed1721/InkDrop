import styles from '../styles/DrawContainer.module.css';
// eslint-disable-next-line import/named
import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas';
import { Ref, useContext, useEffect, useRef, useState } from 'react';
import { InkDropContext } from '../lib/InkDropContext';

export default function DrawContainer() {
  const sketchRef = useRef<ReactSketchCanvasRef>();
  const renderRef = useRef<ReactSketchCanvasRef>();
  const [context, setContext] = useContext(InkDropContext);
  const [showSketch, setShowSketch] = useState(context.enableDraw);

  useEffect(() => {
    if (context.drawPath) {
      renderRef.current?.loadPaths(context.drawPath);
    }
  }, [context]);

  useEffect(() => {
    if (context.enableDraw) {
      setShowSketch(true);
    } else {
      sketchRef.current?.exportPaths().then((drawPath) => {
        setContext({
          ...context,
          drawPath,
        });
        setShowSketch(false);
        renderRef.current?.loadPaths(drawPath);
        return true;
      });
    }
  }, [context.enableDraw]);

  return showSketch ? (
    <div className={styles.container}>
      <ReactSketchCanvas
        ref={sketchRef as Ref<ReactSketchCanvasRef>}
        className={styles.canvas}
        canvasColor="rgba(255,255,255,0)"
        width={`${document.body.clientWidth}px`}
        height={`${document.body.clientHeight}px`}
      />
    </div>
  ) : (
    <ReactSketchCanvas
      ref={renderRef as Ref<ReactSketchCanvasRef>}
      className={styles.render}
      style={{ pointerEvents: 'none' }}
      canvasColor="rgba(255,255,255,0)"
      width={`${document.body.clientWidth}px`}
      height={`${document.body.clientHeight}px`}
    />
  );
}
