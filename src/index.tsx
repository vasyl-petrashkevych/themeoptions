// Dependencies
import {createRoot} from 'react-dom/client'
import {App} from "./components";

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
import './styles/main.scss';

root.render(<App/>)
