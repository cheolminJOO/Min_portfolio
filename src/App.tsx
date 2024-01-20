
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import './App.css';
import { FullPage, Slide } from "react-full-page";

function App() {

  return (
    <FullPage>
      <Slide>
        <h1>저는 주철민입니다.</h1>
      </Slide>
      <Slide>
        <h1>Another slide content</h1>
      </Slide>
      <Slide>
        <h1>Another slide content</h1>
      </Slide>
    </FullPage>
  );
}

export default App;
