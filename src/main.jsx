// Import các module hiện có
import 'aframe-event-set-component';

// Templates
import './templates/common/assets';
import './templates/common/mixins';
import './templates/common/controls';
import './templates/common/environment';
import './templates/common/lights';
import './templates/common/sounds';
import './templates/ui/button';
import './templates/ui/banner';
import './templates/prefabs/trash';
import './templates/prefabs/trash-bin';
import './templates/routes/game-field';
import './templates/routes/start-screen';
import './templates/routes/game-over';
import './templates/routes/how-to-play';

// Register components
import './components/game-manager';
import './components/controls-checker';
import './components/throw-controls';
import './components/aframe-emit-event';
import './components/countdown';
import './components/game-field-manager';
import './components/how-to-play';
import './components/trash-bin';
import './components/trash-bin-collider';
import './components/indicator';
import './components/trash';
import './components/restrict-position';
import './components/to-camera';
import './components/tutorial';
import './components/floor-collider';

// State
import './states/index';

// Systems
import './systems/trash';
import './systems/trash-bin';

// Import React và các thành phần liên quan
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Đường dẫn tới file App.jsx
import './index.css'; // CSS tùy chọn nếu bạn có

// Khởi tạo ứng dụng React
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);