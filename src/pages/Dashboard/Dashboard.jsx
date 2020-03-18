import React from "react";
import DButton from "./DButton";
import Header from "../../components/commons/Header";
import Footer from "../../components/commons/Footer";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard__holder">
        <Header />
        <div className="dashboard columns is-mobile is-multiline">
          <DButton
            label="Pic"
            description="Create a pic meme fast and quick"
            href="/image-editor"
            btn_label="Try Pic 📸"
          />
          <DButton
            label="GIF"
            description="Create a GIF meme fast and quick"
            href="/gif-editor"
            btn_label="Try GIF 📸"
          />
          <DButton
            label="Video"
            description="Create a video meme fast and easy"
            href="/video-editor"
            btn_label="Try Video 🎥"
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
