import Auth from './Pages/Auth/Auth';
import Quiz from './Pages/Quiz/Quiz';
import QuizCreator from './Pages/QuizCreator/QuizCreator';
import QuizList from './Pages/QuizList/QuizList';
import Layout from './hoc/Layout/Layout';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path='/auth' element={<Auth />} />
                <Route path='/quiz-creator' element={<QuizCreator />} />
                <Route path='/quiz/:id' element={<Quiz />} />
                <Route path='/' element={<QuizList />} />
            </Routes>
        </Layout>
    );
}

export default App;
