// Dependencies
import {createRoot} from 'react-dom/client'
import {App} from "./components";

const container = document.getElementById('root');
const root = createRoot(container);
import './styles/main.scss';

root.render(<App/>)
