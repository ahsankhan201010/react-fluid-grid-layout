import './App.css';
import GridLayout from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css"
import "/node_modules/react-resizable/css/styles.css"

function App() {
  return (
    <GridLayout style={{background: "lightgreen"}} isBounded={true}  compactType='horizontal' className="layout" cols={6} rowHeight={60} width={1200} >
        <div style={{background: "lightgray"}} key="a" data-grid={{ x: 0, y: 0, w: 1, h: 2, maxH: 2 }}>
          a
        </div>
        <div style={{background: "lightgray"}} key="b" data-grid={{ x: 1, y: 0, w: 1, h: 1, maxH: 2 }}>
          b
        </div>
        <div style={{background: "lightgray"}} key="c" data-grid={{ x: 2, y: 0, w: 1, h: 1, maxH: 2  }}>
          c
        </div>
      </GridLayout>
  );
}

export default App;
