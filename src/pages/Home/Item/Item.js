import "./item.scss";

function convertMinutesToHHMM(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    // Đảm bảo rằng các giá trị giờ và phút luôn có hai chữ số
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(mins).padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
  }
  
 
  
export default function Item({title,thumbnail,author,duration,alias,artistsNames}) {
  return (
    <div className="wp_music_item d-flex">
      <div className="header d-flex">
        <div className="avatar">
          <img src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/9/d/2/a9d204b914be91d8aa676a8a510d9dc4.jpg" />
          <i className="fa-solid fa-play btn_play btn_action"></i>
        </div>
        <p className="name_song text-light">dau co loi lam</p>
      </div>

      <div className="body d-flex">
        <p className="alias text-secondary">nguyen van a</p>
        <div className="actions text-secondary d-flex">
          <button className="btn_like btn_action btn_detail">
            <i class="fa-regular fa-heart"></i>
          </button>
          <button className="btn_detail btn_action">
          <i class="fa-solid fa-ellipsis-vertical"></i>
          </button>
          <span>4:33</span>
        </div>
      </div>
    </div>
  );
}
