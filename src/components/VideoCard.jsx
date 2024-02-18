import style, { styled } from "styled-components";
// import data from "../containsData/data.json";
function VideoCard({ videoData }) {
  //   console.log(data);
  return (
    <Card className="section">
      <div>
        <img
          className="thumnail-details"
          src={videoData.thumbNailLink}
          alt="loading.."
          height={196}
          width={349}
        />
        <div className="video-card">
          <div>
            <img
              src={videoData.channelPicture}
              alt=""
              height={50}
              width={50}
              className="thumnail"
              id="video-thumbnail"
            />
          </div>
          <div className="details">
            <h1 className="title">{videoData.title}</h1>
            <h3 className="channel">{videoData.channelName}</h3>
            <div className="metadata">
              <span className="views">{videoData.currentViews}</span> .{" "}
              <span className="date">{videoData.uploadedDate}</span>
            </div>
          </div>
        </div>
        <div className="video-details"></div>
      </div>
    </Card>
  );
}
export default VideoCard;

const Card = styled.section`
  height: 280px;
  width: 380px;
  //   line-height: 6px;
  //   border: 1px solid white;
  .video-card {
    display: flex;
    flex-direction: row;
    // justify-content: space-around;
  }
  .thumnail {
    margin-top: 18px;
    margin-right: 18px;
    border-radius: 25px;
  }
  .thumnail-details {
    border-radius: 16px;
  }
  .video-details {
    margin-left: 70px;
  }
  .details {
    /* Add styles to control the container's spacing */
    margin-bottom: 10px;
  }

  .title {
    margin-bottom: 5px;
  }

  .channel {
    margin-bottom: 5px;
  }

  .metadata {
    margin-top: 5px;
  }

  .views,
  .date {
    margin-right: 5px;
  }
`;
