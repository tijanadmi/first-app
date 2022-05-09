import React,{Component} from "react";
import { createRoot } from 'react-dom/client';
import AppFooter from "./AppFooter";
import AppContent from "./AppContent";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'

class App extends Component {

  render() {
    return ( 
    <div>
      <div>
      <h1>Hello, world!</h1>
      <AppContent />
      </div>
      <AppFooter />
    </div>
    );
  }
}

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);

