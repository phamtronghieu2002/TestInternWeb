import Item from "./Item/Item";
import "./home.scss";
import axios from "../..//configs/axios";
import { useState, useEffect } from "react";
function Home() {
  const [musics, setMusics] = useState([]);
  console.log(musics);
  useEffect(() => {
    // const fetchMusics = async () => {
    //   const res = await axios.get("/get/playlist/info?id=6IACDA86");
    //   console.log(res);
    //   setMusics(res?.song);
    // };
    // fetchMusics();
  }, []);
  return (
    <div className="wp_home_page">
      <div className="container">
        <div className="row">
          <div className="col-md-12 main_contain pt-3">
            <div className="music_player d-flex">
              <div className="avatar">
                <img
                  class="h-full w-full rounded"
                  alt="playlist-thumbnail"
                  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/4/5/3/24538985249cd4d3b324b4a4a09ad288.jpg"
                />
              </div>
              <div className="music_information">
                <h3 className="text-secondary mb-3">Lofi Một Chút Thôi</h3>
                <div>
                  <p className="text-secondary mb-3">Danh sách phát • Solfive</p>
                  <p className="text-secondary mb-3">
                    84 bài hát • 5 giờ 47 phút 1 giây
                  </p>
                  <p className="text-secondary">
                    Nhạc Việt "lâu phai" và gây nghiện hoài hoài
                  </p>
                </div>
                <div className="actions d-flex mt-3">
                  <button className="btn_random_playlist">
                    <i className="fa-solid fa-shuffle"></i>
                    <span>phát ngẫu nhiên</span>
                  </button>
                  <button className="btn_detail">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="playlist">
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              {/* {musics.map((item, index) => {
                return <Item key={index} {...item} />;
              })} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
