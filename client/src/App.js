import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

function App() {
    return (
        <div class="container">
            <nav class="navbar navbar-expand bg-light navbar-primary justify-content-center rounded my-3">
                <h2 class="text-primary">Tweets</h2>
                <img src={memories} alt="memories" height="60"/>
            </nav>

            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-xs-12">
                        <Posts />
                    </div>
                    <div class="col-sm-4 col-xs-12">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;