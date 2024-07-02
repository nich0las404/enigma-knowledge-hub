import "./App.css";
import Header from "./components/Header";
import CompanySection from "./components/Company";
import ProfilePage from "./components/Profile";
import ArticlePage from "./components/Article";
import Footer from "./components/Footer";
function App() {
  return (
    <div id="main-page">
      <Header/>
      <CompanySection/>
      <ProfilePage/>
      <ArticlePage/>
      <Footer/>
    </div>
  );
}

export default App;
