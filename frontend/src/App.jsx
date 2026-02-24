import { Routes, Route } from 'react-router'

import HomePage from "./pages/HomePage.jsx"
import CreatePage from "./pages/CreatePage.jsx"
import NoteDetailPage from "./pages/NoteDetailPage.jsx"

const App = () => {
    return (
        <div data-theme="dim" className='relative h-full w-full'>
                  {/* <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div> */}

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreatePage />} />
                <Route path="/note/:id" element={<NoteDetailPage />} />
            </Routes>
        </div>
    )
}

export default App
